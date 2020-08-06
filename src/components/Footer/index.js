import React from 'react';
import { FooterBase } from './styles';
import logofinal from '../../assets/img/logofinal.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://classquest.com.br/">
        <img src={logofinal} alt = "logofinal" />
      </a>
      <p>
        
        {' '}
        <a href="https://classquest.com.br/">
          Nos conheça melhor!
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
