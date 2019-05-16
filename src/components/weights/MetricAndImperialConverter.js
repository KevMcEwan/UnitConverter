import React from 'react';
import UnitsResult from './UnitsResult';
import UnitInputList from './UnitInputList';
import UnitInputField from './UnitInputField';
import UnitOutputList from './UnitOutputList';

const MetricAndImperialConverter = (props) => {
    return (
        <div className="component1">
            <div className="component_header">Oz And Grams Converter</div>
            <UnitInputList
                units={props.units}
                handleInputUnitChange={props.handleInputUnitChange}
            />
            <UnitInputField
                currentInputUnit={props.currentInputUnit}
                handleCurrentNumberChange={props.handleCurrentNumberChange}
                handleCurrentKiloChange={props.handleCurrentKiloChange}
                handleCurrentGramChange={props.handleCurrentGramChange}
                handleCurrentPoundChange={props.handleCurrentPoundChange}
                handleCurrentOunceChange={props.handleCurrentOunceChange}
            />
            <UnitOutputList 
                units={props.units}
                currentInputUnit={props.currentInputUnit}
                handleOutputUnitChange={props.handleOutputUnitChange}
            />
            <UnitsResult
                currentInputUnit={props.currentInputUnit}
                currentOutputUnit={props.currentOutputUnit}
                currentKiloValue={props.currentKiloValue}
                currentGramValue={props.currentGramValue}
                currentPoundValue={props.currentPoundValue}
                currentOunceValue={props.currentOunceValue}
            />
        </div>
    )
}

export default MetricAndImperialConverter;