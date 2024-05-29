import * as React from "react"
import * as styles from './statistics.module.css';

const statisticsData = [
  {
    stat: '150+',
    statDisc: 'гео',
  },
  {
    stat: '600+ ',
    statDisc: 'аффилиатов',
  },
  {
    stat: '500+',
    statDisc: 'рекламодателей',
  },
  {
    stat: 'до 400$',
    statDisc: 'CPA',
  },
  {
    stat: 'до 55%',
    statDisc: 'REVSHARE',
  }
]

export default function Statistics() {

  return (
    <section className={styles.statistics}>
      <div className={styles.content}>
        <ul className={styles.list}>
          {
            statisticsData.map((statData, index) => (
              <li key={index} className={styles.listElement}>
                <p className={styles.stat}>{statData.stat}</p>
                <p className={styles.statDisc}>{statData.statDisc}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}