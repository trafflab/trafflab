import * as React from "react"
import * as styles from './NavList.module.css';

export default function NavList({ isFooter=false }) {
  return (
    <nav className={styles.nav}>
      <ul
        style={{color: [isFooter ? 'var(--color-white)' : 'var(--color-gray-2)']}}
        className={styles.list}
      >

        <a href='#ecosystem' className={styles.link}>ecosystem</a>
        <a href='/blog' className={styles.link}>blog</a>
        <a href='#vacancies' className={styles.link}>vacancies</a>
        {!isFooter && <a href='#contacts' className={styles.link}>contacts</a>}

      </ul>
    </nav>
  )
}