import mongoose, { Schema } from 'mongoose';
import { IProject } from '../interfaces/project.interface';

const ProjectSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
  tools: { type: [String], required: true },

});

export default mongoose.model<IProject>('Project', ProjectSchema);