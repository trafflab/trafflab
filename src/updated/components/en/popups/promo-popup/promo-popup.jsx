import * as React from "react"
import * as styles from './promo-popup.module.css';
import PopupLayout from "../popup-layout/popup-layout";
import FormPopupWeb  from "../form-popup-web/form-popup-web";
import { BasicButton} from "../../../common/ui";

export default function PromoPopup({isOpen, closeHandler}) {

    const text_first = `Launched on October 1, participating is easy and the winners will receive <b>100</b>, <b>300</b>, and <b>500 USDT</b>:
    • Register in our affiliate network.
    • Hit the conversion cap on any of our offers of your choice.`
    const text_second = `We have hot offers lined up, ready to bring you profit!
    Don’t miss the chance to receive a generous gift from <b>TRAFFLAB</b>!
    Results will be announced at the end of the month.`
          // if (!data?.title) return null
    const [isForm, setForm] = React.useState(false);

    return (
        <PopupLayout isOpen={isOpen} closeHandler={closeHandler}>
        <div className={styles.promoPopup}>
            <button onClick={closeHandler} className={styles.closeButton} />
            
                <div className={styles.content}>
                    <div className={styles.textContainer}>    
                        <h3>{'Attention, a giveaway for new TRAFFLAB partners is here!'}</h3>
                        {'\n'}
                        <p dangerouslySetInnerHTML={{__html:text_first}}></p>
                    </div>
                    <div className={styles.textContainer}>
                        <p dangerouslySetInnerHTML={{__html:text_second}}></p>
                    </div>
                
                
                <button
                className={styles.button}  
                disabled={false}
                onClick={() => {setForm(true);}}
                type='button'
                >
                    {'CLAIM 500 USDT!'}
                </button>
            </div>
        </div>
      <FormPopupWeb isOpen={isForm} closeHandler={()=>{setForm(false);closeHandler();}}></FormPopupWeb>
    </PopupLayout>

  )
}