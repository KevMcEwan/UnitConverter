import React from 'react';
import IngredientList from './IngredientList';
import NumberOfCupsList from './NumberOfCupsList';
import Result from './Result';

const Component1 = (props) => {
    return (
        <div className="component1">
        <div className="component_header">Cups to Grams Converter</div>
            <IngredientList
                ingredients={props.ingredients}
                handleCurrentIngredientChange={props.handleCurrentIngredientChange}
            />
            <NumberOfCupsList
                measurements={props.measurements}
                handleCurrentMeasurementChange={props.handleCurrentMeasurementChange}
            />
            <Result
                currentIngredient={props.currentIngredient}
                currentMeasurement={props.currentMeasurement}
            />
        </div>
    )
}

export default Component1;