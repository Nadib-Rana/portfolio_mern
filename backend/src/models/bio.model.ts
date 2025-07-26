import { Schema, model } from "mongoose";
import { IBio } from "../interfaces/bio.interface"; // Adjust path as needed

const bioSchema = new Schema<IBio>(
  {
    name: { type: String, required: true },
    address: { type: String },
    company: { type: String },
    position: { type: String },
    joinedAt: { type: Date, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true } // createdAt & updatedAt handled automatically
);

const BioModel = model<IBio>("Bio", bioSchema);

export default BioModel;