import express from "express";
import auth from "../middleware/authMiddleware.js";
import role from "../middleware/roleMiddleware.js";
import { getAnalytics } from "../controllers/adminController.js";

const router = express.Router();

router.get("/analytics", auth, role("admin"), getAnalytics);

export default router;
