import { Request, Response } from "express";

import CreateTradeService from '../services/CreateTradeService';
import ListUserTradesService from '../services/ListUserTradesService';

import TradesRepository from '../repositories/implementations/TradesRepository';

export default class TradesController {
    public async index(request: Request, response: Response): Promise<Response> {
        const tradesRepository = new TradesRepository();

        const listUserTrades = new ListUserTradesService(tradesRepository);

        const trades = await listUserTrades.execute();

        return response.json(trades);
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const { user_id, items } = request.body;
        
        const tradesRepository = new TradesRepository();

        const createTrade = new CreateTradeService(tradesRepository);

        const trade = await createTrade.execute({ user_id, items });

        return response.json(trade);
    }
}