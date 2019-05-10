import React, { Component } from 'react';
import Component5 from '../components/screen2/Component5';
import Component6 from '../components/screen2/Component6';
import '../styles/container2.css';


class Container2 extends Component {

    render() {
        return (
            <div className="container2">
                <Component5 />
                <Component6 />
            </div>
        )
    }

}

export default Container2;