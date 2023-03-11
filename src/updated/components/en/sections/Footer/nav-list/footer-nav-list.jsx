import * as React from "react"
import * as styles from './footer-nav-list.module.css';

export default function FooterNavList() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li><a href='/en#sources' className={styles.link}>Sources</a></li>
        <li><a href='/en#ecosystem' className={styles.link}>Ecosystem</a></li>
        <li><a href='/en/blog' className={styles.link}>Blog</a></li>
        <li><a href='/en#partners' className={styles.link}>Partners</a> </li>
      </ul>
    </nav>
  )
}