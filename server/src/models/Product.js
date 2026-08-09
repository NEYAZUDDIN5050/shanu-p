import mongoose from 'mongoose';

/** v2 cart placeholder — fields optional/nullable for future commerce */
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, unique: true, sparse: true, lowercase: true, trim: true },
    description: { type: String, trim: true, default: '' },
    price: { type: Number, min: 0, default: null },
    currency: { type: String, default: 'INR' },
    imageUrl: { type: String, trim: true, default: null },
    imagePublicId: { type: String, trim: true, default: null },
    sku: { type: String, trim: true, default: null },
    stock: { type: Number, min: 0, default: null },
    isActive: { type: Boolean, default: false },
    metadata: { type: mongoose.Schema.Types.Mixed, default: null },
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);
