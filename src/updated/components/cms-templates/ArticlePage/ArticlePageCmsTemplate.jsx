import * as React from 'react'
import * as styles from './ArticlePageCmsTemplate.module.css';
import { Link } from 'gatsby';
import { CmsImage, BasicButton } from '../../common/ui';
import PageLayout from '../../ru/layouts/PageLayout/PageLayout';

export default function ArticlePageCmsTemplate({ article, content }) {

  return (
    <PageLayout>
      <div className={styles.main}>
        <div className={styles.article}>
          {article.notReadyMessage 
              ? <h1 className={styles.title}>{article.notReadyMessage}</h1>
              : <div className={styles.content}>
                  <div className={styles.imageContainer}><CmsImage alt={article.title} image={article.image} /></div>
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