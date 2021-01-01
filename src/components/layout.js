import React from 'react';
import Header from './header';
import Footer from './footer';
import MobileMenu from './mobile-menu';
import Logo from './logo';
import './layout.css';
import styled from 'styled-components';

const Main = styled.main`
  min-height: calc(100vh - calc(20vh + 40px));
  /* padding: 0 30px;
  max-width: 800px;
  margin: 0 auto; */
`;

const Layout = ({ children }) => (
  <>
    <Logo />
    <Header />
    <Main>
      <MobileMenu />
      {children}
    </Main>
    <Footer />
  </>
);

export default Layout;
