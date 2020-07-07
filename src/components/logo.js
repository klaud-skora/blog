import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import logo from '../images/logo.svg';
import variables from '../styles/variables';

const LogoComponent = styled.div`
  text-align: center;
  height: ${variables.height.logoHeight};
  padding-top: 24px;
  img { height: 80%; }
`;

const Logo = () => (
  <LogoComponent>
    <Link to='/'><img src={logo} alt="" /></Link>
  </LogoComponent>
);

export default Logo;