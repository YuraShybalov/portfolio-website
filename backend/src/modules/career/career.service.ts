import { prisma } from '../../database/prisma/prisma';
import { ApiError } from '../../utils/ApiError';
import { CreateCareerDto, UpdateCareerDto } from './career.validator';

export const careerService = {
  async getAllCareers() {
    return prisma.career.findMany({
      orderBy: {
        startDate: 'desc',
      },
      include: {
        items: true,
      },
    });
  },

  async getCareerById(id: number) {
    const career = await prisma.career.findUnique({
      where: { id },
      include: {
        items: true,
      },
    });

    if (!career) {
      throw new ApiError(404, 'Career not found');
    }

    return career;
  },

  async createCareer(data: CreateCareerDto) {
    const { items, ...careerData } = data;

    return prisma.career.create({
      data: {
        ...careerData,
        items: items
          ? {
              create: items,
            }
          : undefined,
      },
      include: {
        items: true,
      },
    });
  },

  async updateCareer(id: number, data: UpdateCareerDto) {
    await this.getCareerById(id);

    const { items, ...careerData } = data;

    return prisma.career.update({
      where: { id },
      data: {
        ...careerData,

        ...(items !== undefined && {
          items: {
            deleteMany: {},
            create: items,
          },
        }),
      },
      include: {
        items: true,
      },
    });
  },

  async deleteCareer(id: number) {
    await this.getCareerById(id);

    return prisma.career.delete({
      where: { id },
    });
  },
};
