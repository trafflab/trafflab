import * as React from "react"
import * as styles from './Footer.module.css';
import { Link } from "gatsby";

import { Logo } from "../../../common";
import FooterNavList from "./NavList/FooterNavList";
import FooterContactsList from "./ContactsList/FooterContactsList";

export default function Footer() {

  const [year, setYear] = React.useState("20..");
  React.useEffect(() => {
    setYear(new Date().getFullYear())
  }, []);

  return (
    <footer id='contacts' className={styles.footer}>
      <div className={styles.content}>

        <div className={styles.logoContainer}><Link to={`/ru/`}><Logo /></Link></div>
        <div className={styles.navContainer}><FooterNavList isFooter={true}/></div>
        <p className={styles.year}>{year} © TraffLab. Все права защищены.</p>

        <div className={styles.contactsContainer}>
          <FooterContactsList />
          <ul className={styles.otherContactslist}>
            <li className={styles.listEement}>
              <div id='mailIcon' className={styles.icon} />
              <a href="mailto:admin@trafflab.com" className={styles.mailto}>support@trafflab.com</a>
            </li>
            <li className={styles.listEement}>
              <div id='skypeIcon' className={styles.icon} />
              <p className={styles.contact}>support@trafflab.com</p>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  )
}