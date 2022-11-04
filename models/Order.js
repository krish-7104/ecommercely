const mongoose = require("mongoose");

const OrderScheme = new mongoose.Schema(
  {
    email: { type: String, required: true },
    orderId: { type: String, required: true },
    products: { type: Object, required: true },
    address: { type: Array, required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: "Pending", required: true },
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("Order", OrderScheme);
