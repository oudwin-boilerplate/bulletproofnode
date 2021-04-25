import { Request, Response, NextFunction } from 'express';
import ApiError from './ApiError';

export default (req: Request, res: Response, next: NextFunction) => {
  next(ApiError.create('Route not found in application').status(404));
};
