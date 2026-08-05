import { Router } from 'express';

import { authenticate } from '../../middleware/auth.middleware';
import { validate } from '../../middleware/validate';
import { asyncHandler } from '../../utils/asyncHandler';

import { socialController } from './social.controller';
import { createSocialSchema, updateSocialSchema, socialIdSchema } from './social.validator';

const router = Router();

router.get('/', asyncHandler(socialController.getAllSocials));

router.get(
  '/:id',
  validate(socialIdSchema, 'params'),
  asyncHandler(socialController.getSocialById),
);

router.post(
  '/',
  authenticate,
  validate(createSocialSchema),
  asyncHandler(socialController.createSocial),
);

router.patch(
  '/:id',
  authenticate,
  validate(socialIdSchema, 'params'),
  validate(updateSocialSchema),
  asyncHandler(socialController.updateSocial),
);

router.delete(
  '/:id',
  authenticate,
  validate(socialIdSchema, 'params'),
  asyncHandler(socialController.deleteSocial),
);

export default router;
