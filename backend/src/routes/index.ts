import { Router } from 'express';
import profileRoutes from '../modules/profile/profile.routes';

const router = Router();

router.use('/profile', profileRoutes);

export default router;
