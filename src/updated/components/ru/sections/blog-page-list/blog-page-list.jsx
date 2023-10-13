import * as React from "react"
import * as styles from './blog-page-list.module.css';
import { BlogPageCard } from "../../../common";

export default function BlogPageList({ articlesData }) {
  return (
    <section className={styles.blogPageList}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Блог</h2>
        <p className={styles.about}>Актуальные новости, рекомендации по заливу, мануалы, инсайдерская информация из закрытых источников аффилейт-маркетинга. Читай блог TraffLab и будь в курсе всех событий рынка.</p>
      </div>
      <ul className={styles.list}>
        {
          articlesData.map((articleData, index) => (
            <li key={index}>
              <BlogPageCard url={"/ru/blog/"+articleData.node.frontmatter.customSlug} data={articleData.node.frontmatter} />
            </li>
          ))
        }
      </ul>
    </section>
  )
}