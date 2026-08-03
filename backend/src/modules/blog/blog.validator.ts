import { z } from 'zod';

export const createBlogSchema = z.object({
  title: z.string().min(1).max(150),

  slug: z.string().min(1).max(150),

  coverImage: z.string().optional(),

  shortDescription: z.string().min(10).max(255),

  content: z.string().min(10),

  published: z.boolean().optional(),
});

export const updateBlogSchema = createBlogSchema.partial();

export const blogIdSchema = z.object({
  id: z.coerce.number().int().positive(),
});

export type CreateBlogDto = z.infer<typeof createBlogSchema>;

export type UpdateBlogDto = z.infer<typeof updateBlogSchema>;

export type BlogIdDto = z.infer<typeof blogIdSchema>;
