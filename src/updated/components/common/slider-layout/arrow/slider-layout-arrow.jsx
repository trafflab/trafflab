import * as React from "react"
import * as styles from './slider-layout-arrow.module.css';

export default function SliderLayoutArrow({ isLeft }) {

  return (
    <div className={styles.container}>
      <div
        style={{transform: `rotate(${isLeft ? 180 : 0}deg)`}}
        className={styles.icon} />
    </div>
  )
}