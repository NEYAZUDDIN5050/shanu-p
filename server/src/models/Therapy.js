import mongoose from 'mongoose';

const therapySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    shortDescription: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    duration: { type: String, trim: true, default: '45–60 min sessions' },
    iconKey: { type: String, trim: true, default: 'activity' },
    isActive: { type: Boolean, default: true },
    sortOrder: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Therapy = mongoose.model('Therapy', therapySchema);
