import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import { AllPosts, Post, ImageContainer, Description, DateDes } from '../components/Styled/ListPost';

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