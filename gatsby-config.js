require('dotenv').config({
	path: `.env`,
});
module.exports = {
	siteMetadata: {
		title: 'Trafflab',
		description: 'Trafflab',
		siteUrl: `https://trafflab.io`,
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-sitemap',
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
				resolveSiteUrl: () => 'https://trafflab.io',
				resolvePages: ({ allMarkdownRemark: { edges } }) => {
					const articlesUrl = edges.map(page => ({
						path: page.node.fields.slug,
						date: page.node.frontmatter.date,
					}));
					const baseUrls = [
						'/',
						'/ru/',
						'/en/',
						'/ru/blog/',
						'/en/blog/',
					];
					baseUrls.forEach(url => {
						articlesUrl.push({
							path: url,
							date: '2022-07-07T16:02:49.948Z',
						});
					});
					return articlesUrl;
				},
				serialize: ({ path, date }) => ({
					url: path,
					lastmod: date,
				}),
			},
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://trafflab.io',
				sitemap: 'https://trafflab.io/sitemap-0.xml',
			},
		},
		'gatsby-plugin-react-helmet',
		{
			// keep as first gatsby-source-filesystem plugin for gatsby image support
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/static/img`,
				name: 'uploads',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
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
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-autolink-headers`,
						options: {
							icon: false,
							maintainCase: true,
							elements: [`h2`],
						},
					},
					{
						resolve: 'gatsby-remark-relative-images',
						options: {
							name: 'uploads',
						},
					},
					{
						resolve: 'gatsby-remark-images',
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 2048,
						},
					},
					{
						resolve: 'gatsby-remark-copy-linked-files',
						options: {
							destinationDir: 'static',
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-facebook-pixel`,
			options: {
				pixelId: '286389130744907',
			},
		},
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				trackingIds: ['G-V57QB4EL5D'],
				pluginConfig: {
					send_page_view: true,
					head: true,
					respectDNT: false,
				},
			},
		},
		{
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
				modulePath: `${__dirname}/src/cms/cms.js`,
			},
		},
		'gatsby-plugin-netlify', // make sure to keep it last in the array
	],
};
