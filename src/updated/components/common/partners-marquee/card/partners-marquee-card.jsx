import * as React from "react"
import * as styles from './partners-marquee-card.module.css';
import { SiteImage } from "../../ui";

export default function PartnersMarqueeCard({ image, dimensions }) {

  return (
    <li className={styles.listElement}>
      <div style={dimensions}>
        <SiteImage image={image} />
      </div>
    </li>
  )
}