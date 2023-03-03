import * as React from "react"
import * as styles from './Header.module.css';

import { NavList, Logo, AskQuestion } from "../../elements";
import { Link } from "gatsby";

export default function Header({ openNavPopupHandler }) {

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link to={`/ru/`}><Logo /></Link>
        <div className={styles.navContainer}><NavList /></div>
        <div className={styles.burgerContainer}>
          <AskQuestion />
          <button onClick={openNavPopupHandler} type="button" className={styles.burgerButton}></button>
        </div>

      </div>

    </header>
  )
}