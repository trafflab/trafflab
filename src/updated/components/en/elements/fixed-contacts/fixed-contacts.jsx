import * as React from "react"
import * as styles from './fixed-contacts.module.css';

import FixedContactsList from "./contacts-list/fixed-contacts-list";

export default function FixedContacts({scrollHandler, clickHandler}) {
  
  return (
    <div className={styles.fixedContacts}>
      <FixedContactsList/>
      <div className={styles.upArrow}>
        <button onClick={scrollHandler} className={styles.upButton}>
          <div className={styles.circledIcon} />
        </button>  
        <span onClick={clickHandler} className={styles.upText}>Up</span>
      </div>
    </div>
  )
}