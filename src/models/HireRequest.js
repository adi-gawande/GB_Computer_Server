import mongoose from 'mongoose';

const hireRequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: [true, 'Phone is required']
  },
  company: String,
  projectType: {
    type: String,
    required: [true, 'Project type is required'],
    enum: ['web', 'app', 'software', 'ai', 'security', 'consulting', 'other']
  },
  budget: {
    type: String,
    enum: ['<$5k', '$5k-$10k', '$10k-$25k', '$25k-$50k', '$50k+']
  },
  timeline: {
    type: String,
    enum: ['urgent', '1-3 months', '3-6 months', '6+ months']
  },
  description: {
    type: String,
    required: [true, 'Project description is required']
  },
  status: {
    type: String,
    enum: ['pending', 'reviewing', 'contacted', 'accepted', 'rejected'],
    default: 'pending'
  }
}, {
  timestamps: true
});

export default mongoose.model('HireRequest', hireRequestSchema);
