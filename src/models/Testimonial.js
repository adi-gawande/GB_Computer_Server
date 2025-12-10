import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  position: {
    type: String,
    required: [true, 'Position is required']
  },
  company: {
    type: String,
    required: [true, 'Company is required']
  },
  image: {
    type: String,
    default: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300'
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
    default: 5
  },
  message: {
    type: String,
    required: [true, 'Testimonial message is required']
  },
  featured: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Testimonial', testimonialSchema);
