import { z } from 'zod';

export const createContactSchema = z.object({
  name: z.string().min(2).max(100),

  email: z.email(),

  subject: z.string().max(255).optional(),

  message: z.string().min(5),

  phone: z.string().max(30).optional(),
});

export const updateContactSchema = createContactSchema.partial();

export const contactIdSchema = z.object({
  id: z.coerce.number().int().positive(),
});

export type CreateContactDto = z.infer<typeof createContactSchema>;

export type UpdateContactDto = z.infer<typeof updateContactSchema>;

export type ContactIdDto = z.infer<typeof contactIdSchema>;
