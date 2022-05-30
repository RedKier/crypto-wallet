import { NextFunction, Request, Response } from 'express';
import knex from '../services/db.service';
import { ValidatedRequest } from 'express-joi-validation';
import { BadRequest, InternalServerError } from 'http-errors';

import { ICryptocourrencyRequestSchema } from '../validatorSchemas/cryptocourrencyCreate.schema';

interface Cryptocourrency {
  id: number;
  symbol: string;
}

const getCryptoPositionBySymbol = async (symbol: string): Promise<Cryptocourrency> => {
  const [cryptocourrency] = await knex<Cryptocourrency>('cryptocurrency')
    .select('id', 'symbol')
    .where('symbol', symbol)
    .limit(1);

  return cryptocourrency;
};

const getCryptoPositionById = async (id: number): Promise<Cryptocourrency> => {
  const [cryptocourrency] = await knex<Cryptocourrency>('cryptocurrency')
    .select('id', 'symbol')
    .where('id', id)
    .limit(1);

  return cryptocourrency;
};

export const deleteCryptoPosition = async (req: Request, res: Response): Promise<void> => {
  res.status(204).send();
};

export const createCryptoPosition = async (
  req: ValidatedRequest<ICryptocourrencyRequestSchema>,
  res: Response,
  next: NextFunction
) => {
  const { symbol } = req.body;

  const cryptoSymbol = await getCryptoPositionBySymbol(symbol);

  if (cryptoSymbol) {
    return next(new BadRequest('Given symbol already exist in database.'));
  }

  await knex<Cryptocourrency>('cryptocurrency').insert({
    symbol,
  });

  const crypto = await getCryptoPositionBySymbol(symbol);

  res.status(201).json(crypto);
};

export const getCryptoPositionsList = async (req: Request, res: Response) => {
  res.status(200).json({ message: 'crypto positions list' });
};
