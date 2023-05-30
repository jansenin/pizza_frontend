import React from 'react';
import Pizza from "../../types/Pizza";
import IngredientList from "./IngredientList";

interface Props {
    pizza: Pizza
}

export default function PizzaCard({pizza}: Props) {
    return (<div>
        <div className="uk-margin-left uk-margin-right uk-margin-top uk-margin-bottom">
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top uk-flex uk-flex-around">
                    <img src={pizza.url} className="uk-height-small"/>
                </div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">{pizza.name}</h3>
                    <div className="uk-card-badge uk-label uk-width-min-content">{pizza.price / 100} BYN</div>
                    <IngredientList ingredients={pizza.ingredients}/>
                </div>
            </div>
        </div>
    </div>)
}