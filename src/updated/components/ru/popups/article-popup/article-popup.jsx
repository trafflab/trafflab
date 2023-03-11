import * as React from "react"
import * as styles from './article-popup.module.css';
import PopupLayout from "../popup-layout/popup-layout";
import { SiteImage } from "../../../common/ui";
import { Loader } from "../../../common/ui";

export default function ArticlePopup({isOpen, data, closeHandler}) {

  // if (!data?.title) return null
  return (
    <PopupLayout isOpen={isOpen} closeHandler={closeHandler}>
      <div className={styles.articlePopup}>
        <button onClick={closeHandler} className={styles.closeButton} />
        {
          !data?.title 
          ? <Loader/>
          : data.notReadyMessage 
            ? <h3 className={styles.title}>{data.notReadyMessage}</h3>
            : <div className={styles.content}>
                <div className={styles.imageContainer}><SiteImage image={data.image} /></div>
                <h3 className={styles.title}>{data.title}</h3>
                <div className={styles.textContainer} dangerouslySetInnerHTML={{__html: data.text}} />
                <p className={styles.date}>{data.date}</p>
              </div>
        }
      </div>

    </PopupLayout>

  )
}