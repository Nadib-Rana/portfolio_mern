import { Document } from 'mongoose';

export interface ISkill extends Document {
  category: string;
  items: Array<{
    name: string;
    level?: number;
  }>;
}