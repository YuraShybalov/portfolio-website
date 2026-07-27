import { Router } from 'express';

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
  validate(createTechnologySchema),
  asyncHandler(technologyController.createTechnology),
);

router.patch(
  '/:id',
  validate(technologyIdSchema, 'params'),
  validate(updateTechnologySchema),
  asyncHandler(technologyController.updateTechnology),
);

router.delete(
  '/:id',
  validate(technologyIdSchema, 'params'),
  asyncHandler(technologyController.deleteTechnology),
);

export default router;
