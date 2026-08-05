import { Router } from 'express';

import { authenticate } from '../../middleware/auth.middleware';
import { asyncHandler } from '../../utils/asyncHandler';
import { validate } from '../../middleware/validate';

import { educationController } from './education.controller';

import {
  createEducationSchema,
  updateEducationSchema,
  educationIdSchema,
} from './education.validator';

const router = Router();

router.get('/', asyncHandler(educationController.getAllEducation));

router.get(
  '/:id',
  validate(educationIdSchema, 'params'),
  asyncHandler(educationController.getEducationById),
);

router.post(
  '/',
  authenticate,
  validate(createEducationSchema),
  asyncHandler(educationController.createEducation),
);

router.patch(
  '/:id',
  authenticate,
  validate(educationIdSchema, 'params'),
  validate(updateEducationSchema),
  asyncHandler(educationController.updateEducation),
);

router.delete(
  '/:id',
  authenticate,
  validate(educationIdSchema, 'params'),
  asyncHandler(educationController.deleteEducation),
);

export default router;
