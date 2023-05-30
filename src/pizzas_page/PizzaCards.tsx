import Pizza from "../types/Pizza";
import PizzaCard from "./pizza_card/PizzaCard";

interface Props {
    pizzas: Pizza[]
}

export default function PizzaCards({pizzas} : Props) {
    return (
        <div className="uk-flex uk-flex-between uk-flex-wrap uk-child-width-1-3@m uk-child-width-1-2@s">
            {pizzas.map(pizza => <PizzaCard key={pizza.id} pizza={pizza}/>)}
        </div>
    )
}