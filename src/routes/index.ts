import Router from 'express';

import usersRouter from './user.routes';
import tradesRouter from './trades.routes';
import sessionsRouter from './sessions.routes';

const router = Router();

router.use('/users', usersRouter);
router.use('/trades', tradesRouter);
router.use('/sessions', sessionsRouter);

export default router;