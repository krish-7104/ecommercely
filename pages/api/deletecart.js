import Cart from "../../models/Cart";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    let cart = await Cart.findOneAndDelete({ user: req.body.user });
    res.status(200).json({ success: true, message: "cart deleted" });
  } else {
    res.status(400).json({ error: "This method is not allowed!" });
  }
};

export default connectDb(handler);
