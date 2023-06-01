import React, {useState} from 'react';
import Pizza from "../../../types/Pizza";
import IngredientList from "./IngredientList";
import cart from "../../../Cart";

interface Props {
    pizza: Pizza
}

export default function PizzaCard({pizza}: Props) {
    let [count, setCount] = useState(cart.countOf(pizza))

    let handleAdd = () => {
        cart.addPizza(pizza)
        setCount(cart.countOf(pizza))
    }

    let handleRemove = () => {
        cart.removePizzaIfCan(pizza)
        setCount(cart.countOf(pizza))
    }

    return (<div>
        <div className="uk-margin-left uk-margin-right uk-margin-top uk-margin-bottom">
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top uk-flex uk-flex-around">
                    <img src={pizza.url} className="uk-height-small uk-margin-top"/>
                </div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">{pizza.name}</h3>
                    <div className="uk-card-badge uk-label uk-width-min-content">{pizza.price / 100} BYN</div>
                    <IngredientList ingredients={pizza.ingredients}/>
                    <div className="uk-flex uk-flex-right">
                        <button className="uk-button uk-button-primary uk-button-small" onClick={handleRemove}>-</button>
                        <div className="uk-text-lead uk-margin-small-left uk-margin-small-right">{count}</div>
                        <button className="uk-button uk-button-primary uk-button-small" onClick={handleAdd}>+</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}