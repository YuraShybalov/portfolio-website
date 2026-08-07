import { prisma } from '../../database/prisma/prisma';
import { storageService } from '../../services/storage';
import { ApiError } from '../../utils/ApiError';

import { UpdateProfileDto } from './profile.validator';

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

  async updateProfile(data: UpdateProfileDto, file?: Express.Multer.File) {
    const profile = await prisma.profile.findUnique({
      where: {
        id: PROFILE_ID,
      },
    });

    if (!profile) {
      throw new ApiError(404, 'Profile not found');
    }

    let avatar = profile.avatar;

    if (file) {
      if (profile.avatar) {
        await storageService.delete(profile.avatar);
      }

      const uploaded = await storageService.upload(file, 'profile');

      avatar = uploaded.publicId;
    }

    return prisma.profile.update({
      where: {
        id: PROFILE_ID,
      },
      data: {
        ...data,
        avatar,
      },
      include: profileInclude,
    });
  },
};
