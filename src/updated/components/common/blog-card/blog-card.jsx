import * as React from "react"
import * as styles from './blog-card.module.css';
import { SiteImage } from "../ui";

export default function BlogCard({ openHandler = () => false, data }) {
  const article = data.node.frontmatter

  const handleOpenPopup = () => openHandler(
    {
      image: article.image,
      title: article.title,
      text: data.node.html,
      notReadyMessage: article.notReadyMessage,
      date: article.date
    },
    `/${article.lang}/blog/`+article.customSlug,
  )
  return (
    <article className={styles.card}>
      <button onClick={handleOpenPopup} className={styles.button} type='button' >

        <div className={styles.imageContainer}><SiteImage image={article.cardImage}/></div>
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