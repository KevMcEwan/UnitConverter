import React from 'react';
import UnitsResult from './UnitsResult';
import UnitInputList from './UnitInputList';
import UnitInputField from './UnitInputField';

const OzAndGramsConverter = (props) => {
    return (
        <div className="component1">
        <div className="component_header">Oz And Grams Converter</div>
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

export default OzAndGramsConverter;