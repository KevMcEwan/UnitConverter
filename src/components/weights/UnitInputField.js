import React from 'react';

const UnitInputField = (props) => {

    function handleChange(event) {
        event.preventDefault();
        const currentInputNumber = event.target.value;
        props.handleCurrentNumberChange(currentInputNumber)
    }

    return (
        <div className="input_field">
            <label>Value:</label>
            <input type="number" className="unit_input" onChange={handleChange} />
        </div>
    )
}

export default UnitInputField;