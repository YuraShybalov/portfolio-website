import { Router } from 'express';

import { authenticate } from '../../middleware/auth.middleware';
import { profileController } from './profile.controller';
import { validate } from '../../middleware/validate';
import { updateProfileSchema } from './profile.validator';
import { asyncHandler } from '../../utils/asyncHandler';

const router = Router();

router.get('/', asyncHandler(profileController.getProfile));

router.put(
  '/',
  authenticate,
  validate(updateProfileSchema),
  asyncHandler(profileController.updateProfile),
);

export default router;
