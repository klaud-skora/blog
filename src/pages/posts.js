import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import variables from '../styles/variables';

const AllPosts = styled.section`
  margin: 100px auto 40px;
  width: 80%;
  @media (max-width: 740px) {
    margin-top: 30px; 
  }
`;
const Post = styled.article`
  padding: 20px;
  flex: 100%;
  width: 100%;
  display: flex;
  height: 260px;
  align-items: center;
  @media (max-width: 740px) { height: 160px; position: relative; }
`;

const ImageContainer = styled.div`
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

const Description = styled.div`
  margin-left: 20px;
  width: 45%;
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


const DateDes = styled.span`
  margin: 0;
  font-size: .5em;
  color: grey;
  display: block;
  text-align: right;
  @media (max-width: 740px) {
    font-size: 9px;
    color: ${variables.color.lightColor};
  }
`;

const Posts = ({ data }) => (
  <> 
    <Layout>
      <SEO title="Travels" /> 
      <AllPosts>        
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <Link key={node.id} to={node.fields.slug}>
              <Post>
                <ImageContainer>
                  <img
                    alt='Blog post cover'
                    src={node.frontmatter.cover.publicURL}
                  />
                </ImageContainer>
                <Description>
                  <h3>{node.frontmatter.title}</h3>
                  <p>{node.frontmatter.intro}</p>
                  <DateDes>{node.frontmatter.date}</DateDes>
                </Description>
              </Post>
            </Link>
        ))}
      </AllPosts>
    </Layout>
  </>
);

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            intro
            date(locale: "pl", formatString: "LL")
            cover {
              publicURL
              childImageSharp {
                fixed(width: 327, height: 167, quality: 80) {
                  srcSet, aspectRatio, src
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default Posts