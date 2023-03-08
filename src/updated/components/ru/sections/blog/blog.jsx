import * as React from "react"
import * as styles from './Blog.module.css';
import { SplideSlide } from '@splidejs/react-splide';
import { navigate } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

import { Is480Context } from "../../../../utils/contexts";
import { SectionContentLayout, SliderLayout } from "../../../common";
import { BasicButton } from "../../../common/ui";
import BlogCard from "../../../common/BlogCard/BlogCard";

export default function Blog({ openArticlePopupHandler }) {
  const is480 = React.useContext(Is480Context);
  const articlesData = useStaticQuery(graphql`
  query BlogRuQuery($lang: String = "ru", $type: String = "article") {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {frontmatter: {lang: {eq: $lang}, type: {eq: $type}}}
      limit:3
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
                gatsbyImageData(quality: 85, layout: CONSTRAINED)
              }
            }
            cardTitle
            cardText
            cardImage {
              childImageSharp {
                gatsbyImageData(quality: 85, layout: CONSTRAINED)
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
  `).allMarkdownRemark.edges
  return (
    <section id="blog" className={styles.blog}>
      <SectionContentLayout
        titleSecondPart='блог'
        text='Актуальные новости, рекомендации по заливу, мануалы, инсайдерская информация из закрытых источников аффилейт-маркетинга. Читай блог TraffLab и будь в курсе всех событий рынка.'
        textStyle={{width: '680rem'}}
        noMarginBottom={true}
      >
        {
          is480
            ? <div className={styles.listContainer}>
                <SliderLayout>
                  {
                    articlesData.map((articleData, index) => (
                      <SplideSlide key={index}><BlogCard openHandler={openArticlePopupHandler} data={articleData}/></SplideSlide>
                    ))
                  }
                </SliderLayout>
              </div>
            : <ul className={styles.list}>
                {
                  articlesData.map((articleData, index) => (
                    <li key={index}><BlogCard openHandler={openArticlePopupHandler} data={articleData}/></li>
                  ))
                }
              </ul>
        }
      </SectionContentLayout>
      <div className={styles.buttonContainer}>
          <BasicButton text='Больше статей!' handler={() => navigate('blog')}/>
      </div>
    </section>
  )
}