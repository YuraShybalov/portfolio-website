import { Request, Response } from 'express';

import { contactService } from './contact.service';
import { successResponse, createdResponse } from '../../utils/apiResponse';

export const contactController = {
  async getAllContacts(_req: Request, res: Response) {
    const contacts = await contactService.getAllContacts();

    return successResponse(res, contacts);
  },

  async getContactById(req: Request, res: Response) {
    const id = Number(req.params.id);

    const contact = await contactService.getContactById(id);

    return successResponse(res, contact);
  },

  async createContact(req: Request, res: Response) {
    const contact = await contactService.createContact(req.body);

    return createdResponse(res, contact);
  },

  async updateContact(req: Request, res: Response) {
    const id = Number(req.params.id);

    const contact = await contactService.updateContact(id, req.body);

    return successResponse(res, contact);
  },

  async deleteContact(req: Request, res: Response) {
    const id = Number(req.params.id);

    const result = await contactService.deleteContact(id);

    return successResponse(res, result);
  },
};
