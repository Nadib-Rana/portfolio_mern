import mongoose, { Schema } from 'mongoose';
import { IBlog } from '../interfaces/blog.interface';

const blogSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  publishedDate: { type: Date, default: Date.now }
});

export default mongoose.model<IBlog>('Blog', blogSchema);