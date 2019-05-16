import React from 'react';

const GramsAndKilos = (props) => {

    function handleKiloValueChange(event){
        event.preventDefault();
        const currentKiloValue = event.target.value;
        props.handleCurrentKiloChange(currentKiloValue);
    }

    function handleGramValueChange(event) {
        event.preventDefault();
        const currentGramValue = event.target.value;
        props.handleCurrentGramChange(currentGramValue);
    }

    return (
        <div className="input_field">
            <label>Kilograms</label>
            <input type="number" className="kg_input" onChange={handleKiloValueChange}/>
            <label>Grams</label>
            <input type="number" className="g_input" onChange={handleGramValueChange}/>
        </div>
    )
}

export default GramsAndKilos;