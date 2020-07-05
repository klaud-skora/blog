import React from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'
import logo from '../images/logo.svg'

const LogoComponent = styled.div`
  height: 20vh;
  text-align: center;

  img { height: 100% }
`;

const Logo = () => (
  <LogoComponent>
    <Link to='/'><img src={logo} alt="" /></Link>
  </LogoComponent>
);

export default Logo