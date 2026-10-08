import React from "react";

export default function Main(){
    
    const [ingredient, setIngredient] = React.useState([]);


    function handleSubmit(event){
        event.preventDefault()
        console.log('Form submitted!')
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient");
        setIngredient(prevIngredient => [...prevIngredient, newIngredient])
        // ingredients.push(newIngredient)
        // console.log(ingredients)
    
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredient.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
        </main>
    )
}