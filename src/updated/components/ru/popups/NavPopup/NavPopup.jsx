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
              <li><a href="/ru#ecosystem">Экосистема</a></li>
              <li><a href="/ru/blog">Блог</a></li>
              <li><a href="/ru#vacancies">Вакансии</a></li>
              <li><a href="/ru#contacts">Контакты</a></li>
            </ul>
          </nav>
          <NavPopupContactsList/>

        </div>
      </div>
    </PopupLayout>

  )
}