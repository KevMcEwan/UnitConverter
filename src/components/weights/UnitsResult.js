import React from 'react';
import ozAndGramsLogic from '../../helpers/ozAndGramsLogic';

const UnitsResult = (props) => {

    const currentInputUnit = props.currentInputUnit;
    const currentInputNumber = props.currentInputNumber;

    const result = ozAndGramsLogic(currentInputUnit, currentInputNumber);

    return (
        <div>
            <label>Result</label>
            <div className="result_div">
                <div className="result_field">{result}</div>
            </div>
        </div>
    )
}

export default UnitsResult;