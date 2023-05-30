import Ingredient from "../../types/Ingredient";

interface Props {
    ingredients: Ingredient[]
}

export default function IngredientList({ingredients} : Props) {

    return (
        <ul className="uk-list uk-list-disc uk-list-primary">
            {ingredients.map(ingredient => <li key={ingredient.id}>{ingredient.name}</li>)}
        </ul>
    )
}