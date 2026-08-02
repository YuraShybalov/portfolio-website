import { z } from 'zod';

export const createCareerSchema = z.object({
  startDate: z.coerce.date(),
  endDate: z.coerce.date().optional(),

  currentJob: z.boolean().optional(),

  position: z.string().min(1).max(255),
  company: z.string().min(1).max(255),
  shortDescription: z.string().min(1),

  items: z
    .array(
      z.object({
        text: z.string().min(1),
      }),
    )
    .optional(),
});

export const updateCareerSchema = createCareerSchema.partial();

export const careerIdSchema = z.object({
  id: z.coerce.number().int().positive(),
});

export type CreateCareerDto = z.infer<typeof createCareerSchema>;

export type UpdateCareerDto = z.infer<typeof updateCareerSchema>;
