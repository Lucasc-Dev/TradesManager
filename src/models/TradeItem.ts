import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import Item from "./Item";
import Trade from "./Trade";

@Entity('trade-items')
export default class TradeItem {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(type => Trade, trade => trade.id)
    @JoinColumn({ name: 'trade_id' })
    trade: Trade;

    @Column()
    item_id: number;

    @ManyToOne(type => Item, item => item.id)
    @JoinColumn({ name: 'item_id' })
    item: Item;

    @Column()
    desc: 'sold' | 'received';

    @Column()
    color: string;

    @Column()
    certification: string;

    @Column()
    amount: number;
}