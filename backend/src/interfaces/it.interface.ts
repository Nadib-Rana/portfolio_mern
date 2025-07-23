import { Document } from 'mongoose';

export interface IIT extends Document {
  title: string;
  description: string;
  tags?: string[];
  createdAt?: Date;
}