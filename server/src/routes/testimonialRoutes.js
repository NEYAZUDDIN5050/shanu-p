import { Router } from 'express';
import {
  createTestimonial,
  deleteTestimonial,
  getTestimonialById,
  getTestimonials,
  updateTestimonial,
} from '../controllers/testimonialController.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { validate } from '../middleware/validate.js';
import { testimonialCreateRules } from '../middleware/validators.js';

const router = Router();

router.get('/', asyncHandler(getTestimonials));
router.get('/:id', asyncHandler(getTestimonialById));
router.post('/', validate(testimonialCreateRules), asyncHandler(createTestimonial));
router.put('/:id', asyncHandler(updateTestimonial));
router.delete('/:id', asyncHandler(deleteTestimonial));

export default router;
