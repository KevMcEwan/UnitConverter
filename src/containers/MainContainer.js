import React, { Component } from 'react';
import NavBar from '../components/navBar/NavBar';
import Container1 from './Container1';
import Container2 from './Container2';
import Container3 from './Container3';
import Container4 from './Container4';
import HomePage from '../components/homepage/HomePage';
import { BrowserRouter as Router, Route } from "react-router-dom";

class MainContainer extends Component {

    render() {
        return (
            <Router>
                <div className="main_container">
                    <NavBar />
                    <Route exact path="/"
                        render={() =>
                            <HomePage />
                        }
                    />
                    <Route path="/screen1"
                        render={() =>
                            <Container1 />
                        }
                    />
                    <Route path="/screen2"
                        render={() =>
                            <Container2 />
                        }
                    />
                    <Route path="/screen3"
                        render={() =>
                            <Container3 />
                        }
                    />
                    <Route path="/screen4"
                        render={() =>
                            <Container4 />
                        }
                    />
                </div>
            </Router>
        )
    }
}

export default MainContainer;