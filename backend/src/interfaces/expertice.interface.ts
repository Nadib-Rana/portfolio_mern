import { Document } from "mongoose";

export interface IExpertice extends Document {
  role: string;
  institution: string;
  year: string;
}