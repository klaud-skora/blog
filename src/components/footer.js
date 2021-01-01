import React from 'react';
import styled from 'styled-components';
import variables from '../styles/variables';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Content = styled.footer`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  padding: 0 30px;
  align-items: center;
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FooterComponent = styled.footer`
  height: ${variables.height.footerHeight};
  bottom: 0;
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
  padding: 0 0 0 30px;

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
  .fa {
    width: 200px;
    height: 200px;
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
  <FooterComponent className={ typeof window !== 'undefined' && window.location.pathname === '/' ? 'sticky' : 'tape'}>
    <Content>
      <Copyright>© Witamy Świat {new Date().getFullYear()} All rights reserved.</Copyright>
      <Icons>
        <Icon target="_blank" href="https://www.facebook.com/witamyswiat/">
          <FontAwesomeIcon size='.100x' icon={ faFacebook } />
        </Icon>
        <Icon target="_blank" href="https://www.instagram.com/witamyswiat/">
          <FontAwesomeIcon icon={ faInstagram } />
        </Icon>
        {/* <Link to='/'><img src={facebook} alt="" /></Link>
        <Link to='/'><img src={instagram} alt="" /></Link> */}
      </Icons>
    </Content>
  </FooterComponent>
);

export default Footer;