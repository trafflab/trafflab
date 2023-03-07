import * as React from "react"
import * as styles from './SliderLayoutArrow.module.css';

export default function SliderLayoutArrow({ isLeft }) {

  return (
    <div className={styles.container}>
      <div
        style={{transform: `rotate(${isLeft ? 0 : 180}deg)`}}
        className={styles.icon} />
    </div>
  )
}