import * as React from "react"
import * as styles from './Iconlink.module.css';

export default function IconLink({ icon, linkTo, isSmall }) {
  return (
    <li className={styles.listElement}>
      <a target='_blank' href={linkTo} className={styles.link}>
        <div
          id='iconLink'
          style={{backgroundImage: `url(${icon})`}}
          className={`${styles.circledIcon} ${isSmall ? styles.isSmall : ''}`}
        />
      </a>
    </li>
  )
}
