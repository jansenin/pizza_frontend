import {useEffect, useState} from "react";
import {Order as OrderType} from "../../types/Order";
import {fetchUnfulfilledOrdersDummy} from "../../fetchingDummy";
import OrderList from "./OrderList";
import {BounceLoader} from "react-spinners";

interface Props {

}

export default function Orders({} : Props) {
    let [orders, setOrders] = useState<OrderType[] | null>(null)

    useEffect(() => {
        let ignore: boolean = false
        async function startFetching() {
            let fetched_orders : OrderType[] = await fetchUnfulfilledOrdersDummy("url/api/get_all_unfulfilled_orders")

            if (!ignore) {
                setOrders(fetched_orders)
            }
        }

        startFetching();

        return () => {
            ignore = true
        }
    }, [orders])

    return (
        <div>
            {orders != null ? <OrderList orders={orders}/> : <div className="uk-flex uk-flex-around"><BounceLoader color="#36d7b7" /></div>}
        </div>
    )
}
