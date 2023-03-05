import * as React from "react"
import * as styles from './ContactsListIconLink.module.css';

export default function ContactsListIconLink({ icon, linkTo }) {
  return (
    <li className={styles.listElement}>
      <a target='_blank' href={linkTo} className={styles.link}>
        <div
          id='iconLink'
          style={{backgroundImage: `url(${icon})`}}
          className={styles.circledIcon}
        />
      </a>
    </li>
  )
}
