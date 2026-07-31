import { Request, Response } from 'express';
import { socialService } from './social.service';
import { successResponse, createdResponse } from '../../utils/apiResponse';

export const socialController = {
  async getAllSocials(_req: Request, res: Response) {
    const socials = await socialService.getAllSocials();

    return successResponse(res, socials);
  },

  async getSocialById(req: Request, res: Response) {
    const id = Number(req.params.id);

    const social = await socialService.getSocialById(id);

    return successResponse(res, social);
  },

  async createSocial(req: Request, res: Response) {
    const social = await socialService.createSocial(req.body);

    return createdResponse(res, social);
  },

  async updateSocial(req: Request, res: Response) {
    const id = Number(req.params.id);

    const social = await socialService.updateSocial(id, req.body);

    return successResponse(res, social);
  },

  async deleteSocial(req: Request, res: Response) {
    const id = Number(req.params.id);

    const social = await socialService.deleteSocial(id);

    return successResponse(res, social);
  },
};
