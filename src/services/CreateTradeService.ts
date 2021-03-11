import Trade from "../models/Trade";
import ITradesRepository from "../repositories/models/ITradesRepository";

interface Request {
    user_id: string;
    items: Array<{
        item_id: number;
        desc: 'sold' | 'received',
        color?: string;
        certification?: string;
        amount: number;
    }>;
}

export default class CreateTradeService {
    constructor(
        private tradesRepository: ITradesRepository,
    ) {}

    public async execute(data: Request): Promise<Trade> {
        const trade = await this.tradesRepository.create(data);

        return trade;
    }
}