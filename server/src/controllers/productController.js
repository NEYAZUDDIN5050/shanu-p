import { AppError } from '../utils/AppError.js';
import { Product } from '../models/Product.js';

/** Stub CRUD for v2 cart — products inactive by default */
export const getProducts = async (_req, res) => {
  const data = await Product.find().sort({ createdAt: -1 });
  res.json({ success: true, count: data.length, data });
};

export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) throw new AppError('Product not found', 404);
  res.json({ success: true, data: product });
};

export const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({ success: true, data: product });
};

export const updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!product) throw new AppError('Product not found', 404);
  res.json({ success: true, data: product });
};

export const deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) throw new AppError('Product not found', 404);
  res.json({ success: true, message: 'Product removed' });
};
