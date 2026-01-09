import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    // server/src/models/Property.js
    title: String,
    description: String,
    lat: Number,
    lng: Number,
    type: {
      type: String,
      enum: ["plot", "house", "flat", "commercial"],
    },
    price: Number,
    location: String,

    seller: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    approved: { type: Boolean, default: false },
    slug: String,
  },
  { timestamps: true }
);

propertySchema.pre("save", function () {
  this.slug = `${this.title
    .toLowerCase()
    .replace(/ /g, "-")}-${this._id}`;
});

export default mongoose.model("Property", propertySchema);
