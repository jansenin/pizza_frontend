import Pizza from "./Pizza";

export enum OrderStatus {
    InProcess= "В процессе",
    Rejected = "Отменено",
    Completed = "Готов"
}

export class OrderItem {
    pizza: Pizza;
    count: number;


    constructor(pizza: Pizza, count: number) {
        this.pizza = pizza;
        this.count = count;
    }
}

export class Order {
    orderId: number;
    orderStatus: OrderStatus;
    orderItems: OrderItem[];

    constructor(orderId: number, orderStatus: OrderStatus, orderItems: OrderItem[]) {
        this.orderId = orderId;
        this.orderStatus = orderStatus;
        this.orderItems = orderItems;
    }

    totalCost(): number {
        let result = 0
        for (let orderItem of this.orderItems) {
            result += orderItem.pizza.price * orderItem.count
        }

        return result
    }
}
