import React from 'react';
import styled from 'styled-components';
import variables from '../styles/variables';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


const FooterComponent = styled.footer`
  
  height: ${variables.height.footerHeight};
  bottom: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  color: ${variables.color.lightColor};
  font-weight: 600;
  text-shadow: .1px .1px .1px #032a3f;
  width: 100vw;
  
  &.sticky {
    position: fixed;
  }
  &.tape {
    background: ${variables.color.footerColor};
  }

  @media(max-width: 740px) {
    justify-content: center;
    span { width: 75%; font-size: 10px; }
    padding: 0 10px;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 100%;
  padding: 0 10px;

  @media(max-width: 740px) {
    width: 20%;
  }
`;

const Icon = styled.a`
  color: #fff;
  font-size: 22px;
  padding: 8px;
  &:hover {
    font-size: 25px;
  }
  @media(max-width: 740px) {
    padding: 4px;
    font-size: 15px; 
    padding-bottom: 8px;
  }
`;

const Copyright = styled.span`
  font-size: 12px;
`;

const Footer = () => (
  <FooterComponent className={ 'tape'}>
    <Copyright>© Witamy Świat {new Date().getFullYear()} All rights reserved.</Copyright>
    <Icons>
      <Icon href="https://www.facebook.com/witamyswiat/">
        <FontAwesomeIcon icon={ faFacebook } />
      </Icon>
      <Icon href="https://www.instagram.com/witamyswiat/">
        <FontAwesomeIcon icon={ faInstagram } />
      </Icon>
    </Icons>
  </FooterComponent>
);

export default Footer;