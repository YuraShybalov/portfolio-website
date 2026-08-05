import { Router } from 'express';

import { authenticate } from '../../middleware/auth.middleware';
import { asyncHandler } from '../../utils/asyncHandler';
import { validate } from '../../middleware/validate';

import { careerController } from './career.controller';
import { createCareerSchema, updateCareerSchema, careerIdSchema } from './career.validator';

const router = Router();

router.get('/', asyncHandler(careerController.getAllCareers));

router.get(
  '/:id',
  validate(careerIdSchema, 'params'),
  asyncHandler(careerController.getCareerById),
);

router.post(
  '/',

  authenticate,
  validate(createCareerSchema),
  asyncHandler(careerController.createCareer),
);

router.patch(
  '/:id',
  authenticate,
  validate(careerIdSchema, 'params'),
  validate(updateCareerSchema),
  asyncHandler(careerController.updateCareer),
);

router.delete(
  '/:id',
  authenticate,
  validate(careerIdSchema, 'params'),
  asyncHandler(careerController.deleteCareer),
);

export default router;
