import * as React from "react"
import * as styles from './Opening.module.css';

import OpeningButton from "./Button/OpeningButton";
import { TgButton } from "../../elements";

import OpeningImage from "./Image/OpeningImage";
import { Is480Context } from "../../../../utils/contexts";

export default function Opening({openFormPopupHandler}) {
  const is480 = React.useContext(Is480Context);

  
  return (
    <section id='opening' className={styles.opening}>
      <div className={styles.content}>

        <div className={styles.textContainer}>
          <h1 className={styles.title}>{is480 ? 'iGaming | CPA - сеть' : 'iGaming'}</h1>
          <p className={styles.subtitle1}>CPA - сеть</p>
          <p className={styles.subtitle2}>Твой максимальный профит с самой прозрачной платформой</p>
          <div className={styles.buttonsContainer}>
            <TgButton text='Я веб-мастер'/>
            <OpeningButton handler={openFormPopupHandler} text='Я рекламодатель'/>
          </div>
        </div>

      </div>
      <OpeningImage />
    </section>
  )
}