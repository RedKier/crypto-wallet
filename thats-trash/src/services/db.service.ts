import Knex from 'knex';

import config from '../config';
import knexConfig from '../knexfile';

const knex = Knex(knexConfig[config.nodeEnv]);

export default knex;
