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
        //site 6LecrIknAAAAAO5vaZwg6RVGFLR_UysRFOchclNp
        //secret 6LecrIknAAAAACDMjkrNuOtCWQP0vXTHF32JXO4s
        //old 6LcbvsUlAAAAACWvENvT_pX7fYvgdTzX4MGn9_v4
        //site v2 6LdvwIknAAAAANtUn0BFXZXpA2jNNfNYs4dFcV3I
        sitekey="6LdvwIknAAAAANtUn0BFXZXpA2jNNfNYs4dFcV3I"
        onChange={handleChange}
        hl={hl}
      />
      </div>
    </div>
  )
}