import { NextFunction, Request, Response } from 'express';

import { verifyAccessToken } from '../config/jwt';
import { ApiError } from '../utils/ApiError';

export function authenticate(req: Request, _res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new ApiError(401, 'Authorization header is missing');
  }

  if (!authHeader.startsWith('Bearer ')) {
    throw new ApiError(401, 'Invalid authorization header');
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = verifyAccessToken(token);

    req.admin = payload;

    next();
  } catch {
    throw new ApiError(401, 'Invalid or expired token');
  }
}
