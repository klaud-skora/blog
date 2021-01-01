import React, { useState } from 'react';
import Map from '../components/map.js';
// import ReactTooltip from 'react-tooltip';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import image from '../images/main.jpg';
import variables from '../styles/variables';

// var ReactTooltip = require('rc-tooltip');
const EuropaComponent = styled.div`
  
  background: url(${image}) no-repeat center top/cover fixed;
  position: relative;
  top: 0;
  max-height: 990px;
  
  &::after {
    z-index: 0;
    content: '';
    position: absolute;
    top: ${variables.height.logoHeight};
    left: 0;
    right: 0;
    height: calc(100% - ${variables.height.footerHeight} - ${variables.height.logoHeight} + 7px);
    /* bottom: ${variables.height.footerHeight}; */
    background: rgba(255, 255, 255, .4);
  }
`;

const Text = styled.p`
  font-weight: 700;
  display: inline;
  font-size: 15px;
  position: absolute;
  z-index: 999;
  bottom: ${variables.height.footerHeight};
  left: 80px;
  text-align: justify;
  text-shadow: .3px .1px .1px #fff;
  max-width: 800px;
  padding: 4px;
  
  @media(max-width: 740px) {
    bottom: 110px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;
const Root = styled.div`
  min-height: 100vh;
  padding-top: ${variables.height.headerHeight};
  display: flex;
  justify-content: flex-end;
  
  @media(max-width: 740px) {
    padding-top: 0;
  }
`;

const Europa = () => {
  const [content, setContent] = useState("");
  return <>
    <EuropaComponent>
      <Layout>
        <SEO title='Nasz Świat' />
        <Root>
          <Map  />
          {/* <ReactTooltip>{content}</ReactTooltip> */}
        </Root>
        <Wrapper>
          <Text>
            Na mapce powyżej zaznaczyliśmy kraje, które od początku isnienia bloga udało nam się odwiedzić :). Mamy nadzieję, że mapa ta będzie się stopniowo wypełniać, ponieważ pod oznaczonymi państwami kryją się posty z ciekawostkami i poradami, a dla nas wspaniałymi wspomnieniami.
          </Text>
          </Wrapper>
      </Layout>
    </EuropaComponent>
  </>;
}

export default Europa;
