import { Schema, model } from "mongoose";
import { IExpertice } from "../interfaces/expertice.interface";

const ExperticeSchema = new Schema<IExpertice>(
  {
    role: {
      type: String,
      required: true,
    },
    institution: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Optional: adds createdAt and updatedAt
  }
);

const ExperticeModel = model<IExpertice>("Expertice", ExperticeSchema);

export default ExperticeModel;