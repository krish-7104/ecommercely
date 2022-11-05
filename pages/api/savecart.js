import Cart from "../../models/Cart";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    let cart = await Cart.find({ user: req.body.user });
    if (cart.length !== 0) {
      let p = await Cart.findByIdAndUpdate(cart[0].id, req.body);
      res.status(200).json({ success: true, message: "cart updated" });
    } else {
      let newCart = new Cart({
        user: req.body.user,
        products: req.body.products,
      });
      await newCart.save();
      res.status(200).json({ success: true, message: "cart created" });
    }
  } else {
    res
      .status(400)
      .json({ success: false, error: "This method is not allowed!" });
  }
};

export default connectDb(handler);
