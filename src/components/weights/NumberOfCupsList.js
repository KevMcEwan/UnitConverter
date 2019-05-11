import React from 'react';

const NumberOfCupsList = (props) => {

    const options = props.cupMeasurements.map((measurement) => {
        return <option key={measurement} value={measurement}>
            {measurement}
        </option>
    })

    function handleChange(event) {
        event.preventDefault();
        const currentCupMeasurement = event.target.value;
        props.handleCurrentCupMeasurementChange(currentCupMeasurement)
    }

    return (
        <div className="cups_list">
            <div className="unit_list">
                <label>Number of Cups:</label>
                <select defaultValue="default" onChange={handleChange}>
                    <option disabled value="default">Choose number of cups...</option>
                    {options}
                </select>
            </div>
        </div>
    )
}

export default NumberOfCupsList;