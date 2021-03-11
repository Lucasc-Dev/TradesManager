import Trade from "../../models/Trade";

import ICreateTradeDTO from "../../dtos/ICreateTradeDTO";

export default interface ITradesRepository {
    find(): Promise<Trade[]>;
    create(data: ICreateTradeDTO): Promise<Trade>;
    save(trade: Trade): Promise<void>;
}