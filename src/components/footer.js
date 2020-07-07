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
  font-size: 12px;
  font-weight: 600;
  text-shadow: .1px .1px .1px #032a3f;
  width: 100vw;
  
  &.sticky {
    position: fixed;
  }
  &.tape {
    background: ${variables.color.footerColor};
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100px;
  padding: 0 4px;;
`;

const Icon = styled.a`
  color: #fff;
  font-size: 22px;

  &:hover {
    font-size: 25px;
  }
`;

const Copyright = styled.span`
  font-size: 10px;
`;

const Footer = () => (
  <FooterComponent className={window.location.pathname === '/' ? 'sticky' : 'tape'}>
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