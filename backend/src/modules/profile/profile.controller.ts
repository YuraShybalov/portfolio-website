import { Request, Response } from 'express';
import { profileService } from './profile.service';


export const profileController = {
  async getProfile(req: Request, res: Response) {
    const profile = await profileService.getProfile();

    res.json(profile);
  },
  async updateProfile(req: Request, res: Response) {
  const profile = await profileService.updateProfile(req.body);

  res.json(profile);
}
};
