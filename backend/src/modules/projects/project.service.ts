import { prisma } from '../../database/prisma/prisma';
import { ApiError } from '../../utils/ApiError';
import { CreateProjectDto, UpdateProjectDto } from './project.validator';

export const projectService = {
  async getAllProjects() {
    return prisma.project.findMany({
      orderBy: {
        order: 'asc',
      },
      include: {
        technologies: {
          include: {
            technology: true,
          },
        },
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
    const { technologyIds, ...projectData } = data;

    return prisma.project.create({
      data: {
        ...projectData,

        technologies: technologyIds
          ? {
              create: technologyIds.map((technologyId) => ({
                technologyId,
              })),
            }
          : undefined,
      },

      include: {
        technologies: {
          include: {
            technology: true,
          },
        },
      },
    });
  },

  async updateProject(id: number, data: UpdateProjectDto) {
    await this.getProjectById(id);

    const { technologyIds, ...projectData } = data;

    return prisma.project.update({
      where: { id },

      data: {
        ...projectData,

        ...(technologyIds !== undefined && {
          technologies: {
            deleteMany: {},
            create: technologyIds.map((technologyId) => ({
              technologyId,
            })),
          },
        }),
      },

      include: {
        technologies: {
          include: {
            technology: true,
          },
        },
      },
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
