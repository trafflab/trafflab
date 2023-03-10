import * as React from "react"
import * as styles from './SuccessMessage.module.css';

export default function SuccessMessage({isShown}) {
  
  return (
    <div className={`${styles.successMessage} ${isShown ? styles.isShown : ''}`}>
      <div className={styles.icon}/>
      <p className={styles.message}>Your application has been sent</p>
    </div>
  )
}