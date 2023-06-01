import CartItemList from "./CartItemList";
import cart from "../../Cart";
import {useState} from "react";

interface Props {

}

export default function ({}: Props) {
    let [rerenderKey, setRerenderKey] = useState(0)

    let rerender = () => {
        setRerenderKey(old => old + 1)
    }

    return <CartItemList pizzas={cart.getAllPizzas()} onPizzasListUpdate={rerender}/>
}
