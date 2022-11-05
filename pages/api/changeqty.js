import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    let product = await Product.find({ slug: req.body.slug });
    if (req.body.type === "add") {
      let qtyBefore = product[0].availableQty;
      let qtyAfter = qtyBefore - req.body.amount;
      let updateProd = await Product.updateOne(
        { slug: req.body.slug },
        { availableQty: qtyAfter }
      );
      res.status(200).json(updateProd);
    } else if (req.body.type === "remove") {
      let qtyBefore = product[0].availableQty;
      let qtyAfter = qtyBefore + req.body.amount;
      let updateProd = await Product.updateOne(
        { slug: req.body.slug },
        { availableQty: qtyAfter }
      );
      res.status(200).json(updateProd);
    }
  } else {
    res
      .status(400)
      .json({ success: false, error: "This method is not allowed!" });
  }
};

export default connectDb(handler);
