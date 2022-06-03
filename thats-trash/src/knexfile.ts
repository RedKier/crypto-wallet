import type { Knex } from 'knex';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

interface KnexConfig {
  [key: string]: Knex.Config;
}

const defaults = {
  client: 'postgresql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    extension: 'ts',
    directory: './migrations',
    tableName: 'knex_migrations',
  },
};

const knexConfig: KnexConfig = {
  development: {
    ...defaults,
    debug: true,
    useNullAsDefault: true,
  },

  production: {
    ...defaults,
  },
};

export default knexConfig;
