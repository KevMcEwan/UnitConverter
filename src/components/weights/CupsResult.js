import React from 'react';
import cupLogic from '../../helpers/cupLogic';

const CupsResult = (props) => {

    const currentIngredient = props.currentIngredient;
    const currentCupMeasurement = props.currentCupMeasurement;
    const result = cupLogic(currentIngredient, currentCupMeasurement);

    return (
        <div>
            <label>Result (grams or millilitres)</label>
            <div className="result_div">
                <div className="result_field">{result}</div>
            </div>
        </div>
    )
}

export default CupsResult;