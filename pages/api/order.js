import Order from "../../models/Order";
// import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
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
