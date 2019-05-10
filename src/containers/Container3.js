import React, { Component } from 'react';
import Component7 from '../components/screen3/Component7';
import Component8 from '../components/screen3/Component8';
import '../styles/container3.css';


class Container3 extends Component {

    render() {
        return (
            <div className="container3">
                <Component7 />
                <Component8 />
            </div>
        )
    }

}

export default Container3;