import {OrderItem as OrderItemType} from "../../types/Order";
import React from "react";

interface Props {
    orderItem: OrderItemType
}

export default function OrderItem({ orderItem }: Props) {
    let pizza = orderItem.pizza
    let count = orderItem.count
    return <div className="uk-card uk-card-default uk-margin uk-flex">
        <div className="uk-width-small uk-flex uk-flex-column uk-flex-around">
            <img src={pizza.url} alt=""/>
        </div>
        <div>
            <div className="uk-card-body">
                <h3 className="uk-card-title">{pizza.name}</h3>
                <div className="uk-position-absolute uk-position-top-right uk-margin-top uk-margin-right">
                    <div className="uk-label uk-margin-right">{pizza.price / 100} BYN за пиццу</div>
                    <div className="uk-label">{pizza.price * count / 100} BYN за всё</div>
                </div>
                <div className="uk-flex uk-flex-right">
                    <div className="uk-text-lead uk-margin-small-left uk-margin-small-right">Количество: {count}</div>
                </div>
            </div>
        </div>
    </div>
}
