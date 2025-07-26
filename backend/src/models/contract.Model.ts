import { Schema, model } from "mongoose";
import { IContract } from "../interfaces/contract.interfaces";

const contractSchema = new Schema<IContract>(
  {
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    linkedin: { type: String, required: true },
    github: { type: String, required: true },
    youtube: { type: String, required: true },
  },
  {
    timestamps: true, // Automatically handles createdAt & updatedAt
  }
);

export const Contract = model<IContract>("Contract", contractSchema);