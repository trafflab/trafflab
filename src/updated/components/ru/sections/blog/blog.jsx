import * as React from "react"
import * as styles from './blog.module.css';
import { SplideSlide } from '@splidejs/react-splide';
import { navigate } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

import { SectionContentLayout, SliderLayout, BlogCard } from "../../../common";
import { BasicButton } from "../../../common/ui";
import { ArticlePopup } from "../../popups";
import { changeUrl } from "../../../../utils/utils";

const SliderOptions = {
  type: 'slide',
  gap: '30rem',
  pagination: false,
  autoWidth: true,
  snap: true,
  drag: false,
  breakpoints: {
    480: {
      gap: '20rem',
      drag: 'free',
    },
  }
}

export default function Blog() {
  
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
  `).allMarkdownRemark.edges;
  
  const [ articlePopupOpen, setArticlePopupOpen ] = React.useState(false);
  const [ articleData, setArticleData ] = React.useState({});

  const openArticlePopup = (articleData, slug) => {
    setArticleData(articleData)
    changeUrl(slug)
    setArticlePopupOpen(true);
  }  
  const closeArticlePopup = () => {
    setArticlePopupOpen(false);
    changeUrl(`/ru/`)
  }

  return (
    <section id="blog" className={styles.blog}>
      <SectionContentLayout
        titleSecondPart='блог'
        text='Актуальные новости, рекомендации по заливу, мануалы, инсайдерская информация из закрытых источников аффилейт-маркетинга. Читай блог TraffLab и будь в курсе всех событий рынка.'
        textStyle={{width: '680rem'}}
        noMarginBottom={true}
      >
        <div className={styles.listContainer}>
          <SliderLayout options={SliderOptions} isArrows={false}>
            {
              articlesData.map((articleData, index) => (
                <SplideSlide key={index}><BlogCard openHandler={openArticlePopup} data={articleData}/></SplideSlide>
              ))
            }
          </SliderLayout>
        </div>
      </SectionContentLayout>
      <div className={styles.buttonContainer}><BasicButton text='Больше статей!' handler={() => navigate('blog')}/></div>

      <ArticlePopup data={articleData} isOpen={articlePopupOpen} closeHandler={closeArticlePopup} />
    </section>
  )
}