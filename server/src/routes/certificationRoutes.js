import { Router } from 'express';
import {
  createCertification,
  deleteCertification,
  getCertificationById,
  getCertifications,
  updateCertification,
} from '../controllers/certificationController.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { validate } from '../middleware/validate.js';
import { certificationCreateRules } from '../middleware/validators.js';

const router = Router();

router.get('/', asyncHandler(getCertifications));
router.get('/:id', asyncHandler(getCertificationById));
router.post('/', validate(certificationCreateRules), asyncHandler(createCertification));
router.put('/:id', asyncHandler(updateCertification));
router.delete('/:id', asyncHandler(deleteCertification));

export default router;
