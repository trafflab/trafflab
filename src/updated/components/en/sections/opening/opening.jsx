import * as React from "react"
import * as styles from './opening.module.css';
import { FormsContexts } from "../../../../utils/contexts";
import OpeningImage from "./image/opening-image";
import OpeningButton from "./button/opening-button";

export default function Opening() {
  const { openWebFormPopup } = React.useContext(FormsContexts);

  return (
    <section id='opening' className={styles.opening}>
      <div className={styles.content}>

        <div className={styles.textContainer}>
          <h1 className={styles.title}>Profitable ecosystem</h1>
          <p className={styles.subtitle2}>for affiliates of any level</p>
          <div className={styles.buttonsContainer}>
            <OpeningButton handler={openWebFormPopup} text='Become a partner'/>
          </div>
        </div>

      </div>
      <OpeningImage />
    </section>
  )
}