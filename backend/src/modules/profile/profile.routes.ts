import { Router } from 'express';
import { profileController } from './profile.controller';
import { validate } from '../../middleware/validate';
import { updateProfileSchema } from '../../validators/profile.validator';
import { asyncHandler } from '../../utils/asyncHandler';

const router = Router();

router.get('/', asyncHandler(profileController.getProfile));

router.put('/', validate(updateProfileSchema), asyncHandler(profileController.updateProfile));

export default router;
