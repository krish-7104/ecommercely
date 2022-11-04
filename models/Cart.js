const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
    products: { type: Object, required: true },
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("Cart", CartSchema);
