import React from 'react';

const UnitInputList = (props) => {

    const options = props.units.map((unit) => {
        return <option key={unit} value={unit}>
            {unit}
        </option>
    });

    function handleChange(event) {
        event.preventDefault();
        const currentInputUnit = event.target.value;
        props.handleInputUnitChange(currentInputUnit)
    }

    return (
        <div className="unit_list">
            <label>Input Unit:</label>
            <select defaultValue="default" onChange={handleChange} name="unit">
                <option disabled value="default">Choose Unit...</option>
                {options}
            </select>
        </div>
    )
}

export default UnitInputList;