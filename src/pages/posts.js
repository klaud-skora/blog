import React from 'react';
import { Link, graphql } from 'gatsby';
import Logo from '../components/logo.js';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import variables from '../styles/variables';

const AllPosts = styled.section`
  margin: 100px auto 40px;
  width: 80%;
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
`;

const Description = styled.div`
  margin-left: 20px;
  width: 45%;
`;

const Post = styled.article`
  padding: 20px;
  flex: 100%;
  width: 100%;
  display: flex;
  height: 260px;
  align-items: center;
`;

const DateDes = styled.p`
  margin: 0;
  fonst-size: .5rem;
  color: grey;
  text-align: right;
`;

const Posts = ({ data }) => (
  <>
    <Logo />
    <Layout>
      <SEO title="Travels" /> 
      <AllPosts>        
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <Link to={node.fields.slug}>
              <Post key={node.id} >
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