import mongoose, { Schema } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

const UserSchema: Schema = new Schema(
  {
    password: { type: String, required: true }
  },
  { timestamps: true }
);
export default mongoose.model<IUser>('User', UserSchema);