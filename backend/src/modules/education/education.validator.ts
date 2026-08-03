import { z } from 'zod';

export const createEducationSchema = z.object({
  startDate: z.string().datetime(),

  endDate: z.string().datetime().optional(),

  currentEducation: z.boolean().optional(),

  title: z.string().min(1).max(150),

  location: z.string().max(150).optional(),

  website: z.string().url().optional(),

  image: z.string().optional(),

  diplomaFile: z.string().optional(),

  type: z.enum(['DIPLOMA', 'CERTIFICATE', 'COURSE']),
});

export const updateEducationSchema = createEducationSchema.partial();

export const educationIdSchema = z.object({
  id: z.coerce.number().int().positive(),
});

export type CreateEducationDto = z.infer<typeof createEducationSchema>;

export type UpdateEducationDto = z.infer<typeof updateEducationSchema>;

export type EducationIdDto = z.infer<typeof educationIdSchema>;
