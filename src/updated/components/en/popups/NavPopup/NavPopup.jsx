import * as React from "react"
import * as styles from './NavPopup.module.css';
import PopupLayout from "../PopupLayout/PopupLayout";
import NavPopupContactsList from "./ContactsList/NavPopupContactsList";
import { Logo } from "../../../common/ui";

export default function NavPopup({isOpen, closeHandler}) {

  const handelClose = (evt) => {
    if (evt.target.nodeName === 'A') closeHandler()
  }
  return (
    <PopupLayout isOpen={isOpen} closeHandler={closeHandler}>
      <div className={styles.navPopup}>
        
        <button onClick={closeHandler} className={styles.closeButton} />
        <div className={styles.logoContainer}><Logo/></div>

        <div className={styles.content}>
          
          <nav className={styles.nav}>
            <ul onClick={handelClose} className={styles.list}>
            <li><a href='/en#sources' className={styles.link}>Sources</a></li>
            <li><a href='/en#ecosystem' className={styles.link}>Ecosystem</a></li>
            <li><a href='/en/blog' className={styles.link}>Blog</a></li>
            <li><a href='/en#partners' className={styles.link}>Partners</a> </li>
            <li><a href='/en#vacancies' className={styles.link}>Vacancies</a></li>
            <li><a href='/en#contacts' className={styles.link}>Contacts</a></li>
            </ul>
          </nav>
          <NavPopupContactsList/>

        </div>
      </div>
    </PopupLayout>

  )
}