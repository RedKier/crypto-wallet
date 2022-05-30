import express, { Request, Response } from 'express';

import config from '../config';

const healthCheckRouter = express.Router();

healthCheckRouter.get('/', (req: Request, res: Response) =>
  res.status(200).json({ message: `Health check on ${config.name} successful` })
);

export default healthCheckRouter;
