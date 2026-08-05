import { Router } from 'express';

import { authenticate } from '../../middleware/auth.middleware';
import { asyncHandler } from '../../utils/asyncHandler';
import { validate } from '../../middleware/validate';

import { contactController } from './contact.controller';

import { createContactSchema, updateContactSchema, contactIdSchema } from './contact.validator';

const router = Router();

router.get('/', asyncHandler(contactController.getAllContacts));

router.get(
  '/:id',
  validate(contactIdSchema, 'params'),
  asyncHandler(contactController.getContactById),
);

router.post(
  '/',
  authenticate,
  validate(createContactSchema),
  asyncHandler(contactController.createContact),
);

router.patch(
  '/:id',
  authenticate,
  validate(contactIdSchema, 'params'),
  validate(updateContactSchema),
  asyncHandler(contactController.updateContact),
);

router.delete(
  '/:id',
  authenticate,
  validate(contactIdSchema, 'params'),
  asyncHandler(contactController.deleteContact),
);

export default router;
