import { prisma } from '../../database/prisma/prisma';
import { UpdateProfileDto } from './profile.validator';
import { ApiError } from '../../utils/ApiError';

const PROFILE_ID = 1;

const profileInclude = {
  socials: true,
};

export const profileService = {
  async getProfile() {
    const profile = await prisma.profile.findUnique({
      where: {
        id: PROFILE_ID,
      },
      include: profileInclude,
    });

    if (!profile) {
      throw new ApiError(404, 'Profile not found');
    }

    return profile;
  },

  async updateProfile(data: UpdateProfileDto) {
    await this.getProfile();

    return prisma.profile.update({
      where: {
        id: PROFILE_ID,
      },
      data,
      include: profileInclude,
    });
  },
};
