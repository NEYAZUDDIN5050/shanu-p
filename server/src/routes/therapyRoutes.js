import { Router } from 'express';
import {
  createTherapy,
  deleteTherapy,
  getTherapies,
  getTherapyById,
  updateTherapy,
} from '../controllers/therapyController.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { validate } from '../middleware/validate.js';
import { therapyCreateRules } from '../middleware/validators.js';

const router = Router();

router.get('/', asyncHandler(getTherapies));
router.get('/:id', asyncHandler(getTherapyById));
router.post('/', validate(therapyCreateRules), asyncHandler(createTherapy));
router.put('/:id', asyncHandler(updateTherapy));
router.delete('/:id', asyncHandler(deleteTherapy));

export default router;
