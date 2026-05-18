import mongoose from 'mongoose';

const skillSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    level: { type: String },
  },
  { timestamps: true }
);

const Skill = mongoose.model('Skill', skillSchema);
export default Skill;
