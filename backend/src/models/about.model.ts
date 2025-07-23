import mongoose, { Schema } from 'mongoose';
import { IAbout } from '../interfaces/about.interface';

const AboutSchema: Schema = new Schema({
  section: { type: String, required: true },
  content: [
    {
      detail: { type: String, required: true },
      year: { type: Number }
    }
  ]
});

export default mongoose.model<IAbout>('About', AboutSchema);