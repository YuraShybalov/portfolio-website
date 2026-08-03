import { Request, Response } from 'express';

import { educationService } from './education.service';
import { successResponse, createdResponse } from '../../utils/apiResponse';

export const educationController = {
  async getAllEducation(req: Request, res: Response) {
    const education = await educationService.getAllEducation();

    return successResponse(res, education);
  },

  async getEducationById(req: Request, res: Response) {
    const id = Number(req.params.id);

    const education = await educationService.getEducationById(id);

    return successResponse(res, education);
  },

  async createEducation(req: Request, res: Response) {
    const education = await educationService.createEducation(req.body);

    return createdResponse(res, education);
  },

  async updateEducation(req: Request, res: Response) {
    const id = Number(req.params.id);

    const education = await educationService.updateEducation(id, req.body);

    return successResponse(res, education);
  },

  async deleteEducation(req: Request, res: Response) {
    const id = Number(req.params.id);

    const result = await educationService.deleteEducation(id);

    return successResponse(res, result);
  },
};
