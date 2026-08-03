import { prisma } from '../../database/prisma/prisma';

import { CreateEducationDto, UpdateEducationDto } from './education.validator';

export const educationService = {
  async getAllEducation() {
    return prisma.education.findMany({
      orderBy: {
        startDate: 'desc',
      },
    });
  },

  async getEducationById(id: number) {
    return prisma.education.findUniqueOrThrow({
      where: { id },
    });
  },

  async createEducation(data: CreateEducationDto) {
    return prisma.education.create({
      data: {
        ...data,
        startDate: new Date(data.startDate),

        endDate: data.endDate ? new Date(data.endDate) : null,
      },
    });
  },

  async updateEducation(id: number, data: UpdateEducationDto) {
    return prisma.education.update({
      where: { id },
      data: {
        ...data,

        startDate: data.startDate ? new Date(data.startDate) : undefined,

        endDate:
          data.endDate !== undefined ? (data.endDate ? new Date(data.endDate) : null) : undefined,
      },
    });
  },

  async deleteEducation(id: number) {
    await prisma.education.delete({
      where: { id },
    });

    return {
      message: 'Education deleted successfully',
    };
  },
};
