import Pizza from "../../types/Pizza";
import React, {useState} from "react";
import cart from "../../Cart";

interface Props {
    pizza: Pizza;
    onPizzasListUpdate: () => void
}

export default function CartItem({pizza, onPizzasListUpdate}: Props) {
    let [count, setCount] = useState(cart.countOf(pizza))

    let handleAdd = () => {
        cart.addPizza(pizza)
        setCount(cart.countOf(pizza))
    }

    let handleRemove = () => {
        cart.removePizzaIfCan(pizza)
        setCount(cart.countOf(pizza))
        if (cart.countOf(pizza) === 0) {
            onPizzasListUpdate()
        }
    }

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
                    <button className="uk-button uk-button-primary uk-button-small" onClick={handleRemove}>-</button>
                    <div className="uk-text-lead uk-margin-small-left uk-margin-small-right">{count}</div>
                    <button className="uk-button uk-button-primary uk-button-small" onClick={handleAdd}>+</button>
                </div>
            </div>
        </div>
    </div>
}
