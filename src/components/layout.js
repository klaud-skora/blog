import React from 'react';
import Header from "./header"
import Footer from './footer'
import "./layout.css"
import styled from 'styled-components'

const Main = styled.main`
  min-height: calc(100vh - calc(20vh + 40px));
`;

const Layout = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);


export default Layout
