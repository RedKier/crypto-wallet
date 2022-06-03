import dotenv from 'dotenv';

import packageJson from '../package.json';

dotenv.config();

const nodeEnv: string = process.env.NODE_ENV ?? 'development';

const config = {
  version: packageJson.version,
  name: packageJson.name,
  description: packageJson.description,

  origins: {
    development: process.env.DEV_ORIGIN ?? '*',
  },
  nodeEnv,
  port: process.env.PORT ?? 3000,
};

export default config;
