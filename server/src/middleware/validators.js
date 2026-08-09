import { body } from 'express-validator';

export const appointmentCreateRules = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  body('email').trim().isEmail().withMessage('Valid email is required'),
  body('preferredDate').isISO8601().withMessage('Valid preferred date is required'),
  body('preferredTime').trim().notEmpty().withMessage('Preferred time is required'),
  body('therapyType').trim().notEmpty().withMessage('Therapy type is required'),
  body('message').optional({ values: 'falsy' }).trim(),
  body('status')
    .optional()
    .isIn(['pending', 'confirmed', 'cancelled'])
    .withMessage('Invalid status'),
];

export const therapyCreateRules = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('slug')
    .trim()
    .notEmpty()
    .withMessage('Slug is required')
    .matches(/^[a-z0-9-]+$/)
    .withMessage('Slug must be lowercase letters, numbers, and hyphens'),
  body('shortDescription').trim().notEmpty().withMessage('Short description is required'),
  body('description').trim().notEmpty().withMessage('Description is required'),
];

export const certificationCreateRules = [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('imageUrl').trim().isURL().withMessage('Valid image URL is required'),
];

export const testimonialCreateRules = [
  body('patientName').trim().notEmpty().withMessage('Patient name is required'),
  body('quote').trim().notEmpty().withMessage('Quote is required'),
  body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be 1–5'),
];

export const productCreateRules = [
  body('name').trim().notEmpty().withMessage('Product name is required'),
];
