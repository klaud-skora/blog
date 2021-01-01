import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import image from '../images/us.jpeg';
import variables from '../styles/variables';

const OurWorldContainer = styled.div`
  padding-top: ${variables.height.headerHeight};
  height: 140vh;

  @media(max-width: 740px) {
    padding-top: 0;
  }
`;

const About = styled.div`
  max-width: 800px;
  padding: 0 30px;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 40px 0;
  h2, p { color: ${variables.color.lightColor}; text-shadow: 1px 1px .4px ${variables.color.footerColor}; font-weight: 800; }
  text-align: justify;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  
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
  background: url(${image}) no-repeat top center/cover fixed;
`;

const OurWorld = () => (
  <>
    <Layout>
      <SEO title="Nasz Świat" />
      <OurWorldContainer>
        <Image>
          <Wrapper> 
            <About>
              <h2>Cześć!</h2>
              <p>Jesteśmy Joachim i Klaudia. Podróże od zawsze były naszą pasją i nieodłączną częścią naszego życia. Każda wyprawa to dla nas wyjątkowa radość, którą chcemy się z wami podzielić. </p>
              <p>Na naszym blogu znajdziecie relacje z podróży, zdjęcia, porady, a także adresy miejsc, które warto zobaczyć, w których można się przespać, czy też te, w których można dobrze zjeść (a to lubimy najbardziej).</p>
              <p>K i J</p>
            </About>
          </Wrapper>
        </Image>
      </OurWorldContainer>
    </Layout>
  </>
)

export default OurWorld;
