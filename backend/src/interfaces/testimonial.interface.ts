import { Document } from 'mongoose';

export interface ITestimonial extends Document {
  name: string;
  message: string;
  avatar?: string;
  designation?: string;
  createdAt?: Date;
}