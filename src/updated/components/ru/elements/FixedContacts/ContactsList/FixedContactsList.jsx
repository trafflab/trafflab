import * as React from "react"
import * as styles from './FixedContactsList.module.css';

import ContactsListIconLink from "./IconLink/ContactsListIconlink";
import {
  tgIcon,
  fbIcon,
  ytIcon,
  instIcon,
  twitterIcon,
  linkedinIcon,
} from '../../../../../images/icons'

export default function FixedContactsList() {
  return (
    
    <ul className={styles.list}>
      <ContactsListIconLink icon={tgIcon} linkTo='https://bit.ly/3mpoPpz'/>
      <ContactsListIconLink icon={fbIcon} linkTo='https://bit.ly/3MzbKow'/>
      <ContactsListIconLink icon={linkedinIcon} linkTo='https://bit.ly/3mlddUS'/>
      <ContactsListIconLink icon={ytIcon} linkTo='https://bit.ly/3Mhb3A9'/>
      <ContactsListIconLink icon={instIcon} linkTo='https://bit.ly/3xPzgJy'/>
      <ContactsListIconLink icon={twitterIcon} linkTo='https://bit.ly/3xdtWOC'/>
    </ul>
  )
}