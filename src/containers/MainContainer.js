import React, { Component } from 'react';
import NavBar from '../components/navBar/NavBar';
import Container1 from './Container1';
import Container2 from './Container2';
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
                    <Route path="/weights"
                        render={() =>
                            <Container1 />
                        }
                    />
                    <Route path="/temperature"
                        render={() =>
                            <Container2 />
                        }
                    />
                </div>
            </Router>
        )
    }
}

export default MainContainer;