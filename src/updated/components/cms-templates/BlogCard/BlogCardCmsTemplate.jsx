import * as React from "react"
import * as styles from './BlogCardCmsTemplate.module.css';
import { CmsImage } from "../../common/ui";

export default function BlogCardCmsTemplate({ data: article } ) {

  return (
    <article className={styles.card}>
      <button className={styles.button} type='button' >

        <div className={styles.imageContainer}><CmsImage image={article.cardImage}/></div>
        <div className={styles.textContainer}>
          <div className={styles.about}>
            <h3 className={styles.title}>{article.cardTitle}</h3>
            <p className={styles.text}>{article.cardText}</p>
          </div>
        </div>
      </button>
    </article>
  )
}