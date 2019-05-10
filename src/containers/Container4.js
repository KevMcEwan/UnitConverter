import React, { Component } from 'react';
import Component9 from '../components/screen4/Component9';
import Component10 from '../components/screen4/Component10';
import '../styles/container4.css';


class Container4 extends Component {

    render() {
        return (
            <div className="container4">
                <Component9 />
                <Component10 />
            </div>
        )
    }

}

export default Container4;