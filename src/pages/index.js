import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import image from '../images/IMG_20200706_211108.jpg'
import Logo from '../components/logo'
import SEO from "../components/seo"

const Image = styled.div`
  width: 100vw;
  height: calc(100vh - 20vh);
  
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 0 27%;
  }
`;

const IndexPage = () => (
  <>
    <Logo />
    <Layout>
      <SEO title="Witamy Świat - blog" keywords={[`travel`, `blog`, `travelblog`, `witamyświat`, `witamy`, `świat`]}/>
      <Image>
        <img src={image} alt="" />
      </Image>
    </Layout>
  </>
)

export default IndexPage
