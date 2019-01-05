const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode }) => {
//   if (node.internal.type === `MarkdownRemark`) {
//     // const fileNode = getNode(node.parent)
//     // console.log(`\n`, fileNode.relativePath)
//     console.log(createFilePath({ node, getNode, basePath: `pages` }))

//   }
// }
  

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
  

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark (sort: { order: ASC, fields: [frontmatter___date]}) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
).then(result => {
    const posts = result.data.allMarkdownRemark.edges
    posts.forEach(({ node }, index) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
            prev: index === 0 ? null : posts[index - 1].node,
            next: index === (posts.length - 1) ? null : posts[index + 1].node
          },
        })
      })
      resolve()
    })
  })
}