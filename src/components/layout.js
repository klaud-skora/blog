import React from 'react';
import Header from './header';
import Footer from './footer';
import MobileMenu from './mobile-menu';
import Logo from './logo';
import './layout.css';
import styled from 'styled-components';
import 'tachyons';

const Main = styled.main`
  min-height: calc(100vh - calc(20vh + 40px));
`;

const Layout = ({ children }) => (
  <>
    <Logo />
    <Header />
    <Main>
    <MobileMenu />
      {children}</Main>
    <Footer />
  </>
);

export default Layout;
