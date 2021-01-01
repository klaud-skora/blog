import styled from 'styled-components';
import variables from '../../../styles/variables';

export const AllPosts = styled.section`
  margin: 100px auto 40px;
  padding: 0 30px;
  max-width: 800px;
  @media (max-width: 740px) {
    margin-top: 30px; 
  }
`;
export const Post = styled.article`
  padding: 20px 0;
  flex: 100%;
  width: 100%;
  display: flex;
  height: 260px;
  align-items: center;
  @media (max-width: 740px) { height: 160px; position: relative; }
`;

export const ImageContainer = styled.div`
  width: 327px;
  height: 100%;
  
  img { 
    height: 100%;
    width: 100%;
    object-fit: cover;
    border: 1px solid ${variables.color.mainColor};
  }

  @media (max-width: 740px) {
    width: 100%;
  }

`;

export const Description = styled.div`
  margin-left: 20px;
  width: 50%;
  p { font-size: 12px; }
  @media (max-width: 740px) {
    * { color: ${variables.color.lightColor}; text-shadow: 2px 2px 2px ${variables.color.footerColor}; }
    position: absolute;
    width: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    h3 { font-size: 12px; }
    p { display: none; }
  }
`;


export const DateDes = styled.span`
  margin: 0;
  font-size: .7em;
  color: grey;
  display: block;
  text-align: right;
  @media (max-width: 740px) {
    font-size: 9px;
    color: ${variables.color.lightColor};
  }
`;