import mongoose from 'mongoose';

const projectSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: [{ type: String }],
    githubLink: { type: String },
    demoLink: { type: String },
    image: { type: String },
    category: { type: String },
  },
  { timestamps: true }
);

const Project = mongoose.model('Project', projectSchema);
export default Project;
