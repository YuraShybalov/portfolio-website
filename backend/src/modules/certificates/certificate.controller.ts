import { Request, Response } from 'express';

import { certificateService } from './certificate.service';
import { successResponse, createdResponse } from '../../utils/apiResponse';

export const certificateController = {
  async getAllCertificates(_req: Request, res: Response) {
    const certificates = await certificateService.getAllCertificates();

    return successResponse(res, certificates);
  },

  async getCertificateById(req: Request, res: Response) {
    const id = Number(req.params.id);

    const certificate = await certificateService.getCertificateById(id);

    return successResponse(res, certificate);
  },

  async createCertificate(req: Request, res: Response) {
    const certificate = await certificateService.createCertificate(req.body);

    return createdResponse(res, certificate);
  },

  async updateCertificate(req: Request, res: Response) {
    const id = Number(req.params.id);

    const certificate = await certificateService.updateCertificate(id, req.body);

    return successResponse(res, certificate);
  },

  async deleteCertificate(req: Request, res: Response) {
    const id = Number(req.params.id);

    await certificateService.deleteCertificate(id);

    return successResponse(res, {
      message: 'Certificate deleted successfully',
    });
  },
};
