import React from 'react';

const UnitOutputList = (props) => {

    const options = props.units.map((unit) => {
        return <option key={unit} value={unit}>
            {unit}
        </option>
    });

    function handleChange(event) {
        event.preventDefault();
        const currentOutputUnit = event.target.value;
        props.handleOutputUnitChange(currentOutputUnit)
    }

    return (
        <div className="unit_list">
            <label>Output Unit:</label>
            <select defaultValue="default" onChange={handleChange} name="unit">
                <option disabled value="default">Choose Output Units...</option>
                {options}
            </select>
        </div>
    )
}

export default UnitOutputList;