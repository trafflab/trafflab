import * as React from "react"
import * as styles from './promo-popup.module.css';
import PopupLayout from "../popup-layout/popup-layout";
import FormPopupWeb  from "../form-popup-web/form-popup-web";
import { BasicButton} from "../../../common/ui";

export default function PromoPopup({isOpen, closeHandler}) {

    const text_first = `С <b>1 октября</b> стартует наш конкурс, победители получат <b>100</b>, <b>300</b> и <b>500 USDT</b>, условия максимально просты:
    • Регистрация в нашей партнерской сети.
    • Отлить капу по одному из наших офферов на ваш выбор`
    const text_second = `Мы уже подготовили офферы, готовые приносить вам прибыль!
    Не упустите шанс выиграть приятный презент от <b>TRAFFLAB</b>! Результаты объявим в конце месяца`
          // if (!data?.title) return null
    const [isForm, setForm] = React.useState(false);

    return (
        <PopupLayout isOpen={isOpen} closeHandler={closeHandler}>
        <div className={styles.promoPopup}>
            <button onClick={closeHandler} className={styles.closeButton} />
            
                <div className={styles.content}>
                    <div className={styles.textContainer}>    
                        <h3>{'Внимание, конкурс для новых партнеров TRAFFLAB!'}</h3>
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
                    {'ЗАБРАТЬ 500 USDT!'}
                </button>
            </div>
        </div>
      <FormPopupWeb isOpen={isForm} closeHandler={()=>{setForm(false);closeHandler();}}></FormPopupWeb>
    </PopupLayout>

  )
}