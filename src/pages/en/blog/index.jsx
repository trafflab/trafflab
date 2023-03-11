import React from "react";
import BlogPageTemplate from "../../../updated/components/en/templates/blog-page/blog-page-template";
import { SiteLayout } from "../../../updated/components/common"; 
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

export default function BlogPage({ data }) {

  return (
    <SiteLayout siteLang='en' pageTitle='Trafflab blog'>
      <Helmet>
        <meta name='description' content="Latest news, recommendations for traffic flows, manuals, insider information from private sources of affiliate marketing. Read the TraffLab blog and stay up to date with all market developments."/>
        <meta name='keywords' content="Trafflab, blog, affiliate marketing, ecosystem, traffic flows, news, manuals, private sources"/>
        <link rel="canonical" href="https://trafflab.com/en" />
        <link rel="alternate" hreflang="ru" href="https://trafflab.com/ru/blog" />
        <link rel="alternate" hreflang="en" href="https://trafflab.com/en/blog" />
        <link rel="alternate" hreflang="uk" href="https://trafflab.com/ua/blog" />
      </Helmet>
      <BlogPageTemplate blogData={data.allMarkdownRemark.edges} />
    </SiteLayout>
  ) 
};

export const query = graphql`
  query BlogPageEnQuery($lang: String = "en", $type: String = "article") {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {frontmatter: {lang: {eq: $lang}, type: {eq: $type}}}
      ) {
      edges {
        node {
          html
          frontmatter {
            lang
            type
            date(formatString: "DD.MM.YYYY")
            customSlug
            notReadyMessage
            title
            image {
              childImageSharp {
                gatsbyImageData(quality: 95, layout: CONSTRAINED)
              }
            }
            cardTitle
            cardText
            cardImage {
              childImageSharp {
                gatsbyImageData(quality: 95, layout: CONSTRAINED)
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`