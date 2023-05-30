import React, {useEffect, useState} from 'react';
import PizzaCards from "./pizzas_page/PizzaCards";
import {fetchPizzas} from "./fetching/fetching";
import Pizza from "./types/Pizza";
import {BounceLoader} from "react-spinners";

function App() {
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
            {pizzas != null ? <PizzaCards pizzas={pizzas}/> : <BounceLoader color="#36d7b7" />}
        </div>
    );
}

export default App;
