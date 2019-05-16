import React, { Component } from 'react';
import CupWeights from '../components/weights/CupWeights';
import MetricAndImperialConverter from '../components/weights/MetricAndImperialConverter';
import '../styles/container1.css';

class Container1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: [
                "Flour",
                "Rice (Uncooked)",
                "Oats",
                "Sugar (Granulated)",
                "Sugar (Caster)",
                "Sugar (Icing)",
                "Butter",
                "Milk"
            ],
            cupMeasurements: [
                "1/8",
                "1/4",
                "1/3",
                "1/2",
                "3/4",
                "1",
                "2",
                "3",
                "4"
            ],
            units: [
                "Ounces",
                "Ounces and Pounds",
                "Grams",
                "Grams and Kilograms"
            ],
            currentIngredient: "",
            currentCupMeasurement: "",
            currentInputUnit: "",
            currentKiloValue: "",
            currentGramValue: "",
            currentPoundValue: "",
            currentOunceValue: "",
            currentOutputUnit: ""
        };

        this.handleCurrentIngredientChange = this.handleCurrentIngredientChange.bind(this);
        this.handleCurrentCupMeasurementChange = this.handleCurrentCupMeasurementChange.bind(this);
        this.handleInputUnitChange = this.handleInputUnitChange.bind(this);
        this.handleOutputUnitChange = this.handleOutputUnitChange.bind(this);
        this.handleCurrentKiloChange = this.handleCurrentKiloChange.bind(this);
        this.handleCurrentGramChange = this.handleCurrentGramChange.bind(this);
        this.handleCurrentPoundChange = this.handleCurrentPoundChange.bind(this);
        this.handleCurrentOunceChange = this.handleCurrentOunceChange.bind(this);
    };

    handleCurrentIngredientChange(ingredient) {
        this.setState({ currentIngredient: ingredient });
    }

    handleCurrentCupMeasurementChange(cupMeasurement) {
        this.setState({ currentCupMeasurement: cupMeasurement });
    }

    handleInputUnitChange(inputUnit) {
        this.setState({ currentInputUnit: inputUnit });
    }

    handleOutputUnitChange(outputUnit) {
        this.setState({ currentOutputUnit: outputUnit });
    }

    handleCurrentKiloChange(kiloValue) {
        this.setState({ currentKiloValue: kiloValue });
    }

    handleCurrentGramChange(gramValue) {
        this.setState({ currentGramValue: gramValue });
    }

    handleCurrentPoundChange(poundValue) {
        this.setState({ currentPoundValue: poundValue });
    }

    handleCurrentOunceChange(ounceValue) {
        this.setState({ currentOunceValue: ounceValue });
    }

    render() {
        return (
            <div className="container1">
                <CupWeights
                    ingredients={this.state.ingredients}
                    cupMeasurements={this.state.cupMeasurements}
                    currentIngredient={this.state.currentIngredient}
                    currentCupMeasurement={this.state.currentCupMeasurement}
                    handleCurrentIngredientChange={this.handleCurrentIngredientChange}
                    handleCurrentCupMeasurementChange={this.handleCurrentCupMeasurementChange}
                />
                <MetricAndImperialConverter
                    units={this.state.units}
                    currentInputUnit={this.state.currentInputUnit}
                    currentOutputUnit={this.state.currentOutputUnit}
                    currentKiloValue={this.state.currentKiloValue}
                    currentGramValue={this.state.currentGramValue}
                    currentPoundValue={this.state.currentPoundValue}
                    currentOunceValue={this.state.currentOunceValue}
                    handleCurrentKiloChange={this.handleCurrentKiloChange}
                    handleCurrentGramChange={this.handleCurrentGramChange}
                    handleCurrentOunceChange={this.handleCurrentOunceChange}
                    handleCurrentPoundChange={this.handleCurrentPoundChange}
                    handleInputUnitChange={this.handleInputUnitChange}
                    handleOutputUnitChange={this.handleOutputUnitChange}
                />
            </div>
        )
    }

}

export default Container1;