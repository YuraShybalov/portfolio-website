import { Router } from 'express';

import { asyncHandler } from '../../utils/asyncHandler';
import { validate } from '../../middleware/validate';

import { projectController } from './project.controller';
import { createProjectSchema, updateProjectSchema } from './project.validator';

const router = Router();

router.get('/', asyncHandler(projectController.getAllProjects));

router.get('/:id', asyncHandler(projectController.getProjectById));

router.post('/', validate(createProjectSchema), asyncHandler(projectController.createProject));

router.patch('/:id', validate(updateProjectSchema), asyncHandler(projectController.updateProject));

router.delete('/:id', asyncHandler(projectController.deleteProject));

export default router;
