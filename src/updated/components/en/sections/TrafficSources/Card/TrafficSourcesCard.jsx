import * as React from "react"
import * as styles from './TrafficSourcesCard.module.css';
import { SiteImage } from "../../../../common/ui";

export default function TrafficSourcesCard({ image, title, isDownPosition }) {

  return (
    <li className={styles.listElement}>
      <article style={isDownPosition ? {alignItems: 'flex-end'} : {}} className={styles.card}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <SiteImage image={image}/>
          </div>
          <p className={styles.title}>{title}</p>
        </div>
      </article>
    </li>
  )
}