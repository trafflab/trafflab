import * as React from "react"
import * as styles from './contacts-list.module.css';

import IconLink from "./Iconlink/Iconlink";
import {
  tgIcon,
  fbIcon,
  ytIcon,
  instIcon,
  twitterIcon,
  linkedinIcon,
} from '../../../../../images/icons'

export default function ContactsList({ intoRow, isSmall=false }) {
  return (
    <ul style={intoRow && {flexDirection: 'row', height: 'auto'}} className={styles.list}>
      <IconLink isSmall={isSmall} icon={tgIcon} linkTo='https://bit.ly/3mpoPpz'/>
      <IconLink isSmall={isSmall} icon={fbIcon} linkTo='https://bit.ly/3MzbKow'/>
      <IconLink isSmall={isSmall} icon={linkedinIcon} linkTo='https://bit.ly/3mlddUS'/>
      <IconLink isSmall={isSmall} icon={ytIcon} linkTo='https://bit.ly/3Mhb3A9'/>
      <IconLink isSmall={isSmall} icon={instIcon} linkTo='https://bit.ly/3xPzgJy'/>
      <IconLink isSmall={isSmall} icon={twitterIcon} linkTo='https://bit.ly/3xdtWOC'/>
    </ul>
  )
}