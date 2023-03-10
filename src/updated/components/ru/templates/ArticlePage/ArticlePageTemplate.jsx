import * as React from 'react'
import * as styles from './ArticlePageTemplate.module.css';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import { SiteImage } from '../../../common/ui';
import { BasicButton } from '../../../common/ui';
import PageLayout from '../../layouts/PageLayout/PageLayout';

export function ArticlePageTemplate({ article, content, path }) {
  React.useEffect(() => {
    localStorage.setItem('lang', 'ru');
  }, [])
  return (
    <PageLayout>

      <Helmet>
        <title>{article.headTitle} | Trafflab.com</title>
        <meta name='description' content={article.headDescription}/>
        <meta name='keywords' content={article.headKeywords}/>
        <link rel="canonical" href={`https://trafflab.com${path}`} />
      </Helmet>

      <div className={styles.main}>
        <div className={styles.article}>
          {article.notReadyMessage 
              ? <h1 className={styles.title}>{article.notReadyMessage}</h1>
              : <div className={styles.content}>
                  <div className={styles.imageContainer}><SiteImage alt={article.title} image={article.image} /></div>
                  <h1 className={styles.title}>{article.title}</h1>
                  <div className={styles.textContainer} dangerouslySetInnerHTML={{ __html: content }} />
                  <p className={styles.date}>{article.date}</p>
                </div>
          }
          <Link to={`/ru/blog`} className={styles.backLink}>
            <BasicButton text='К блогу' handler={() => null}/>
          </Link>
        </div>
      </div>

    </PageLayout>
  )
};

export default function ArticlePage({ data }) {
  return (
    <ArticlePageTemplate 
      article={data.markdownRemark.frontmatter}
      content={data.markdownRemark.html}
      path={data.markdownRemark.fields.slug}
    />
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        lang
        date(formatString: "DD.MM.YYYY")
        title
        headTitle
        headDescription
        headKeywords
        notReadyMessage
        image {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              webpOptions: {quality: 85}
              sizes: "(max-width: 480px) 1px, 1000000px"
              breakpoints: [480, 1008]
              layout: FULL_WIDTH
            )
          }
        }
      }
      fields {
        slug
      }
    }
  }
`