import mongoose, { Schema } from 'mongoose';
import { IAbout } from '../interfaces/about';

const AboutSchema: Schema = new Schema({

  description : String
 
});

export default mongoose.model<IAbout>('About', AboutSchema);