import Trade from "../models/Trade";

import ITradesRepository from "../repositories/models/ITradesRepository";

export default class ListUserTradesService {
    constructor (
        private tradesRepository: ITradesRepository,
    ) {}

    public async execute(): Promise<Trade[]> {
        const trades = await this.tradesRepository.find();

        return trades;
    }
}