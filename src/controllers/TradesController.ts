import { Request, Response } from "express";
import { container } from 'tsyringe';

import CreateTradeService from '../services/CreateTradeService';
import ListUserTradesService from '../services/ListUserTradesService';

export default class TradesController {
    public async index(request: Request, response: Response): Promise<Response> {
        const listUserTrades = container.resolve(ListUserTradesService);

        const trades = await listUserTrades.execute();

        return response.json(trades);
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const { user_id, items } = request.body;
        
        const createTrade = container.resolve(CreateTradeService);

        const trade = await createTrade.execute({ user_id, items });

        return response.json(trade);
    }
}