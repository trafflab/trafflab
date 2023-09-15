import * as React from "react"
import * as styles from './form-popup-adv.module.css';
import { useStaticQuery, graphql } from "gatsby";
import { MessagesContext } from '../../../../utils/contexts';
import { sendFormToTgRu } from "../../../../utils/api";
import useForm from "../../../../hooks/use-form";
import { ADImage } from "../../../common/ui";

import PopupLayout from "../popup-layout/popup-layout";
import { BasicButton, BasicInput} from "../../../common/ui";
import ym from 'react-yandex-metrika';
import { Recaptcha } from "../../../common";

export default function FormPopupAdv({ closeHandler, isOpen }) {
  const images = useStaticQuery(graphql`
  query FormPopupAdvRuQuery {
    form_popup: file(name: {eq: "form-popup"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          breakpoints: [984]
          layout: FULL_WIDTH
        )
      }
    }

    form_popup_480: file(name: {eq: "form-popup-480"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          breakpoints: [560]
          layout: FULL_WIDTH
        )
      }
    }
  }
  `)
  const {values, handleChange, isValid, handleReset} = useForm()
  const [momentWindow, setMomentWindow] = React.useState({});
  const [recaptchaWindow, setRecaptchaWindow] = React.useState(false);

  const successMessageHandler = React.useContext(MessagesContext)

  const handleSendForm = () => {
    if (!values.product && !values.name && !values.contact) return;
    fetch('/api/form', {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        siteLang: 'ru',
        type: 'advertiser',
        product: values.product,
        name: values.name,
        contact: values.contact,
        comfyContact: values.comfyContact,
      })
    })
    .then(res => {
      if (res.ok) {
        successMessageHandler()
        handleReset({product: '', name: '', contact: '', comfyContact: ''})
        //momentWindow.yaCounter308880837.reachGoal('tg_form_click');
        ym(308880837, 'reachGoal', 'tg_form_click');
        if (typeof window !== "undefined") {
          if (window.fbq != null) {
            window.fbq('track', 'Lead', {type: "adv"});
          }
        }
        setRecaptchaWindow(false);
        closeHandler()
      } else return Promise.reject(`error ${res.status}`)
      
    })
    .catch(err => console.error(err))
  }
  React.useEffect(() => {
    setMomentWindow(window)
    values.phone = ''
  }, [])

  return (
    <PopupLayout isOpen={isOpen} closeHandler={closeHandler}>
      <div className={styles.formPopup}>
        <button type='button' onClick={closeHandler} className={styles.closeButton} />

        <div className={styles.imageContainer}>
          <ADImage image={images.form_popup.childImageSharp} image_480={images.form_popup_480.childImageSharp}/>
        </div>
        <p className={styles.title}>Стать лучшим вместе с лучшими</p>
        <p className={styles.subtitle}>Оставьте заявку и менеджер свяжется с вами в ближайшее время</p>

        <form className={styles.form}>
          <div className={styles.inputsContainer}>
            <BasicInput
              name='product'
              placeholder='Ваш продукт'
              value={values.product}
              onChange={handleChange}
              minLength={1}
              isRequired={true}
            />
            <BasicInput
              name='name'
              placeholder='Ваше имя'
              value={values.name}
              onChange={handleChange}
              minLength={1}
              isRequired={true}
            />
            <BasicInput
              name='contact'
              placeholder='Контакт для связи'
              value={values.contact}
              onChange={handleChange}
              minLength={1}
              isRequired={true}
            />
            <BasicInput
              name='comfyContact'
              placeholder='Удобный канал связи'
              value={values.comfyContact}
              onChange={handleChange}
            />
          </div>
          <div className={styles.buttonContainer}>
            <BasicButton
              text='Отправить'
              isActive={isValid}
              handler={() => setRecaptchaWindow(true)}
            />
            <p className={styles.agreement}>Я согласен на обработку персональных данных</p>
          </div>
        </form>
        <Recaptcha
          isOpen={recaptchaWindow}
          handler={handleSendForm}
          hl='RU'
        />
      </div>
    </PopupLayout>
  )
}