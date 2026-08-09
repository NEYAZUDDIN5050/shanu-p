import { AppError } from '../utils/AppError.js';
import { Appointment } from '../models/Appointment.js';

export const getAppointments = async (_req, res) => {
  const data = await Appointment.find().sort({ createdAt: -1 });
  res.json({ success: true, count: data.length, data });
};

export const getAppointmentById = async (req, res) => {
  const appointment = await Appointment.findById(req.params.id);
  if (!appointment) throw new AppError('Appointment not found', 404);
  res.json({ success: true, data: appointment });
};

export const createAppointment = async (req, res) => {
  const appointment = await Appointment.create(req.body);
  res.status(201).json({ success: true, data: appointment });
};

export const updateAppointment = async (req, res) => {
  const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!appointment) throw new AppError('Appointment not found', 404);
  res.json({ success: true, data: appointment });
};

export const deleteAppointment = async (req, res) => {
  const appointment = await Appointment.findByIdAndDelete(req.params.id);
  if (!appointment) throw new AppError('Appointment not found', 404);
  res.json({ success: true, message: 'Appointment removed' });
};
