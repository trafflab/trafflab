import * as React from "react"
import * as styles from './nav-popup.module.css';
import PopupLayout from "../popup-layout/popup-layout";
import NavPopupContactsList from "./contacts-list/nav-popup-contacts-list";
import { Logo } from "../../../common";

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
            <li><a href='/en#sources'>Sources</a></li>
            <li><a href='/en#ecosystem'>Ecosystem</a></li>
            <li><a href='/en/blog'>Blog</a></li>
            <li><a href='/en#partners'>Partners</a> </li>
            <li><a href='/en#vacancies'>Vacancies</a></li>
            <li><a href='/en#contacts'>Contacts</a></li>
            </ul>
          </nav>
          <NavPopupContactsList/>

        </div>
      </div>
    </PopupLayout>

  )
}