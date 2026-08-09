import { AppError } from '../utils/AppError.js';
import { Therapy } from '../models/Therapy.js';

export const getTherapies = async (_req, res) => {
  const data = await Therapy.find({ isActive: true }).sort({ sortOrder: 1, name: 1 });
  res.json({ success: true, count: data.length, data });
};

export const getTherapyById = async (req, res) => {
  const therapy = await Therapy.findById(req.params.id);
  if (!therapy) throw new AppError('Therapy not found', 404);
  res.json({ success: true, data: therapy });
};

export const createTherapy = async (req, res) => {
  const therapy = await Therapy.create(req.body);
  res.status(201).json({ success: true, data: therapy });
};

export const updateTherapy = async (req, res) => {
  const therapy = await Therapy.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!therapy) throw new AppError('Therapy not found', 404);
  res.json({ success: true, data: therapy });
};

export const deleteTherapy = async (req, res) => {
  const therapy = await Therapy.findByIdAndDelete(req.params.id);
  if (!therapy) throw new AppError('Therapy not found', 404);
  res.json({ success: true, message: 'Therapy removed' });
};
