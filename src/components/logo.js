import React from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'
import logo from '../images/logo.svg'

const LogoComponent = styled.div`
  text-align: center;
  height: 20vh;
  padding-top: 14px;
  img { height: 80%; }
`;

const Logo = () => (
  <LogoComponent>
    <Link to='/'><img src={logo} alt="" /></Link>
  </LogoComponent>
);

export default Logo