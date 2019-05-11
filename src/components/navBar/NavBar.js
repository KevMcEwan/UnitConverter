import React from 'react';
import { Link } from "react-router-dom";
import '../../styles/navBar.css';

const navBar = () => {
    return (
        <div className="nav_bar">            
            <Link to="/" className="navbar_link">HOME</Link>
            <Link to="/weights" className="navbar_link">WEIGHTS</Link>
            <Link to="/temperature" className="navbar_link">TEMPERATURE</Link>
        </div>
    )
}

export default navBar;