import * as React from "react"
import * as styles from './site-logo.module.css';
import logoImage from './logo-main.svg'

export default function Logo() {
  return <img src={logoImage} alt="trafflab logo" className={styles.logo} />
}