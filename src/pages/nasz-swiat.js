import React from "react"
import Logo from "../components/logo.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components';
import image from '../images/ws.jpeg';

const OurWorldContainer = styled.div`
  background-color: #EAEAEA;
  // padding: 60px 30px 0;
  text-align: justify;
  color: #032a3f;
`;

const About = styled.div`
  padding: 100px 60px 20px;
`;

const Image = styled.div`
  height: 700px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 0 27%;
  }
`;

const OurWorld = () => (
  <>
    <Logo />
    <Layout>
      <SEO title="Nasz Świat" />
      <OurWorldContainer>
        <About> 
          <h2>Cześć!</h2>
          <p>Jesteśmy Joachim i Klaudia. Podróże od zawsze były naszą pasją i nieodłączną częścią naszego życia. Każda wyprawa to dla nas wyjątkowa radość, którą chcemy się z wami podzielić. </p>
          <p>Na naszym blogu znajdziecie relacje z podróży, zdjęcia, porady, a także adresy miejsc, które warto zobaczyć, w których można się przespać, czy też te, w których można dobrze zjeść (a to lubimy najbardziej).</p>
          <p>K i J</p>
        </About>
        <Image>
          <img src={image} alt="" />
        </Image>
      </OurWorldContainer>
      
    </Layout>
  </>
)

export default OurWorld
