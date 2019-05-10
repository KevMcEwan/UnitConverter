import React from 'react';
import { Link } from "react-router-dom";
import '../../styles/navBar.css';

const navBar = () => {
    return (
        <div className="nav_bar">            
            <Link to="/" className="navbar_link">HOME</Link>
            <Link to="/cooking" className="navbar_link">COOKING</Link>
            <Link to="/screen2" className="navbar_link">SCREEN2</Link>
            <Link to="/screen3" className="navbar_link">SCREEN3</Link>
            <Link to="/screen4" className="navbar_link">SCREEN4</Link>
        </div>
    )
}

export default navBar;