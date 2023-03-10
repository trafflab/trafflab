import * as React from "react"
import * as styles from './FooterNavList.module.css';

export default function FooterNavList() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.listElement}><a href='/ru#ecosystem' className={styles.link}>Экосистема</a></li>
        <li className={styles.listElement}><a href='/ru/blog' className={styles.link}>Блог</a></li>
        <li className={styles.listElement}><a href='/ru#vacancies' className={styles.link}>Вакансии</a></li>
      </ul>
    </nav>
  )
}