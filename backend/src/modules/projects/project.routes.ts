import { Router } from 'express';

import { authenticate } from '../../middleware/auth.middleware';
import { asyncHandler } from '../../utils/asyncHandler';
import { validate } from '../../middleware/validate';

import { projectController } from './project.controller';
import { createProjectSchema, updateProjectSchema, projectIdSchema } from './project.validator';

const router = Router();

router.get('/', asyncHandler(projectController.getAllProjects));

router.get(
  '/:id',
  validate(projectIdSchema, 'params'),
  asyncHandler(projectController.getProjectById),
);

router.post(
  '/',
  authenticate,
  validate(createProjectSchema),
  asyncHandler(projectController.createProject),
);

router.patch(
  '/:id',
  authenticate,
  validate(projectIdSchema, 'params'),
  validate(updateProjectSchema),
  asyncHandler(projectController.updateProject),
);

router.delete(
  '/:id',
  authenticate,
  validate(projectIdSchema, 'params'),
  asyncHandler(projectController.deleteProject),
);

export default router;
