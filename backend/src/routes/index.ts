import { Router } from 'express';
import profileRoutes from '../modules/profile/profile.routes';
import projectRoutes from '../modules/projects/project.routes';
import technologyRoutes from '../modules/technologies/technology.routes';
import socialRoutes from '../modules/social/social.routes';

const router = Router();

router.use('/profile', profileRoutes);
router.use('/projects', projectRoutes);
router.use('/technologies', technologyRoutes);
router.use('/social', socialRoutes);

export default router;
