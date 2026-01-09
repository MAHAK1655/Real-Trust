import express from "express";
import auth from "../middleware/authMiddleware.js";
import role from "../middleware/roleMiddleware.js";
import {
  createBooking,
  updateBookingStatus,
} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", auth, role("customer"), createBooking);
router.put("/:id", auth, role("seller"), updateBookingStatus);

export default router;
