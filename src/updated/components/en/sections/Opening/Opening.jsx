import * as React from "react"
import * as styles from './opening.module.css';

import OpeningImage from "./image/opening-image";
import OpeningButton from "./button/opening-button";
import { FormPopup } from "../../popups";

export default function Opening() {
  const [ formPopupOpen, setFormPopupOpen ] = React.useState(false);
  const openFormPopup = () =>  setFormPopupOpen(true);
  const closeFormPopup = () => setFormPopupOpen(false);
  
  return (
    <section id='opening' className={styles.opening}>
      <div className={styles.content}>

        <div className={styles.textContainer}>
          <h1 className={styles.title}>Profitable ecosystem</h1>
          <p className={styles.subtitle2}>for affiliates of any level</p>
          <div className={styles.buttonsContainer}>
            <OpeningButton handler={openFormPopup} text='Become a partner'/>
          </div>
        </div>

      </div>
      <OpeningImage />

      <FormPopup isOpen={formPopupOpen} closeHandler={closeFormPopup}/>
    </section>
  )
}