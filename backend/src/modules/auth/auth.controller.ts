import { Request, Response } from 'express';

import { successResponse } from '../../utils/apiResponse';
import { authService } from './auth.service';

export const authController = {
  async login(req: Request, res: Response) {
    const result = await authService.login(req.body);

    successResponse(res, result);
  },
};
