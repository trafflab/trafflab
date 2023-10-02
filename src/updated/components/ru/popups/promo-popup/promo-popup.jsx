import * as React from "react"
import * as styles from './promo-popup.module.css';
import PopupLayout from "../popup-layout/popup-layout";
import FormPopupWeb  from "../form-popup-web/form-popup-web";
import { BasicButton} from "../../../common/ui";

export default function PromoPopup({isOpen, closeHandler}) {

    const text_first = `С 1 октября стартует наш конкурс, условия максимально просты:
          • Регистрация в нашей партнерской сети.
          • Отлить капу по одному из наших офферов на ваш выбор`
    const text_second = `Мы уже подготовили офферы, готовые приносить вам прибыль!
    Не упустите шанс выиграть приятный презент от TRAFFLAB! Результаты объявим в конце месяца`
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
                        {text_first}
                    </div>
                    <div className={styles.textContainer}>
                        {text_second}
                    </div>
                
                
                <button
                className={styles.button}  
                disabled={false}
                onClick={() => {setForm(true);}}
                type='button'
                >
                    {'ЗАБРАТЬ ПРИЗ'}
                </button>
            </div>
        </div>
      <FormPopupWeb isOpen={isForm} closeHandler={()=>{setForm(false);closeHandler();}}></FormPopupWeb>
    </PopupLayout>

  )
}