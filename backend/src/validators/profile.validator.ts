import { z } from 'zod';

export const updateProfileSchema = z.object({
  firstName: z.string().min(2).optional(),
  lastName: z.string().min(2).optional(),
  position: z.string().min(2).optional(),
  shortAbout: z.string().min(10).optional(),
  fullAbout: z.string().min(10).optional(),
  phone: z.string().optional(),
  email: z.email().optional(),
  location: z.string().optional(),
  avatar: z.string().optional(),
});
