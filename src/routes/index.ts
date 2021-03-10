import Router from 'express';

import tradesRouter from './trades.routes';

const router = Router();

router.use('/trades', tradesRouter);

export default router;