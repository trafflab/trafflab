require("dotenv").config({
  path: `.env`,
})
module.exports = {
  siteMetadata: {
    title: "Trafflab",
    description: "Trafflab",
    siteUrl: `https://trafflab.com`
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  date
                }
              }
            }
          }
        }
        `,
        output: '/',
        resolveSiteUrl: () => 'https://trafflab.com',
        resolvePages: ({ allMarkdownRemark: { edges } }) => {
          const articlesUrl = edges.map((page) => ({
            path: page.node.fields.slug,
            date: page.node.frontmatter.date
          }))
          const baseUrls = [
            "/",
            "/ru/",
            "/en/",
            "/ru/blog/",
            "/en/blog/",
          ]
          baseUrls.forEach(url => {
            articlesUrl.push({
              path: url,
              date: "2022-07-07T16:02:49.948Z",
            })
          })
          return articlesUrl
        },
        serialize: ({path, date}) => ({
          url: path,
          lastmod: date
        })
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://trafflab.com',
        sitemap: 'https://trafflab.com/sitemap-0.xml',
      }
    },
    "gatsby-plugin-react-helmet",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     path: `${__dirname}/src/images`,
    //     name: "images",
    //   },
    // },
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              // offsetY: `100`,
              // icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              // className: `custom-class`,
              // maintainCase: true,
              // removeAccents: true,
              // isIconAfterHeader: true,
              icon: false,
              maintainCase: true,
              elements: [`h2`],
            },
          },
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-6TR3D406KP",
        ],
        pluginConfig: {
          head: true,
          respectDNT: false,
        },
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
