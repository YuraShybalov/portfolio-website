import { prisma } from '../../database/prisma/prisma';

import { CreateContactDto, UpdateContactDto } from './contact.validator';

export const contactService = {
  async getAllContacts() {
    return prisma.contact.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  },

  async getContactById(id: number) {
    return prisma.contact.findUniqueOrThrow({
      where: { id },
    });
  },

  async createContact(data: CreateContactDto) {
    return prisma.contact.create({
      data,
    });
  },

  async updateContact(id: number, data: UpdateContactDto) {
    return prisma.contact.update({
      where: { id },
      data,
    });
  },

  async deleteContact(id: number) {
    await prisma.contact.delete({
      where: { id },
    });

    return {
      message: 'Contact deleted successfully',
    };
  },
};
