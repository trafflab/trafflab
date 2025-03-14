import React from "react";
import BlogPageTemplate from "../../../updated/components/ru/templates/blog-page/blog-page-template";
import { SiteLayout } from "../../../updated/components/common"; 
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

export default function BlogPage({ data }) {

  return (
    <SiteLayout siteLang='ru' pageTitle='Trafflab blog'>
      <Helmet>
        <meta name='description' content="Актуальные новости, рекомендации по заливу, мануалы, инсайдерская информация из закрытых источников аффилейт-маркетинга. Читай блог TraffLab и будь в курсе всех событий рынка"/>
        <meta name='keywords' content="Trafflab, арбитраж, ecosystem, аффилейт-маркетинг, новости, мануалы, инсайдерская информация, рекомендации, блог"/>
        <link rel="canonical" href="https://trafflab.io/ru" />
        <link rel="alternate" hreflang="ru" href="https://trafflab.io/ru/blog" />
        <link rel="alternate" hreflang="en" href="https://trafflab.io/en/blog" />
        <link rel="alternate" hreflang="uk" href="https://trafflab.io/ua/blog" />
      </Helmet>
      <BlogPageTemplate blogData={data.allMarkdownRemark.edges} />
    </SiteLayout>
  ) 
};

export const query = graphql`
  query BlogPageRuQuery($lang: String = "ru", $type: String = "article") {
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