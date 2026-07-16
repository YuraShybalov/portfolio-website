import { Request, Response } from 'express';
import { profileService } from './profile.service';

export const profileController = {
  async getProfile(req: Request, res: Response) {
    const profile = await profileService.getProfile();

    res.status(200).json({
      success: true,
      data: profile,
    });
  },
  async updateProfile(req: Request, res: Response) {
    const updatedProfile = await profileService.updateProfile(req.body);

    res.status(200).json({
      success: true,
      data: updatedProfile,
    });
  },
};
