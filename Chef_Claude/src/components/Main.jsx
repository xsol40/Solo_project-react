import React from "react";
import IngredientsList from "./IngredientsList"
import ClaudeRecipe  from "./ClaudeRecipe";

export default function Main(){
    
    const [ingredient, setIngredient] = React.useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    );

    const [recipeShown, setrecipeShown] = React.useState(false);

    function toggleRecipeShown() {
        setrecipeShown(prevShown => !prevShown)
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
                    toggleRecipeShown={toggleRecipeShown}
                />
            }
            { recipeShown && <ClaudeRecipe /> }
        </main>
    )
}