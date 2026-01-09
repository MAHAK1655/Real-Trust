import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    property: { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
    amount: Number,
    razorpayOrderId: String,
    status: String,
  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);
