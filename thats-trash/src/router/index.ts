import express from 'express';

import transactionsRouter from './transaction.router';
import cryptocurrencyRouter from './cryptocurrency.router';
import healthCheckRouter from './healthCheck.router';

const router = express.Router();

router.use('/', healthCheckRouter);
router.use('/transactions', transactionsRouter);
router.use('/cryptocurrency', cryptocurrencyRouter);

export default router;
