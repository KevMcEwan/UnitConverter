import React from 'react';
import Grams from './grams';
import Ounces from './ounces';
import GramsAndKilos from './gramsAndKilos';
import OuncesAndPounds from './ouncesAndPounds';

const UnitInputField = (props) => {

    let currentDiv = (
        <div>
            <label>Choose input units above</label>
        </div>
    );

    if (props.currentInputUnit === "Grams") {
        let currentDiv =
            <Grams
                handleCurrentGramChange={props.handleCurrentGramChange}
            />;
        return currentDiv;
    } else if (props.currentInputUnit === "Ounces") {
        let currentDiv =
            <Ounces
                handleCurrentOunceChange={props.handleCurrentOunceChange}
            />;
        return currentDiv;
    } else if (props.currentInputUnit === "Grams and Kilograms") {
        let currentDiv =
            <GramsAndKilos
                handleCurrentKiloChange={props.handleCurrentKiloChange}
                handleCurrentGramChange={props.handleCurrentGramChange}
            />;
        return currentDiv;
    } else if (props.currentInputUnit === "Ounces and Pounds") {
        let currentDiv =
            <OuncesAndPounds
                handleCurrentOunceChange={props.handleCurrentOunceChange}
                handleCurrentPoundChange={props.handleCurrentPoundChange}
            />;
        return currentDiv;
    } ;

    return (
        currentDiv
    )

}

export default UnitInputField;
