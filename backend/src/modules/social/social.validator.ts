import { z } from 'zod';

export const createSocialSchema = z.object({
  name: z.string().min(1).max(50),
  icon: z.string().optional(),
  url: z.url(),
  order: z.number().int().min(0).optional(),
  profileId: z.number().int().positive(),
});

export const updateSocialSchema = createSocialSchema.partial();

export const socialIdSchema = z.object({
  id: z.coerce.number().int().positive(),
});

export type CreateSocialDto = z.infer<typeof createSocialSchema>;
export type UpdateSocialDto = z.infer<typeof updateSocialSchema>;
