import React from 'react';

const NumberOfCupsList = (props) => {

    const options = props.measurements.map((measurement) => {
        return <option key={measurement} value={measurement}>
            {measurement}
        </option>
    })

    function handleChange(event) {
        event.preventDefault();
        const currentMeasurement = event.target.value;
        props.handleCurrentMeasurementChange(currentMeasurement)
    }

    return (
        <div className="measurement_list">
        <label>Number of Cups:</label>
            <select defaultValue="default" onChange={handleChange}>
                <option disabled value="default">Choose number of cups...</option>
                {options}
            </select>
        </div>
    )
}

export default NumberOfCupsList;