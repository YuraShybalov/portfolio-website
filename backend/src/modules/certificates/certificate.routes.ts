import { Router } from 'express';

import { authenticate } from '../../middleware/auth.middleware';
import { asyncHandler } from '../../utils/asyncHandler';
import { validate } from '../../middleware/validate';

import { certificateController } from './certificate.controller';
import {
  createCertificateSchema,
  updateCertificateSchema,
  certificateIdSchema,
} from './certificate.validator';

const router = Router();

router.get('/', asyncHandler(certificateController.getAllCertificates));

router.get(
  '/:id',
  validate(certificateIdSchema, 'params'),
  asyncHandler(certificateController.getCertificateById),
);

router.post(
  '/',
  authenticate,
  validate(createCertificateSchema),
  asyncHandler(certificateController.createCertificate),
);

router.patch(
  '/:id',
  authenticate,
  validate(certificateIdSchema, 'params'),
  validate(updateCertificateSchema),
  asyncHandler(certificateController.updateCertificate),
);

router.delete(
  '/:id',
  authenticate,
  validate(certificateIdSchema, 'params'),
  asyncHandler(certificateController.deleteCertificate),
);

export default router;
