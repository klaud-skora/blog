import React from "react"
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


const FooterComponent = styled.footer`
  height: 60px;
  bottom: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  z-index: 100;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  text-shadow: .1px .1px .1px #032a3f;
  width: 100vw;
  &.sticky {
    position: fixed;
  }
  &.tape {
    background: #032a3f;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100px;
  padding: 0 10px;;
`;

const Icon = styled.a`
  color: #fff;
  font-size: 22px;

  &:hover {
    font-size: 25px;
  }
`;

const Footer = () => (
  <FooterComponent className={window.location.pathname === '/' ? 'sticky' : 'tape'}>
    Copyright © Witamy Świat {new Date().getFullYear()} All rights reserved.
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

export default Footer