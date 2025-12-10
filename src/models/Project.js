import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Project description is required']
  },
  category: {
    type: String,
    required: true,
    enum: ['web', 'app', 'software', 'ai', 'security', 'consulting']
  },
  client: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800'
  },
  technologies: [String],
  duration: String,
  teamSize: Number,
  status: {
    type: String,
    enum: ['completed', 'in-progress', 'planned'],
    default: 'completed'
  },
  featured: {
    type: Boolean,
    default: false
  },
  link: String,
  completedDate: Date
}, {
  timestamps: true
});

export default mongoose.model('Project', projectSchema);
