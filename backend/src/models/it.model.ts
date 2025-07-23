import mongoose, { Schema } from 'mongoose';
import { IIT } from '../interfaces/it.interface';

const ITSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IIT>('IT', ITSchema);