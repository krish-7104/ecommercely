import Order from "../../models/Order";
// import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    // let product,
    //   sumTotal = 0;
    // for (let item in req.body.products) {
    //   sumTotal += req.body.products[item].price * req.body.products[item].qty;
    //   product = await Product.findOne({ slug: item });
    //   if (product.price !== req.body.products[item].price) {
    //     res.status(200).json({
    //       success: true,
    //       error:
    //         "Please Readd The Item Into The Cart, Prices Of Some Item Have Changed!",
    //     });
    //     return;
    //   }
    // }
    // if (sumTotal !== req.body.amount) {
    //   res.status(200).json({
    //     success: true,
    //     error:
    //       "Please Readd The Item Into The Cart, Prices Of Some Item Have Changed!",
    //   });
    //   return;
    // }
    let order = new Order({
      email: req.body.email,
      orderId: req.body.orderId,
      amount: req.body.amount,
      address: req.body.address,
      products: req.body.products,
    });
    await order.save();
    res.status(200).json({ success: true, orderId: order.id });
  } else {
    res.status(400).json({ error: "This method is not allowed!" });
  }
};

export default connectDb(handler);
