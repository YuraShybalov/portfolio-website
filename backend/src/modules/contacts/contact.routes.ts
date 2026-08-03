import { Router } from 'express';

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

router.post('/', validate(createContactSchema), asyncHandler(contactController.createContact));

router.patch(
  '/:id',
  validate(contactIdSchema, 'params'),
  validate(updateContactSchema),
  asyncHandler(contactController.updateContact),
);

router.delete(
  '/:id',
  validate(contactIdSchema, 'params'),
  asyncHandler(contactController.deleteContact),
);

export default router;
