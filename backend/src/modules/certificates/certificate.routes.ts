import { Router } from 'express';

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
  validate(createCertificateSchema),
  asyncHandler(certificateController.createCertificate),
);

router.patch(
  '/:id',
  validate(certificateIdSchema, 'params'),
  validate(updateCertificateSchema),
  asyncHandler(certificateController.updateCertificate),
);

router.delete(
  '/:id',
  validate(certificateIdSchema, 'params'),
  asyncHandler(certificateController.deleteCertificate),
);

export default router;
