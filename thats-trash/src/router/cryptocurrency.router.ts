import express, { Request, Response } from 'express';
import { createValidator } from 'express-joi-validation';

import {
  deleteCryptoPosition,
  createCryptoPosition,
  getCryptoPositionsList,
} from '../services/cryptocurrency.service';
import { asyncHandler } from '../utils';
import { createCryptocourrencySchema } from '../validatorSchemas/cryptocourrencyCreate.schema';

const validator = createValidator();

const cryptocurrencyRouter = express.Router();

// get crypto positions

cryptocurrencyRouter.get('/', asyncHandler(getCryptoPositionsList));

// create crypto position

cryptocurrencyRouter.post(
  '/',
  validator.body(createCryptocourrencySchema),
  asyncHandler(createCryptoPosition)
);

// delete crypto position

cryptocurrencyRouter.delete('/:id', asyncHandler(deleteCryptoPosition));

export default cryptocurrencyRouter;
