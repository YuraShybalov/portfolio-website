import { Request, Response } from 'express';
import { projectService } from './project.service';
import { successResponse, createdResponse } from '../../utils/apiResponse';

export const projectController = {
  async getAllProjects(_req: Request, res: Response) {
    const projects = await projectService.getAllProjects();

    return successResponse(res, projects);
  },

  async getProjectById(req: Request, res: Response) {
    const id = Number(req.params.id);

    const project = await projectService.getProjectById(id);

    return successResponse(res, project);
  },

  async createProject(req: Request, res: Response) {
    const project = await projectService.createProject(req.body);

    return createdResponse(res, project);
  },

  async updateProject(req: Request, res: Response) {
    const id = Number(req.params.id);

    const project = await projectService.updateProject(id, req.body);

    return successResponse(res, project);
  },

  async deleteProject(req: Request, res: Response) {
    const id = Number(req.params.id);

    const result = await projectService.deleteProject(id);

    return successResponse(res, result);
  },
};
