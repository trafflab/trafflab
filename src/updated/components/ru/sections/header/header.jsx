import * as React from "react"
import * as styles from './header.module.css';
import { Link } from "gatsby";

import { Logo, AskQuestion } from "../../../common"
import HeaderNavList from "./nav-list/header-nav-list";

export default function Header({ openNavPopupHandler, linkPrefix='' }) {

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link to={`/ru/`}><Logo /></Link>
        <div className={styles.navContainer}><HeaderNavList linkPrefix={linkPrefix} /></div>
        <div className={styles.burgerContainer}>
          <AskQuestion />
          <button onClick={openNavPopupHandler} type="button" className={styles.burgerButton}></button>
        </div>
      </div>
    </header>
  )
}