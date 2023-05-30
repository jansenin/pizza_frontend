import Pizza from "../types/Pizza";
import Ingredient from "../types/Ingredient";

async function fetchPizzas(url: string): Promise<Pizza[]> {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch pizzas');
    }

    const pizzas: Pizza[] = await response.json();
    return pizzas;
}

async function fetchPizzasDummy(url: string): Promise<Pizza[]> {
    await new Promise((resolve, reject) => {
        setTimeout(resolve, 2000)
    })
    return [
        new Pizza("/logo192.png", "Name1", 1, 100, [
            new Ingredient("Помидор))", 1),
            new Ingredient("Салатик))", 2),
            new Ingredient("Тесто))", 3)
        ]),
        new Pizza("/logo192.png", "Name2", 2, 150, [
            new Ingredient("Помидор))", 1),
            new Ingredient("Салатик))", 2),
            new Ingredient("Тесто))", 3)
        ]),
        new Pizza("/logo192.png", "Name4", 4, 0, [
            new Ingredient("Помидор))", 1),
            new Ingredient("Салатик))", 2),
            new Ingredient("Тесто))", 3)
        ]),
        new Pizza("/logo512.png", "Name5", 5, 1123, [
            new Ingredient("Помидор))", 1),
            new Ingredient("Салатик))", 2),
            new Ingredient("Тесто))", 3)
        ])
    ]
}

export { fetchPizzasDummy as fetchPizzas };
