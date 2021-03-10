import { getRepository, Repository } from "typeorm";

import ITradesRepository from "../models/ITradesRepository";
import ICreateTradeDTO from "../../dtos/ICreateTradeDTO";

import Trade from "../../models/Trade";

export default class TradesRepository implements ITradesRepository {
    private ormRepository: Repository<Trade>;

    constructor() {
        this.ormRepository = getRepository(Trade);
    }
    
    public async create(data: ICreateTradeDTO): Promise<Trade> {
        const trade = this.ormRepository.create(data);

        await this.ormRepository.save(trade);

        return trade;
    }

    public async save(trade: Trade): Promise<void> {
        this.ormRepository.save(trade);
    }
}