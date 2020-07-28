import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.roboticavietech.com.br/">
        <img src="https://static.wixstatic.com/media/76fd12_2fe258e06fb24778b53743a86ab494c8~mv2.png/v1/fill/w_301,h_258,al_c,q_85,usm_0.66_1.00_0.01/logo.webp" alt="Logo VieTech" />
      </a>
      <p>
        
        {' '}
        <a href="https://www.roboticavietech.com.br/">
          Nos conheça melhor!
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
