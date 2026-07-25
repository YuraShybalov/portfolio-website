import { prisma } from '../../database/prisma/prisma';
import { ApiError } from '../../utils/ApiError';
import { CreateProjectDto, UpdateProjectDto } from './project.validator';

export const projectService = {
  async getAllProjects() {
    return prisma.project.findMany({
      include: {
        technologies: {
          include: {
            technology: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  },

  async getProjectById(id: number) {
    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        technologies: {
          include: {
            technology: true,
          },
        },
      },
    });

    if (!project) {
      throw new ApiError(404, 'Project not found');
    }

    return project;
  },

  async createProject(data: CreateProjectDto) {
    return prisma.project.create({
      data,
    });
  },

  async updateProject(id: number, data: UpdateProjectDto) {
    await this.getProjectById(id);

    return prisma.project.update({
      where: { id },
      data,
    });
  },

  async deleteProject(id: number) {
    await this.getProjectById(id);

    await prisma.project.delete({
      where: { id },
    });

    return {
      message: 'Project deleted successfully',
    };
  },
};
