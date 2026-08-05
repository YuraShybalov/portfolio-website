import { Router } from 'express';
import { validate } from '../../middleware/validate';
// import { authenticate } from '../../middleware/auth.middleware';
import { asyncHandler } from '../../utils/asyncHandler';

import { authController } from './auth.controller';
import { loginSchema } from './auth.validator';

const router = Router();

router.post('/login', validate(loginSchema), asyncHandler(authController.login));

export default router;
