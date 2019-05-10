import React from 'react';
import cupLogic from '../../helpers/cupLogic';

const Result = (props) => {

    const currentIngredient = props.currentIngredient;
    const currentMeasurement = props.currentMeasurement;
    const result = cupLogic(currentIngredient, currentMeasurement);

    return (
        <div>
            <label>Result (grams or millilitres)</label>
            <div className="result_div">
                <div className="result_field">{result}</div>
            </div>
        </div>
    )
}

export default Result;