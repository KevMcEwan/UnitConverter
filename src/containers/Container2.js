import React, { Component } from 'react';
import DegCAndDegFConverter from '../components/temperature/degCAndDegFConverter';
import '../styles/container2.css';
import ACTIONS from "../modules/action";
import { connect } from "react-redux";

class Container2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            units: [
                "Celsius",
                "Fahrenheit",
            ],
            currentInputUnit: "",
            currentInputNumber: ""
        };
        this.handleInputUnitChange = this.handleInputUnitChange.bind(this);
        this.handleCurrentNumberChange = this.handleCurrentNumberChange.bind(this);
    };

    handleInputUnitChange(inputUnit) {
        this.setState({ currentInputUnit: inputUnit });
    }

    handleCurrentNumberChange(inputNumber) {
        this.setState({ currentInputNumber: inputNumber });
    }

    render() {
        return (
            <div className="container1">
                <DegCAndDegFConverter
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

export default Container2;