import React from 'react';

const IngredientList = (props) => {

    const options = props.ingredients.map((ingredient) => {
        return <option key={ingredient} value={ingredient}>
            {ingredient}
        </option>
    })

    function handleChange(event){
        event.preventDefault();    
        const currentIngredient = event.target.value;
        props.handleCurrentIngredientChange(currentIngredient)
    }

    return (
        <div className="ingredient_list">
        <label>Ingredient:</label>
            <select defaultValue="default" onChange={handleChange} name="ingredient">
                <option disabled value="default">Choose ingredient...</option>
                {options}
            </select>
        </div>
    )
}

export default IngredientList;