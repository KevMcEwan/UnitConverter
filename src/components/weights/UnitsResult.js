import React from 'react';
import weightConversionLogic from '../../helpers/weightConversionLogic';

const UnitsResult = (props) => {

    const currentInputUnit = props.currentInputUnit;
    const currentOutputUnit = props.currentOutputUnit;
    const currentGramValue = props.currentGramValue;
    const currentKiloValue = props.currentKiloValue;
    const currentOunceValue = props.currentOunceValue;
    const currentPoundValue = props.currentPoundValue;

    const result = weightConversionLogic(currentInputUnit, currentOutputUnit, currentGramValue, currentKiloValue, currentOunceValue, currentPoundValue);
    
    // debugger 
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