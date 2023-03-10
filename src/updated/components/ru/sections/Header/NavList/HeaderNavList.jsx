import * as React from "react"
import * as styles from './HeaderNavList.module.css';

export default function HeaderNavList() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <a href='/ru#ecosystem' className={styles.link}>Экосистема</a>
        <a href='/ru/blog' className={styles.link}>Блог</a>
        <a href='/ru#vacancies' className={styles.link}>Вакансии</a>
        <a href='/ru#contacts' className={styles.link}>Контакты</a>
      </ul>
    </nav>
  )
}