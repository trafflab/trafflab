import * as React from "react"
import * as styles from './Header.module.css';
import { Link } from "gatsby";

import { Logo, AskQuestion } from "../../../common"
import HeaderNavList from "./NavList/HeaderNavList";

export default function Header({ openNavPopupHandler }) {

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link to={`/en/`}><Logo /></Link>
        <div className={styles.navContainer}><HeaderNavList /></div>
        <div className={styles.burgerContainer}>
          <AskQuestion />
          <button onClick={openNavPopupHandler} type="button" className={styles.burgerButton}></button>
        </div>
      </div>
    </header>
  )
}