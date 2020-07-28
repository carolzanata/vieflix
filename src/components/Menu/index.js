import React from 'react';
import logovieflix from '../../assets/img/logovieflix.png';
import './Menu.css';
import Button from '../Button';

function Menu () {
    return(
        <nav className = "Menu">
            <a href="/">
            <img className= "logovieflix" src={logovieflix} alt="VieflixLogo"/>
        </a>
        <Button as="a" className= "ButtonLink" href="/">
            Novo vídeo
        </Button>
        </nav>
    );
}

export default Menu;