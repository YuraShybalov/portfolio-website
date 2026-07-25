import { Request, Response } from 'express';
import { projectService } from './project.service';

export const projectController = {
  async getAllProjects(_req: Request, res: Response) {
    const projects = await projectService.getAllProjects();

    res.json({
      success: true,
      data: projects,
    });
  },

  async getProjectById(req: Request, res: Response) {
    const id = Number(req.params.id);

    const project = await projectService.getProjectById(id);

    res.json({
      success: true,
      data: project,
    });
  },

  async createProject(req: Request, res: Response) {
    const project = await projectService.createProject(req.body);

    res.status(201).json({
      success: true,
      data: project,
    });
  },

  async updateProject(req: Request, res: Response) {
    const id = Number(req.params.id);

    const project = await projectService.updateProject(id, req.body);

    res.json({
      success: true,
      data: project,
    });
  },

  async deleteProject(req: Request, res: Response) {
    const id = Number(req.params.id);

    const result = await projectService.deleteProject(id);

    res.json({
      success: true,
      data: result,
    });
  },
};
