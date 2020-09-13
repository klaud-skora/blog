import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import './blog-post.scss';

export default ({ data }) => {
  const post = data.markdownRemark;
  console.log(post)

  return (
    <>
      <Layout>
        <SEO
          title={post.frontmatter.title}
          keywords={post.frontmatter.tags}
          description={post.frontmatter.intro}
          cover={post.frontmatter.cover.publicURL}
        />
        <article className="post-article">
          <h1 className="title">{post.frontmatter.title}</h1>
          <div className="content" dangerouslySetInnerHTML={{ __html: post.html }} />
          {/* <img src={post.frontmatter.sideIMG.publicURL} alt="" /> */}
        </article>
      </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title,
        intro,
        tags,
        date,
        cover {
          publicURL
          childImageSharp {
            sizes(maxWidth: 930 ) {
              srcSet, aspectRatio, src, sizes
            }
          }
        }
        sideIMG {
          publicURL
          childImageSharp {
            sizes(maxWidth: 930 ) {
              srcSet, aspectRatio, src, sizes
            }
          }
        }
      }
    }
  }
`