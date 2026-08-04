import 'dotenv/config';

import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),

  JWT_SECRET: z.string().min(32),

  ADMIN_LOGIN: z.string().min(3),

  ADMIN_EMAIL: z.email(),

  ADMIN_PASSWORD: z.string().min(8),

  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

export const env = envSchema.parse(process.env);
