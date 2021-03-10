import Router from 'express';

import TradesController from '../controllers/TradesController';

const router = Router();

const tradesController = new TradesController();

router.post('/', tradesController.create);

export default router;