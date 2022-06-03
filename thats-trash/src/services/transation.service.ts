import { Request, Response } from 'express';

export const createTransaction = (req: Request, res: Response) => {
  res.status(201).json({ message: 'crypto positions created' });
};

export const getTransactionsList = (req: Request, res: Response) => {
  res.status(200).json({ message: 'transactions list' });
};

export const getBalance = (req: Request, res: Response) => {
  res.status(200).json({ message: 'balance' });
};

export const deleteTransaction = (req: Request, res: Response) => {
  res.status(204).send();
};
