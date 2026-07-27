import { z } from 'zod';

export const createProjectSchema = z.object({
  title: z.string().min(1).max(100),
  slug: z.string().min(1).max(100),

  thumbnail: z.url().optional(),

  shortDescription: z.string().min(1).max(255),
  description: z.string().min(1).optional(),

  type: z.enum(['WEB', 'MOBILE', 'DESKTOP', 'BACKEND', 'API', 'FULLSTACK', 'OTHER']),

  githubUrl: z.url().optional(),
  liveUrl: z.url().optional(),

  featured: z.boolean().optional(),
  order: z.number().int().optional(),
});

export const updateProjectSchema = createProjectSchema.partial();

export const projectIdSchema = z.object({
  id: z.coerce.number().int().positive(),
});

export type CreateProjectDto = z.infer<typeof createProjectSchema>;
export type UpdateProjectDto = z.infer<typeof updateProjectSchema>;
export type ProjectIdDto = z.infer<typeof projectIdSchema>;
