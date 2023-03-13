import * as React from "react"
import * as styles from './footer-nav-list.module.css';
import { Link } from "gatsby";

export default function FooterNavList({ linkPrefix }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li><a href={`${linkPrefix}#sources`} className={styles.link}>Sources</a></li>
        <li><a href={`${linkPrefix}#ecosystem`} className={styles.link}>Ecosystem</a></li>
        <li><Link href='/en/blog' className={styles.link}>Blog</Link></li>
        <li><a href={`${linkPrefix}#partners`} className={styles.link}>Partners</a> </li>
      </ul>
    </nav>
  )
}