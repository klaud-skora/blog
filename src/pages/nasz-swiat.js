import React from "react"
import Logo from "../components/logo.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components';
import image from '../images/ws.jpeg';

const OurWorldContainer = styled.div`
  padding-top: 60px;
  height: 200vh;

`;

const About = styled.div`
  width: 100%;
  padding: 40px;
  h2, p { color: #fff; text-shadow: 1px 1px 4px #000}
  text-align: justify;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #222;
    opacity: .3;
  }
`;

const Image = styled.div`
  height: 100%;
  position: relative;
  background: url(${image}) no-repeat top right/cover fixed;
`;

const OurWorld = () => (
  <>
    <Logo />
    <Layout>
      <SEO title="Nasz Świat" />
      <OurWorldContainer>
        <Image>
          <About> 
            <h2>Cześć!</h2>
            <p>Jesteśmy Joachim i Klaudia. Podróże od zawsze były naszą pasją i nieodłączną częścią naszego życia. Każda wyprawa to dla nas wyjątkowa radość, którą chcemy się z wami podzielić. </p>
            <p>Na naszym blogu znajdziecie relacje z podróży, zdjęcia, porady, a także adresy miejsc, które warto zobaczyć, w których można się przespać, czy też te, w których można dobrze zjeść (a to lubimy najbardziej).</p>
            <p>K i J</p>
          </About>
        </Image>
       
        
      </OurWorldContainer>
      
    </Layout>
  </>
)

export default OurWorld
