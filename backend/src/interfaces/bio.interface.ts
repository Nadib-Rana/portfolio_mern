import { Document } from "mongoose";

export interface IBio extends Document{
   name: string;                     
  address?: string;                
  company?: string;                
  position?: string;   
  joinedAt: Date;
  isActive: boolean;                          
  createdAt?: Date;
  updatedAt?: Date;
}