import Router from 'express';

import TradesController from '../controllers/TradesController';

const router = Router();

const tradesController = new TradesController();

router.get('/', tradesController.index);
router.post('/', tradesController.create);

export default router;