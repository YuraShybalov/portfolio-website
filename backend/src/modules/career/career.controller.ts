import { Request, Response } from 'express';

import { careerService } from './career.service';
import { successResponse, createdResponse } from '../../utils/apiResponse';

export const careerController = {
  async getAllCareers(_req: Request, res: Response) {
    const careers = await careerService.getAllCareers();

    return successResponse(res, careers);
  },

  async getCareerById(req: Request, res: Response) {
    const id = Number(req.params.id);

    const career = await careerService.getCareerById(id);

    return successResponse(res, career);
  },

  async createCareer(req: Request, res: Response) {
    const career = await careerService.createCareer(req.body);

    return createdResponse(res, career);
  },

  async updateCareer(req: Request, res: Response) {
    const id = Number(req.params.id);

    const career = await careerService.updateCareer(id, req.body);

    return successResponse(res, career);
  },

  async deleteCareer(req: Request, res: Response) {
    const id = Number(req.params.id);

    await careerService.deleteCareer(id);

    return successResponse(res, {
      message: 'Career deleted successfully',
    });
  },
};
