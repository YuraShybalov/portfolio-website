import { prisma } from '../../database/prisma/prisma';
import { ApiError } from '../../utils/ApiError';
import { CreateSocialDto, UpdateSocialDto } from './social.validator';

export const socialService = {
  async getAllSocials() {
    return prisma.socialLink.findMany({
      orderBy: {
        order: 'asc',
      },
    });
  },

  async getSocialById(id: number) {
    const social = await prisma.socialLink.findUnique({
      where: { id },
    });

    if (!social) {
      throw new ApiError(404, 'Social link not found');
    }

    return social;
  },

  async createSocial(data: CreateSocialDto) {
    return prisma.socialLink.create({
      data,
    });
  },

  async updateSocial(id: number, data: UpdateSocialDto) {
    await this.getSocialById(id);

    return prisma.socialLink.update({
      where: { id },
      data,
    });
  },

  async deleteSocial(id: number) {
    await this.getSocialById(id);

    return prisma.socialLink.delete({
      where: { id },
    });
  },
};
