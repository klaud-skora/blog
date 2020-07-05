const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)
const moment = require('moment')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {

    let slug, path

    const date = moment(node.frontmatter.date).format('YYYY/MM/DD')
    path = createFilePath({ node, getNode, basePath: `posts`})
    slug = `${path}`

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"
    // Update the page.
    createPage(page)
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              category
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      let template

      template = path.resolve(`./src/templates/blog-post.js`)

      createPage({
        path: node.fields.slug,
        component: template,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug
        },
      })
    })
  })
}
