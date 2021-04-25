import { Request, Response, NextFunction } from 'express';
import ApiError from './ApiError';

// error handling inspiration
// https://www.smashingmagazine.com/2020/08/error-handling-nodejs-error-classes/

export default (
  err: ApiError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // do something
};
