import mongoose from 'mongoose';

const certificationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    issuer: { type: String, trim: true, default: '' },
    imageUrl: { type: String, required: true, trim: true },
    imagePublicId: { type: String, trim: true, default: null },
    sortOrder: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Certification = mongoose.model('Certification', certificationSchema);
