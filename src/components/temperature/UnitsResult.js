import React from 'react';
import TemperatureLogic from '../../helpers/temperatureLogic';

const UnitsResult = (props) => {

    const currentInputUnit = props.currentInputUnit;
    const currentInputNumber = props.currentInputNumber;

    const result = TemperatureLogic(currentInputUnit, currentInputNumber);

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