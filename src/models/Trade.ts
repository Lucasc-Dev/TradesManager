import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import TradeItem from './TradeItem';
import User from "./User";

@Entity('trades')
export default class Trade {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    user_id: string;

    @ManyToOne(
        type => User,
        user => user.id,
    )
    @JoinColumn({ name: 'user_id' })
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