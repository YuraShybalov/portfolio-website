import { z } from 'zod';

export const createCertificateSchema = z.object({
  title: z.string().min(1).max(255),
  issuer: z.string().min(1).max(255),

  issuedAt: z.coerce.date(),
  expiresAt: z.coerce.date().optional(),

  credentialUrl: z.url().optional(),
  image: z.string().optional(),

  profileId: z.coerce.number().int().positive().optional(),
});

export const updateCertificateSchema = createCertificateSchema.partial();

export const certificateIdSchema = z.object({
  id: z.coerce.number().int().positive(),
});

export type CreateCertificateDto = z.infer<typeof createCertificateSchema>;

export type UpdateCertificateDto = z.infer<typeof updateCertificateSchema>;

export type CertificateIdDto = z.infer<typeof certificateIdSchema>;
