import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import TradeItem from './TradeItem';
import User from "./User";

@Entity('trades')
export default class Trade {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(type => User, user => user.id)
    user: User;

    @OneToMany(
        type => TradeItem, 
        item => item.trade, 
        { eager: true, cascade: true }
    )
    items: TradeItem[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}