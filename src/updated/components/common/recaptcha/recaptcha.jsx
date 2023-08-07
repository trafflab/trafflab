import * as React from "react"
import * as styles from './recaptcha.module.css';
import ReCAPTCHA from "react-google-recaptcha";

export default function Recaptcha({ hl, handler = () => false, isOpen }) {
  
  const handleChange = (value) => {
    if (value) {
      handler()
    }
  }

  return (
    <div data-is-open={isOpen} className={styles.cover}>
      <div className={styles.container}>
      <ReCAPTCHA
        sitekey="6LecrIknAAAAAO5vaZwg6RVGFLR_UysRFOchclNp"
        onChange={handleChange}
        hl={hl}
      />
      </div>
    </div>
  )
}