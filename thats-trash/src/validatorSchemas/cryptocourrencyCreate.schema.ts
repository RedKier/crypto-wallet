// TODO: check why throw bad typing, when theoretically types are provided
// @ts-ignore
import * as Joi from 'joi';
import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';
import 'joi-extract-type';

export const createCryptocourrencySchema = Joi.object({
  symbol: Joi.string().required(),
});

export interface ICryptocourrencyRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: Joi.extractType<typeof createCryptocourrencySchema>;
}
