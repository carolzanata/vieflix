import React from 'react';
import { Link } from 'react-router-dom';
import LOGOCQ from '../../assets/img/LOGOCQ.png';
import './Menu.css';


function Menu () {
    return(
        <nav className = "Menu">
            <Link to="/">
            <img className= "logovieflix" src={LOGOCQ} alt="VieflixLogo"/>
        </Link>
         
        </nav>
    );
}

export default Menu;