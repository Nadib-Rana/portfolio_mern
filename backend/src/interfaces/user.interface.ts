import { Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  fullName?: string;
  password: string;
  avatar?: string;                           
  bio?: string;                                
  phone?: string;
  address?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
