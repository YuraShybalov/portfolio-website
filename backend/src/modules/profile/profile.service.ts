import { prisma } from '../../database/prisma/prisma';

export const profileService = {
  async getProfile() {
    return prisma.profile.findFirst({
      include: {
        socials: true,
      },
    });
  },
  async updateProfile(data: any) {
    return prisma.profile.update({
      where: {
        id: 1,
      },
      data,
      include: {
        socials: true,
      },
    });
  },
};
