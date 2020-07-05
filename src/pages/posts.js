import React from "react"
import { Link, graphql } from 'gatsby'
import Logo from "../components/logo.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const AllPosts = styled.section`
  margin-top: 100px;
  padding: 40px 50px;
`;

const ImageContainer = styled.div`
  width: 327px;
  height: 100%;
  
  img { 
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
    border: 1px solid #032a3f;
  }
`;

const Description = styled.div`
  margin-left: 40px;
  width: 45%;
`;

const Post = styled.div`
  display: flex;
  height: 200px;
  align-items: center;
  border: 1px solid blue;
`;

const DateDes = styled.span`
  fonst-size: .5rem;
  color: grey;
  margin: 0 0px 0 auto;
`;

const Posts = ({ data }) => (
  <>
    <Logo />
    <Layout>
      <SEO title="Travels" /> 
      <AllPosts>        
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article key={node.id} >
            <Link to={node.fields.slug}>
            <Post>
              <ImageContainer>
                <img
                  alt='Blog post cover'
                  src={node.frontmatter.cover.publicURL}
                />
              </ImageContainer>
              <Description>
                <h3 className="f3 mt0 lh-title">{node.frontmatter.title}</h3>
                <p className="f6 f5-l lh-copy">{node.frontmatter.intro}</p>
                <DateDes className="f6 lh-copy mv0 light-purple">{node.frontmatter.date}</DateDes>
              </Description>
            </Post>
          </Link>
          </article>
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