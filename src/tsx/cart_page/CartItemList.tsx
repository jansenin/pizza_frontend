import Pizza from "../../types/Pizza";
import CartItem from "./CartItem";

interface Props {
    pizzas: Pizza[]
    onPizzasListUpdate: () => void
}

export default function CartItemList({pizzas, onPizzasListUpdate}: Props) {
    return <div className="uk-text-center">
        {pizzas.length != 0 ? pizzas.map(
            pizza => <CartItem
                        key={pizza.id}
                        pizza={pizza}
                        onPizzasListUpdate={onPizzasListUpdate}
            />) : "Пока что в корзине ничего нет"}
    </div>

}