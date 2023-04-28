import * as React from "react"
import * as styles from './recaptcha.module.css';
import ReCAPTCHA from "react-google-recaptcha";

export default function Recaptcha({}) {
  
  const handleChange = (value) => {
    console.log("Captcha value:", value);
  }

  return (
    <div className={styles.container}>
      <ReCAPTCHA
        sitekey="6LcbvsUlAAAAACWvENvT_pX7fYvgdTzX4MGn9_v4"
        onChange={handleChange}
      />
    </div>
  )
}