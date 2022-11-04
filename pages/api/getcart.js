import Cart from "../../models/Cart";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  let cart = await Cart.find({ user: req.body.user });
  res.status(200).json(cart);
};

export default connectDb(handler);
