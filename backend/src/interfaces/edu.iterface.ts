import { Document } from "mongoose";

export interface IEdu extends Document {

  degree: string; 
  institution: string; 
  year: number; 
  grade?: string; 
}