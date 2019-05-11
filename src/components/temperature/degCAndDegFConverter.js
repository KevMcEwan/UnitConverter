import React from 'react';
import UnitsResult from '../temperature/UnitsResult';
import UnitInputList from '../temperature/UnitInputList';
import UnitInputField from '../temperature/UnitInputField';

const degCAndDegFConverter = (props) => {
    return (
        <div className="component1">
        <div className="component_header">Celsius and Fahrenheit Converter</div>
           <UnitInputList
                units={props.units}               
                handleInputUnitChange={props.handleInputUnitChange}
                />
                <UnitInputField 
                handleCurrentNumberChange={props.handleCurrentNumberChange}
                />
            <UnitsResult 
                currentInputUnit={props.currentInputUnit} 
                currentInputNumber={props.currentInputNumber}
            />
        </div>
    )
}

export default degCAndDegFConverter;