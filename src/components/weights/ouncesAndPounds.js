import React from 'react';

const OuncesAndPounds = (props) => {

    function handlePoundValueChange(event) {
        event.preventDefault();
        const currentPoundValue = event.target.value;
        props.handleCurrentPoundChange(currentPoundValue);
    }

    function handleOunceValueChange(event) {
        event.preventDefault();
        const currentOunceValue = event.target.value;
        props.handleCurrentOunceChange(currentOunceValue);
    }

    return (
        <div className="input_field">
            <label>Pounds</label>
            <input type="number" className="lbs_input" onChange={handlePoundValueChange} />
            <label>Ounces</label>
            <input type="number" className="oz_input" onChange={handleOunceValueChange}/>
        </div>
    )
}

export default OuncesAndPounds;