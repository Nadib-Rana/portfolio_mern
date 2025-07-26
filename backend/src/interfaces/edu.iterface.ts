import { Document } from "mongoose";

export interface IEdu extends Document {
  name: string; 
  degree: string; 
  institution: string; 
  year: number; 
  grade?: string; 
}