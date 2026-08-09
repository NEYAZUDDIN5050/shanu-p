import { AppError } from '../utils/AppError.js';
import { Testimonial } from '../models/Testimonial.js';

export const getTestimonials = async (_req, res) => {
  const data = await Testimonial.find({ isPublished: true }).sort({
    sortOrder: 1,
    createdAt: -1,
  });
  res.json({ success: true, count: data.length, data });
};

export const getTestimonialById = async (req, res) => {
  const item = await Testimonial.findById(req.params.id);
  if (!item) throw new AppError('Testimonial not found', 404);
  res.json({ success: true, data: item });
};

export const createTestimonial = async (req, res) => {
  const item = await Testimonial.create(req.body);
  res.status(201).json({ success: true, data: item });
};

export const updateTestimonial = async (req, res) => {
  const item = await Testimonial.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!item) throw new AppError('Testimonial not found', 404);
  res.json({ success: true, data: item });
};

export const deleteTestimonial = async (req, res) => {
  const item = await Testimonial.findByIdAndDelete(req.params.id);
  if (!item) throw new AppError('Testimonial not found', 404);
  res.json({ success: true, message: 'Testimonial removed' });
};
