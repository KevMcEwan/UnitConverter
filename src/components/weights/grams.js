import React from 'react';

const Grams = (props) => {

    function handleGramValueChange(event) {
        event.preventDefault();
        const currentGramValue = event.target.value;
        props.handleCurrentGramChange(currentGramValue);
    }

    return (
        <div className="input_field">
            <label>Grams</label>
            <input type="number" className="g_input" onChange={handleGramValueChange} />
        </div>
    )
}

export default Grams;