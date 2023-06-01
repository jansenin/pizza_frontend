import {Order} from "../../types/Order";
import React from "react";
import OrderStatus from "./OrderStatus";
import OrderItem from "./OrderItem";

interface Props {
    order: Order;
}

export default function OrderListItem({ order }: Props) {
    return (
    <div className="uk-card uk-card-default uk-margin">
        <div className="uk-card-body uk-text-left">
            {order.orderItems.map(orderItem => <OrderItem key={orderItem.pizza.id} orderItem={orderItem}/>)}
            <OrderStatus orderStatus={order.orderStatus}/>
            <div className="uk-label uk-margin-left">Суммарная цена: {order.totalCost()}</div>
        </div>
    </div>)
}
