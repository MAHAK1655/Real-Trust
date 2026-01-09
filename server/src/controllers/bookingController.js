import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  const booking = await Booking.create({
    ...req.body,
    customer: req.user.id,
  });
  res.status(201).json(booking);
};

export const updateBookingStatus = async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  booking.status = req.body.status;
  await booking.save();
  res.json(booking);
};
