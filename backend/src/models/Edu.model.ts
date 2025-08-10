import { Schema, model } from "mongoose";
import { IEdu } from "../interfaces/edu.iterface";

const eduSchema = new Schema<IEdu>(
  {
   
    degree: { type: String, required: true },
    institution: { type: String, required: true },
    year: { type: Number, required: true },
    grade: { type: String },
  },
  { timestamps: true }
);

const EduModel = model<IEdu>("Edu", eduSchema);

export default EduModel;