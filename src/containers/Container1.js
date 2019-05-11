import React, { Component } from 'react';
import CupWeights from '../components/weights/CupWeights';
import OzAndGramsConverter from '../components/weights/OzAndGramsConverter';
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
             units :[
                 "Ounces",
                 "Grams",
             ],
             currentIngredient: "",
             currentCupMeasurement: "",
             currentInputUnit: "",
             currentInputNumber: ""
        };
        this.handleCurrentIngredientChange = this.handleCurrentIngredientChange.bind(this);
        this.handleCurrentCupMeasurementChange = this.handleCurrentCupMeasurementChange.bind(this);
        this.handleInputUnitChange = this.handleInputUnitChange.bind(this);
        this.handleCurrentNumberChange = this.handleCurrentNumberChange.bind(this);
    };

    handleCurrentIngredientChange(ingredient){
        this.setState({currentIngredient: ingredient});
    }

    handleCurrentCupMeasurementChange(cupMeasurement){
        this.setState({currentCupMeasurement: cupMeasurement});
    }

    handleInputUnitChange(inputUnit){
        this.setState({currentInputUnit: inputUnit});
    }

    handleCurrentNumberChange(inputNumber) {
        this.setState({currentInputNumber: inputNumber});
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
                <OzAndGramsConverter 
                units={this.state.units}
                currentInputUnit={this.state.currentInputUnit}
                currentInputNumber={this.state.currentInputNumber}
                handleInputUnitChange={this.handleInputUnitChange} 
                handleCurrentNumberChange={this.handleCurrentNumberChange}
                />
            </div>
        )
    }

}

export default Container1;