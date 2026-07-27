import { z } from 'zod';

export const createTechnologySchema = z.object({
  name: z.string().min(1).max(100),

  icon: z.string().min(1),

  category: z.enum([
    'LANGUAGE',
    'FRONTEND',
    'BACKEND',
    'DATABASE',
    'ORM',
    'FRAMEWORK',
    'LIBRARY',
    'TOOL',
    'DEVOPS',
    'TESTING',
    'CLOUD',
  ]),

  website: z.url().optional(),

  order: z.number().int().min(0).optional(),
});

export const updateTechnologySchema = createTechnologySchema.partial();

export const technologyIdSchema = z.object({
  id: z.coerce.number().int().positive(),
});

export type CreateTechnologyDto = z.infer<typeof createTechnologySchema>;
export type UpdateTechnologyDto = z.infer<typeof updateTechnologySchema>;
export type TechnologyIdDto = z.infer<typeof technologyIdSchema>;
