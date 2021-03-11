import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class CreateTradeItemsTable1615383286734 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'trade-items',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'trade_id',
                        type: 'uuid',
                    },
                    {
                        name: 'item_id',
                        type: 'int',
                    },
                    {
                        name: 'desc',
                        type: 'enum',
                        enum: ['sold', 'received'],
                    },
                    {
                        name: 'color',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'certification',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'amount',
                        type: 'integer',
                    }
                ]
            })
        );

        await queryRunner.createForeignKey(
            'trade-items', 
            new TableForeignKey({
                name: 'TradeKey',
                columnNames: ['trade_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'trades',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        );

        await queryRunner.createForeignKey(
            'trade-items', 
            new TableForeignKey({
                name: 'ItemKey',
                columnNames: ['item_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'items',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        );

        await queryRunner.dropColumn('trades', 'items_sold');

        await queryRunner.dropColumn('trades', 'items_received');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'trades',
            new TableColumn({
                name: 'items_received',
                type: 'varchar',
            })
        );

        await queryRunner.addColumn(
            'trades',
            new TableColumn({
                name: 'items_sold',
                type: 'varchar',
            })
        );

        await queryRunner.dropForeignKey('trade-items', 'ItemKey');

        await queryRunner.dropForeignKey('trade-items', 'TradeKey');

        await queryRunner.dropTable('trade-items');
    }

}
