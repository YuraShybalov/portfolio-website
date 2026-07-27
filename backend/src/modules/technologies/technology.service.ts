import { prisma } from '../../database/prisma/prisma';
import { CreateTechnologyDto, UpdateTechnologyDto } from './technology.validator';
import { ApiError } from '../../utils/ApiError';

export const technologyService = {
  async getAllTechnologies() {
    return prisma.technology.findMany({
      orderBy: {
        order: 'asc',
      },
    });
  },

  async getTechnologyById(id: number) {
    const technology = await prisma.technology.findUnique({
      where: { id },
    });

    if (!technology) {
      throw new ApiError(404, 'Technology not found');
    }

    return technology;
  },

  async createTechnology(data: CreateTechnologyDto) {
    return prisma.technology.create({
      data,
    });
  },

  async updateTechnology(id: number, data: UpdateTechnologyDto) {
    await this.getTechnologyById(id);

    return prisma.technology.update({
      where: { id },
      data,
    });
  },

  async deleteTechnology(id: number) {
    await this.getTechnologyById(id);

    return prisma.technology.delete({
      where: { id },
    });
  },
};
