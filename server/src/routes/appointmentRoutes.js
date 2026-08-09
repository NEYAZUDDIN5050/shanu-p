import { Router } from 'express';
import {
  createAppointment,
  deleteAppointment,
  getAppointmentById,
  getAppointments,
  updateAppointment,
} from '../controllers/appointmentController.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { validate } from '../middleware/validate.js';
import { appointmentCreateRules } from '../middleware/validators.js';

const router = Router();

router.get('/', asyncHandler(getAppointments));
router.get('/:id', asyncHandler(getAppointmentById));
router.post('/', validate(appointmentCreateRules), asyncHandler(createAppointment));
router.put('/:id', asyncHandler(updateAppointment));
router.delete('/:id', asyncHandler(deleteAppointment));

export default router;
