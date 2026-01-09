import express from "express";
import auth from "../middleware/authMiddleware.js";
import role from "../middleware/roleMiddleware.js";
import {
  createProperty,
  getProperties,
  approveProperty,
} from "../controllers/propertyController.js";

const router = express.Router();

router.get("/", getProperties);
router.post("/", auth, role("seller"), createProperty);
router.put("/approve/:id", auth, role("admin"), approveProperty);
router.get("/search", searchProperties);
router.get("/:slug", async (req, res) => {
  const property = await Property.findOne({ slug: req.params.slug });
  res.json(property);
});

export default router;
