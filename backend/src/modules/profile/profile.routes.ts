import { Router } from 'express';
import { profileController } from './profile.controller';

const router = Router();

router.get('/', profileController.getProfile);
router.put('/', profileController.updateProfile);

export default router;
