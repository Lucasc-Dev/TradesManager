import { injectable, inject } from 'tsyringe';
import Trade from "../models/Trade";

import ITradesRepository from "../repositories/models/ITradesRepository";

@injectable()
export default class ListUserTradesService {
    constructor (
        @inject('TradesRepository')
        private tradesRepository: ITradesRepository,
    ) {}

    public async execute(): Promise<Trade[]> {
        const trades = await this.tradesRepository.find();

        return trades;
    }
}