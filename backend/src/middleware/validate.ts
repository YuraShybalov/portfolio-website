import { Request, Response, NextFunction } from 'express';
import { ZodError, ZodType } from 'zod';

type ValidateTarget = 'body' | 'params';

export const validate =
  (schema: ZodType, target: ValidateTarget = 'body') =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      if (target === 'body') {
        req.body = schema.parse(req.body);
      } else {
        schema.parse(req.params);
      }

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: 'Validation failed',
          errors: error.issues,
        });
      }

      next(error);
    }
  };
