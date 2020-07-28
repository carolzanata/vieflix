import React from 'react';
import { Link } from 'react-router-dom';
import logovieflix from '../../assets/img/logovieflix.png';
import './Menu.css';
import Button from '../Button';

function Menu () {
    return(
        <nav className = "Menu">
            <Link to="/">
            <img className= "logovieflix" src={logovieflix} alt="VieflixLogo"/>
        </Link>
        <Button as={Link} className= "ButtonLink" to="/cadastro/video">
            Novo vídeo
        </Button>
        </nav>
    );
}

export default Menu;