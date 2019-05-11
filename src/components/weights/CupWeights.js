import React from 'react';
import IngredientList from './IngredientList';
import NumberOfCupsList from './NumberOfCupsList';
import CupsResult from './CupsResult';

const CupWeights = (props) => {
    return (
        <div className="component1">
        <div className="component_header">Cups to Grams Converter</div>
            <IngredientList
                ingredients={props.ingredients}
                handleCurrentIngredientChange={props.handleCurrentIngredientChange}
            />
            <NumberOfCupsList
                cupMeasurements={props.cupMeasurements}
                handleCurrentCupMeasurementChange={props.handleCurrentCupMeasurementChange}
            />
            <CupsResult
                currentIngredient={props.currentIngredient}
                currentCupMeasurement={props.currentCupMeasurement}
            />
        </div>
    )
}

export default CupWeights;