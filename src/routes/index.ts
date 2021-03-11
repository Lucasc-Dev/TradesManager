import Router from 'express';

import usersRouter from './user.routes';
import tradesRouter from './trades.routes';

const router = Router();

router.use('/users', usersRouter);
router.use('/trades', tradesRouter);

export default router;