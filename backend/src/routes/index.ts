import { Router } from 'express';
import profileRoutes from '../modules/profile/profile.routes';
import projectRoutes from '../modules/projects/project.routes';
import technologyRoutes from '../modules/technologies/technology.routes';

const router = Router();

router.use('/profile', profileRoutes);
router.use('/projects', projectRoutes);
router.use('/technologies', technologyRoutes);

export default router;
