import { Request, Response, NextFunction } from 'express';
import { HttpError } from 'http-errors';

const errorMiddleware = (
  error: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = error.status || 500;
  res.status(status).send(error);
};

export default errorMiddleware;
