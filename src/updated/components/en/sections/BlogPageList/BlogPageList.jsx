import * as React from "react"
import * as styles from './BlogPageList.module.css';
import BlogPageCard from "../../../common/BlogPageCard/BlogPageCard";

export default function BlogPageList({ articlesData }) {
  return (
    <section className={styles.blogPageList}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Blog</h2>
        <p className={styles.about}>Latest news, recommendations for traffic flows, manuals, insider information from private sources of affiliate marketing. Read the TraffLab blog and stay up to date with all market developments.</p>
      </div>
      <ul className={styles.list}>
        {
          articlesData.map((articleData, index) => (
            <li key={index} className={styles.listElement}>
              <BlogPageCard url={articleData.node.fields.slug} data={articleData.node.frontmatter} />
            </li>
          ))
        }
      </ul>
    </section>
  )
}