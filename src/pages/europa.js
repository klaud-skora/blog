import React, { useState } from 'react';
import Map from '../components/map.js';
import ReactTooltip from "react-tooltip";
import Logo from "../components/logo.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components';

const Root = styled.div`
  margin: 60px 0 10px;
  display: flex;
  justify-content: flex-end;
`;

const Europa = () => {
  const [content, setContent] = useState("");
  return <>
    <Logo />
    <Layout>
      <SEO title="Nasz Świat" />
      <Root>
        <Map setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </Root>
    </Layout>
  </>;
}

export default Europa
