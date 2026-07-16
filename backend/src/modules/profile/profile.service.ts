import { prisma } from '../../database/prisma/prisma';
import { UpdateProfileDto } from '../../validators/profile.validator';
import { ApiError } from '../../utils/ApiError';

export const profileService = {
  async getProfile() {
    const profile = await prisma.profile.findFirst({
      include: {
        socials: true,
      },
    });

    if (!profile) {
      throw new ApiError(404, 'Profile not found');
    }

    return profile;
  },
  async updateProfile(data: UpdateProfileDto) {
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
