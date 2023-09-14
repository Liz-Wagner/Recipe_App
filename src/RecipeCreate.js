import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const initialFormState = {
    name: "Name",
    cuisine: "Cuisine",
    photo: "URL",
    ingredients: "Ingredients",
    preparation: "Preparation",
}

  const [formData, setFormData] = useState({ ...initialFormState });
  
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const handleFormChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  
  const handleCreate = (event) => {
    event.preventDefault();
    createRecipe( formData )
    setFormData({ ...initialFormState })
  }

  return (
      <form name="create" onSubmit={handleCreate}>
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required={true}
                  onChange={handleFormChange}
                  value={formData.name}
                />
              </td>
              <td>
                <input
                    id="cuisine"
                    type="text"
                    name="cuisine"
                    required={true}
                    onChange={handleFormChange}
                    value={formData.cuisine}
                />
              </td>
              <td>
                <input 
                  id="photo" 
                  name="photo" 
                  type="url" 
                  required={true}
                  onChange={handleFormChange}
                  value={formData.photo}
                />
              </td>
              <td>
                <textarea
                    id="ingredients"
                    type="text"
                    name="ingredients"
                    required={true}
                    onChange={handleFormChange}
                    value={formData.ingredients}
                />
              </td>
              <td>  
                <textarea
                  id="preparation"
                  type="text"
                  name="preparation"
                  required={true}
                  rows={3}
                  onChange={handleFormChange}
                  value={formData.preparation}
                />
              </td>
              <td>
                <button type="submit">Create</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }

export default RecipeCreate;
