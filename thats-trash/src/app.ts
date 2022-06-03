import cors from 'cors';
import express, { Express } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import config from './config';
import router from './router';
import notFoundMiddleware from './middleware/notFound.middleware';
import errorMiddleware from './middleware/error.middleware';

const app: Express = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    // @ts-ignore
    origin: config.origins[config.nodeEnv],
  })
);

app.use(helmet());
app.use(morgan('tiny'));

// Routes
app.use(`/api/v${config.version[0]}/`, router);

// Error handling
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
