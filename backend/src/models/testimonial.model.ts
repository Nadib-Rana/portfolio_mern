import mongoose, { Schema } from 'mongoose';
import { ITestimonial } from '../interfaces/testimonial.interface';

const testimonialSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    message: { type: String, required: true },
    avatar: { type: String }, 
    designation: { type: String } 
  },
  {
    timestamps: true // Adds createdAt and updatedAt automatically
  }
);

export default mongoose.model<ITestimonial>('Testimonial', testimonialSchema);