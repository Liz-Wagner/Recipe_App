import React from "react";

function RecipeView({ recipe, deleteRecipe }) {
    return (
        <tbody> 
            <tr className="recipe">
                <td>{recipe.name}</td>
                <td>{recipe.cuisine}</td>
                <td>
                    <img src={recipe.photo} alt="plate of food"/>
                </td>
                <td className="content_td"><p>{recipe.ingredients}</p></td>
                <td className="content_td"><p>{recipe.preparation}</p></td>
                <td>
                    <button name="delete" onClick={deleteRecipe}>
                    Delete
                    </button>
                </td>
            </tr>
        </tbody>
    )
}

export default RecipeView