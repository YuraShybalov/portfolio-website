import { Router } from 'express';
import profileRoutes from '../modules/profile/profile.routes';
import projectRoutes from '../modules/projects/project.routes';

const router = Router();

router.use('/profile', profileRoutes);
router.use('/projects', projectRoutes);

export default router;
