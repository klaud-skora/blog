import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import image from '../images/ws.jpeg'
import SEO from "../components/seo"

const Image = styled.div`
  width: 100vw;
  height: 100vh;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Witamy Świat - blog" keywords={[`travel`, `blog`, `travelblog`, `witamyświat`, `witamy`, `świat`]}/>
    <Image>
      <img src={image} alt="" />
    </Image>
  </Layout>
)

export default IndexPage
