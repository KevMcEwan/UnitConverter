import React from 'react';

const Ounces = (props) => {

    function handleOunceValueChange(event) {
        event.preventDefault();
        const currentOunceValue = event.target.value;
        props.handleCurrentOunceChange(currentOunceValue);
    }

    return (
        <div className="input_field">
            <label>Ounces</label>
            <input type="number" className="oz_input" onChange={handleOunceValueChange}/>
        </div>
    )
}

export default Ounces;