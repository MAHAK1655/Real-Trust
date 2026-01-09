import Property from "../models/Property.js";

export const createProperty = async (req, res) => {
  const property = await Property.create({
    ...req.body,
    seller: req.user.id,
  });
  res.status(201).json(property);
};

export const getProperties = async (req, res) => {
  const properties = await Property.find({ approved: true });
  res.json(properties);
};

export const approveProperty = async (req, res) => {
  const property = await Property.findById(req.params.id);
  property.approved = true;
  await property.save();
  res.json({ message: "Property approved" });
};

export const searchProperties = async (req, res) => {
  const { location, type, minPrice, maxPrice } = req.query;

  let query = { approved: true };

  if (location) {
    query.location = { $regex: location, $options: "i" };
  }

  if (type) {
    query.type = type;
  }

  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) query.price.$gte = minPrice;
    if (maxPrice) query.price.$lte = maxPrice;
  }

  const properties = await Property.find(query);
  res.json(properties);
};
