import Pizza from "../../types/Pizza";
import {useEffect, useState} from "react";
import {fetchPizzas} from "../../fetching";
import PizzaCards from "./PizzaCards";
import {BounceLoader} from "react-spinners";

interface Props {

}

export default function Pizzas({} : Props) {
    let [pizzas, setPizzas] = useState<Pizza[] | null>(null)

    useEffect(() => {
        let ignore: boolean = false
        async function startFetching() {
            let fetched_pizzas : Pizza[] = await fetchPizzas("url/api/get_all_pizzas")

            if (!ignore) {
                setPizzas(fetched_pizzas)
            }
        }


        startFetching();

        return () => {
            ignore = true
        }
    }, [pizzas])

    return (
        <div className="app">
            <header className="app-header">
            </header>
            {pizzas != null ? <PizzaCards pizzas={pizzas}/> : <div className="uk-flex uk-flex-around"><BounceLoader color="#36d7b7" /></div>}
        </div>
    );
}
