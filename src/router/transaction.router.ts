import express, { Request, Response } from 'express';
import {
  createTransaction,
  getTransactionsList,
  getBalance,
  deleteTransaction,
} from '../services/transation.service';

const transactionsRouter = express.Router();

// get transactions list

transactionsRouter.get('/', getTransactionsList);

// create transaction

transactionsRouter.post('/', createTransaction);

// get balance

transactionsRouter.get('/balance', getBalance);

// delete transaction

transactionsRouter.delete('/:id', deleteTransaction);

export default transactionsRouter;
