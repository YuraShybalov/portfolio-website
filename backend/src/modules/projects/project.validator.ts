import { z } from 'zod';

export const createProjectSchema = z.object({
  title: z.string().min(1).max(100),
  slug: z.string().min(1).max(100),
  shortDescription: z.string().min(1).max(255),
  description: z.string().min(1),
  image: z.string().url(),
  githubUrl: z.string().url().optional(),
  liveUrl: z.string().url().optional(),

  type: z.enum(['WEB', 'MOBILE', 'DESKTOP', 'BACKEND', 'API', 'FULLSTACK', 'OTHER']),

  status: z
    .enum(['PLANNING', 'IN_PROGRESS', 'TESTING', 'COMPLETED', 'PAUSED', 'ARCHIVED'])
    .optional(),

  featured: z.boolean().optional(),
});

export const updateProjectSchema = createProjectSchema.partial();
export const projectIdSchema = z.object({
  id: z.coerce.number().int().positive(),
});

export type CreateProjectDto = z.infer<typeof createProjectSchema>;
export type UpdateProjectDto = z.infer<typeof updateProjectSchema>;
export type ProjectIdDto = z.infer<typeof projectIdSchema>;
