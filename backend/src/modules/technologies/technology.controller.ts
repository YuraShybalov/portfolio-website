import { Request, Response } from 'express';
import { technologyService } from './technology.service';
import { successResponse, createdResponse } from '../../utils/apiResponse';

export const technologyController = {
  async getAllTechnologies(_req: Request, res: Response) {
    const technologies = await technologyService.getAllTechnologies();

    return successResponse(res, technologies);
  },

  async getTechnologyById(req: Request, res: Response) {
    const id = Number(req.params.id);

    const technology = await technologyService.getTechnologyById(id);

    return successResponse(res, technology);
  },

  async createTechnology(req: Request, res: Response) {
    const technology = await technologyService.createTechnology(req.body);

    return createdResponse(res, technology);
  },

  async updateTechnology(req: Request, res: Response) {
    const id = Number(req.params.id);

    const technology = await technologyService.updateTechnology(id, req.body);

    return successResponse(res, technology);
  },

  async deleteTechnology(req: Request, res: Response) {
    const id = Number(req.params.id);

    const technology = await technologyService.deleteTechnology(id);

    return successResponse(res, technology);
  },
};
