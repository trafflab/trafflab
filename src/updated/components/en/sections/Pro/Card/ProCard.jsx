import * as React from "react"
import * as styles from './ProCard.module.css';
import { SiteImage } from "../../../../common/ui";

export default function ProCard({ proData, proImage }) {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <SiteImage image={proImage} alt={proData.imageAlt} />
        </div>
        <ul className={styles.list}>
          {
            proData.about.map((elementData, index) => (
              <li key={index} className={styles.element}><pre className={styles.elementText}>{elementData}</pre></li>
            ))
          }
          </ul>
      </div>
    </article>
  )
}