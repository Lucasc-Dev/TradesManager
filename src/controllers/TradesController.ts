import { Request, Response } from "express";

import CreateTradeService from '../services/CreateTradeService';

import TradesRepository from '../repositories/implementations/TradesRepository';

export default class TradesController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { user_id, items_sold, items_received } = request.body;
        
        const tradesRepository = new TradesRepository();

        const createTrade = new CreateTradeService(tradesRepository);

        const trade = await createTrade.execute({ user_id, items_sold, items_received });

        return response.json(trade);
    }
}