import { razorpay } from "../config/payment.js";
import Payment from "../models/Payment.js";
import generateReceipt from "../utils/receiptGenerator.js";
import User from "../models/User.js";
import Property from "../models/Property.js";

export const verifyPayment = async (req, res) => {
  const payment = await Payment.findOneAndUpdate(
    { razorpayOrderId: req.body.order_id },
    { status: "paid" },
    { new: true }
  );

  const user = await User.findById(payment.user);
  const property = await Property.findById(payment.property);

  const receiptPath = generateReceipt(payment, user, property);

  res.json({
    message: "Payment successful",
    receipt: receiptPath,
  });
};

export const createOrder = async (req, res) => {
  const order = await razorpay.orders.create({
    amount: req.body.amount * 100,
    currency: "INR",
  });

  const payment = await Payment.create({
    user: req.user.id,
    property: req.body.propertyId,
    amount: req.body.amount,
    razorpayOrderId: order.id,
    status: "created",
  });

  res.json(order);
};

<a href={`http://localhost:5000/${receiptPath}`} target="_blank">
  Download Receipt
</a>
