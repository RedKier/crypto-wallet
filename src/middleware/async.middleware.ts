import { RequestHandler, Request, Response } from 'express';

const notFoundMiddleware: RequestHandler = (req: Request, res: Response) => {
  res.status(404).json({ message: 'Not Found' });
};

export default notFoundMiddleware;
