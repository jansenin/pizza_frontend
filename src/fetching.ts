import Pizza from "./types/Pizza";
import { fetchPizzasDummy, fetchUnfulfilledOrdersDummy } from "./fetchingDummy"
import {Order} from "./types/Order";

async function fetchPizzas(url: string): Promise<Pizza[]> {
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error('Failed to fetch pizzas')
    }

    const pizzas: Pizza[] = await response.json()
    return pizzas
}

async function fetchUnfulfilledOrders(url: string): Promise<Order[]> {
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error('Failed to fetch unfulfilled orders')
    }

    const orders: Order[] = await response.json()
    return orders
}

export { fetchPizzasDummy as fetchPizzas, fetchUnfulfilledOrdersDummy as fetchFulfilledOrders }
