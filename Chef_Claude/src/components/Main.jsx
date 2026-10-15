import React from "react";
import IngredientsList from "./IngredientsList"
import ClaudeRecipe  from "./ClaudeRecipe";
import {getRecipeFromMistral} from "../ai"

export default function Main(){
    
    const [ingredient, setIngredient] = React.useState([]);

    const [recipe, setRecipe] = React.useState();

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredient)
        setRecipe(recipeMarkdown);
    }

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient").trim();
        if (!newIngredient) return;

        setIngredient(previousIngredients => [...previousIngredients, newIngredient]);
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            { ingredient.length > 0 && 
                <IngredientsList 
                    ingredient={ingredient}
                    getRecipe={getRecipe}
                />
            }
            { recipe && <ClaudeRecipe recipe={recipe}/> }
        </main>
    )
}