import * as React from "react"
import * as styles from './opening.module.css';
import { Is480Context } from "../../../../utils/contexts";

import OpeningImage from "./image/opening-image";
import OpeningButton from "./button/opening-button";
import { TgButton } from "../../elements";
import { FormPopup } from "../../popups";

export default function Opening() {

  const is480 = React.useContext(Is480Context);
  const [ formPopupOpen, setFormPopupOpen ] = React.useState(false);
  const openFormPopup = () =>  setFormPopupOpen(true);
  const closeFormPopup = () => setFormPopupOpen(false);

  
  return (
    <section id='opening' className={styles.opening}>
      <div className={styles.content}>

        <div className={styles.textContainer}>
          <h1 className={styles.title}>{is480 ? 'iGaming | CPA - сеть' : 'iGaming'}</h1>
          <p className={styles.subtitle1}>CPA - сеть</p>
          <p className={styles.subtitle2}>Твой максимальный профит с самой прозрачной платформой</p>
          <div className={styles.buttonsContainer}>
            <TgButton text='Я веб-мастер'/>
            <OpeningButton handler={openFormPopup} text='Я рекламодатель'/>
          </div>
        </div>

      </div>
      <OpeningImage />

      <FormPopup isOpen={formPopupOpen} closeHandler={closeFormPopup}/>
    </section>
  )
}