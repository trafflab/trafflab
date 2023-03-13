import * as React from "react"
import * as styles from './header-nav-list.module.css';

export default function HeaderNavList({ linkPrefix }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li><a href={`${linkPrefix}#ecosystem`} className={styles.link}>Экосистема</a></li>
        <li><a href='/ru/blog' className={styles.link}>Блог</a></li>
        <li><a href={`${linkPrefix}#vacancies`} className={styles.link}>Вакансии</a></li>
        <li><a href={`${linkPrefix}#contacts`} className={styles.link}>Контакты</a></li>
      </ul>
    </nav>
  )
}