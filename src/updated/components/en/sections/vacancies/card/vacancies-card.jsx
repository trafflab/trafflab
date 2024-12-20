import * as React from "react"
import * as styles from './vacancies-card.module.css';

export default function VacanciesCard({data: {status, speciality, experience, about}}) {

  return (
    <article className={styles.card}>
      <div className={styles.textContainer}>
        <div className="">
          <p className={styles.status}>{status}</p>
          <p className={styles.speciality}>{speciality}</p>
          <p className={styles.experience}>{experience}</p>
        </div>
        <p className={styles.about}>{about}</p>
      </div>
      <a href='https://t.me/trafflab_HR' target="_blank" className={styles.readMore}>Read more</a>
    </article>
  )
}