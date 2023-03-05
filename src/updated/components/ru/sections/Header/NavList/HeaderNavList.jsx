import * as React from "react"
import * as styles from './HeaderNavList.module.css';

export default function HeaderNavList() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <a href='#ecosystem' className={styles.link}>Экосистема</a>
        <a href='/blog' className={styles.link}>Блог</a>
        <a href='#vacancies' className={styles.link}>Вакансии</a>
        <a href='#contacts' className={styles.link}>Контакты</a>
      </ul>
    </nav>
  )
}