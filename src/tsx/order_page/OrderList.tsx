import {Order} from "../../types/Order";
import OrderListItem from "./OrderListItem";

interface Props {
    orders: Order[]
}

export default function OrderList({orders}: Props) {
    return <div className="uk-text-center">
        {orders.length !== 0 ? orders.map(order => <OrderListItem order={order}/>) : "Пока что заказов нет"}
    </div>
}
