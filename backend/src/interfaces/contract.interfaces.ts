import { Document } from "mongoose";

export interface IContract extends Document {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  youtube:string;                          
  createdAt?: Date;
  updatedAt?: Date;
}