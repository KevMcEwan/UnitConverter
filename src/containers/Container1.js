import React, { Component } from 'react';
import Component1 from '../components/cooking/Component1';
import Component3 from '../components/cooking/Component3';
import Component4 from '../components/cooking/Component4';
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
             measurements: [
                 "1/8",
                 "1/4",
                 "1/3",
                 "1/2",
                 "1"
             ],
             currentIngredient: "",
             currentMeasurement: ""
        };
        this.handleCurrentIngredientChange = this.handleCurrentIngredientChange.bind(this);
        this.handleCurrentMeasurementChange = this.handleCurrentMeasurementChange.bind(this);
    };

    handleCurrentIngredientChange(ingredient){
        this.setState({currentIngredient: ingredient});
    }

    handleCurrentMeasurementChange(measurement){
        this.setState({currentMeasurement: measurement});
    }

    render() {
        return (
            <div className="container1">
                <Component1 
                ingredients={this.state.ingredients}
                measurements={this.state.measurements}
                currentIngredient={this.state.currentIngredient}
                currentMeasurement={this.state.currentMeasurement}
                handleCurrentIngredientChange={this.handleCurrentIngredientChange}
                handleCurrentMeasurementChange={this.handleCurrentMeasurementChange}
                />
                <Component3 />
                <Component4 />
            </div>
        )
    }

}

export default Container1;