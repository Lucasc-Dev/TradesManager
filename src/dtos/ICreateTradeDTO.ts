export default interface ICreateTradeDTO {
    user_id: string;
    items: Array<{
        item_id: number;
        color?: string;
        certification?: string;
        desc: 'sold' | 'received'
        amount: number;
    }>;
}