import { Document } from 'mongoose';

export interface IAbout extends Document {
  section: string;
  content: Array<{
    detail: string;
    year?: number;
  }>;
}