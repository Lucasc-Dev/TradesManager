import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Trade from "./Trade";

@Entity('users')
export default class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToMany(
        type => Trade, 
        trade => trade.user, 
        { cascade: ['insert', 'update'] }
    )
    @JoinColumn({ name: 'user_id' })
    trades: Trade[];

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    credits: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}