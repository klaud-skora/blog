import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import image from '../images/IMG_20200706_211108.jpg';
import SEO from '../components/seo';
import variables from '../styles/variables';

const Image = styled.div`
  width: 100vw;
  height: calc(100vh - ${variables.height.logoHeight});
  
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 0 27%;
  }
`;

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Witamy Świat - blog" keywords={[`travel`, `blog`, `travelblog`, `witamyświat`, `witamy`, `świat`]}/>
      <Image>
        <img src={image} alt="" />
      </Image>
    </Layout>
  </>
)

export default IndexPage;
