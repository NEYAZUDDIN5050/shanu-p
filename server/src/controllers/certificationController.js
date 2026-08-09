import { AppError } from '../utils/AppError.js';
import { Certification } from '../models/Certification.js';

export const getCertifications = async (_req, res) => {
  const data = await Certification.find({ isPublished: true }).sort({
    sortOrder: 1,
    createdAt: -1,
  });
  res.json({ success: true, count: data.length, data });
};

export const getCertificationById = async (req, res) => {
  const item = await Certification.findById(req.params.id);
  if (!item) throw new AppError('Certification not found', 404);
  res.json({ success: true, data: item });
};

export const createCertification = async (req, res) => {
  const item = await Certification.create(req.body);
  res.status(201).json({ success: true, data: item });
};

export const updateCertification = async (req, res) => {
  const item = await Certification.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!item) throw new AppError('Certification not found', 404);
  res.json({ success: true, data: item });
};

export const deleteCertification = async (req, res) => {
  const item = await Certification.findByIdAndDelete(req.params.id);
  if (!item) throw new AppError('Certification not found', 404);
  res.json({ success: true, message: 'Certification removed' });
};
