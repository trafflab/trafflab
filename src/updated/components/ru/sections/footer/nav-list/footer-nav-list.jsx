import * as React from "react"
import * as styles from './footer-nav-list.module.css';
import { Link } from "gatsby";

export default function FooterNavList({ linkPrefix }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li><a href={`${linkPrefix}#ecosystem`} className={styles.link}>Экосистема</a></li>
        <li><Link to='/ru/blog' className={styles.link}>Блог</Link></li>
        <li><a href={`${linkPrefix}#vacancies`} className={styles.link}>Вакансии</a></li>
      </ul>
    </nav>
  )
}