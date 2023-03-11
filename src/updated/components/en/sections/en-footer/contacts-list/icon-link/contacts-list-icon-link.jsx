import * as React from "react"
import * as styles from './contacts-list-icon-link.module.css';

export default function ContactsListIconLink({ icon, linkTo }) {
  return (
    <li className={styles.listElement}>
      <a target='_blank' href={linkTo}>
        <div
          style={{backgroundImage: `url(${icon})`}}
          className={styles.circledIcon}
        />
      </a>
    </li>
  )
}
