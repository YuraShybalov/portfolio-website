import { Router } from 'express';

import { authenticate } from '../../middleware/auth.middleware';
import { asyncHandler } from '../../utils/asyncHandler';
import { validate } from '../../middleware/validate';

import { technologyController } from './technology.controller';
import {
  createTechnologySchema,
  updateTechnologySchema,
  technologyIdSchema,
} from './technology.validator';

const router = Router();

router.get('/', asyncHandler(technologyController.getAllTechnologies));

router.get(
  '/:id',
  validate(technologyIdSchema, 'params'),
  asyncHandler(technologyController.getTechnologyById),
);

router.post(
  '/',
  authenticate,
  validate(createTechnologySchema),
  asyncHandler(technologyController.createTechnology),
);

router.patch(
  '/:id',
  authenticate,
  validate(technologyIdSchema, 'params'),
  validate(updateTechnologySchema),
  asyncHandler(technologyController.updateTechnology),
);

router.delete(
  '/:id',
  authenticate,
  validate(technologyIdSchema, 'params'),
  asyncHandler(technologyController.deleteTechnology),
);

export default router;
