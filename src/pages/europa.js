import React, { useState } from 'react';
import Map from '../components/map.js';
import ReactTooltip from 'react-tooltip';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import image from '../images/IMG_20200706_211108.jpg';
import variables from '../styles/variables';

const EuropaComponent = styled.div`
  
  background: url(${image}) no-repeat center top/cover fixed;
  position: relative;
  top: 0;
  height: 100%;
  
  &::after {
    z-index: 0;
    content: '';
    position: absolute;
    top: ${variables.height.logoHeight};
    left: 0;
    width: 100%;
    min-height: calc(100% - ${variables.height.footerHeight} - ${variables.height.logoHeight});
    background: rgba(255, 255, 255, .4);
  }
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
          <Map setTooltipContent={setContent} />
          <ReactTooltip>{content}</ReactTooltip>
        </Root>
      </Layout>
    </EuropaComponent>
  </>;
}

export default Europa;
