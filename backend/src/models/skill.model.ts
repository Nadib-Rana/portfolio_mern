import mongoose, { Schema } from 'mongoose';
import { ISkill } from '../interfaces/skill.interface';

const SkillSchema: Schema = new Schema({
  category: { type: String, required: true },
  items: [
    {
      name: { type: String, required: true },
      level: { type: Number }
    }
  ]
});

export default mongoose.model<ISkill>('Skill', SkillSchema);