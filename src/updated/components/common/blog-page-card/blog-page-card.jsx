import * as React from "react"
import * as styles from './blog-page-card.module.css';
import { Link } from "gatsby";
import { SiteImage } from "../ui";

export default function BlogPageCard({ url, data }) {

  return (
    <article className={styles.card}>
      <Link to={url} className={styles.linkTo} >

        <div className={styles.imageContainer}><SiteImage image={data.cardImage}/></div>
        <div className={styles.textContainer}>
          <div className={styles.about}>
            <h3 className={styles.title}>{data.cardTitle}</h3>
            <p className={styles.text}>{data.cardText}</p>
          </div>
        </div>

      </Link>
    </article>
  )
}