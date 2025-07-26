import { Document } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  description: string;
  image: string;
  publishedDate: Date;
}