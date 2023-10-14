const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              lang
              customSlug
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const articles = result.data.allMarkdownRemark.edges
    articles.forEach((edge) => {
      if (edge.node.fields.slug !== '/') {

        if (edge.node.frontmatter.lang === 'ru') {
          createPage({
            // path: edge.node.fields.slug,
            path: "/ru/blog/"+edge.node.frontmatter.customSlug,
            component: require.resolve('./src/updated/components/ru/templates/article-page/article-page-template.jsx'),
            context: { slug: edge.node.fields.slug, },
            // context: { slug: "localhost:9000/ru/blog/"+edge.node.frontmatter.customSlug, },
          })
        } else {
          createPage({
            path: "/en/blog/"+edge.node.frontmatter.customSlug,
            component: require.resolve('./src/updated/components/en/templates/article-page/article-page-template.jsx'),
            context: { slug: edge.node.fields.slug, },
          })
        }

      } else {
        createPage({
          path: edge.node.fields.slug,
          component: require.resolve(`./src/updated/components/common/detect-lang-page-template.jsx`),
          context: { slug: edge.node.fields.slug, },
        })
      }
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    if (node.frontmatter.customSlug  === 'kak_lit_traffik_na_geo_meksika'){
      console.log(value)
    }
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
