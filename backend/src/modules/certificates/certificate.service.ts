import { prisma } from '../../database/prisma/prisma';
import { ApiError } from '../../utils/ApiError';
import { CreateCertificateDto, UpdateCertificateDto } from './certificate.validator';

export const certificateService = {
  async getAllCertificates() {
    return prisma.certificate.findMany({
      orderBy: {
        issuedAt: 'desc',
      },
    });
  },

  async getCertificateById(id: number) {
    const certificate = await prisma.certificate.findUnique({
      where: { id },
    });

    if (!certificate) {
      throw new ApiError(404, 'Certificate not found');
    }

    return certificate;
  },

  async createCertificate(data: CreateCertificateDto) {
    return prisma.certificate.create({
      data,
    });
  },

  async updateCertificate(id: number, data: UpdateCertificateDto) {
    await this.getCertificateById(id);

    return prisma.certificate.update({
      where: { id },
      data,
    });
  },

  async deleteCertificate(id: number) {
    await this.getCertificateById(id);

    return prisma.certificate.delete({
      where: { id },
    });
  },
};
