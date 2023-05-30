import Ingredient from "./Ingredient";

export default class Pizza {
    url: string;
    name: string;
    id: number;
    price: number;
    ingredients: Ingredient[];


    constructor(url: string, name: string, id: number, price: number, ingredients: Ingredient[]) {
        this.url = url;
        this.name = name;
        this.id = id;
        this.price = price;
        this.ingredients = ingredients;
    }
}
