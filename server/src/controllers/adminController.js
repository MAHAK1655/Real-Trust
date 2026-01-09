import User from "../models/User.js";
import Property from "../models/Property.js";
import Payment from "../models/Payment.js";

export const getAnalytics = async (req, res) => {
  const users = await User.countDocuments();
  const properties = await Property.countDocuments();
  const revenue = await Payment.aggregate([
    { $match: { status: "paid" } },
    { $group: { _id: null, total: { $sum: "$amount" } } },
  ]);

  res.json({
    users,
    properties,
    revenue: revenue[0]?.total || 0,
  });
};
