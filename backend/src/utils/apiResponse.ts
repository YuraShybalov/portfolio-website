import { Response } from 'express';

export function successResponse<T>(res: Response, data: T, statusCode = 200) {
  return res.status(statusCode).json({
    success: true,
    data,
  });
}

export function createdResponse<T>(res: Response, data: T) {
  return successResponse(res, data, 201);
}
