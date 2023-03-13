import * as React from "react"
import * as styles from './header-nav-list.module.css';

export default function HeaderNavList({ linkPrefix }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
      
        <li><a href={`${linkPrefix}#sources`}className={styles.link}>Sources</a></li>
        <li><a href={`${linkPrefix}#ecosystem`} className={styles.link}>Ecosystem</a></li>
        <li><a href='/en/blog' className={styles.link}>Blog</a></li>
        <li><a href={`${linkPrefix}#partners`} className={styles.link}>Partners</a> </li>
        <li><a href={`${linkPrefix}#vacancies`} className={styles.link}>Vacancies</a></li>
        <li><a href={`${linkPrefix}#contacts`} className={styles.link}>Contacts</a></li>
      </ul>
    </nav>
  )
}