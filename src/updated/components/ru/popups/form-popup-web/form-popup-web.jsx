import * as React from "react"
import * as styles from './form-popup-web.module.css';
import { useStaticQuery, graphql } from "gatsby";
import { MessagesContext } from '../../../../utils/contexts';
import useForm from "../../../../hooks/use-form";
import { ADImage, SiteImage } from "../../../common/ui";

import PopupLayout from "../popup-layout/popup-layout";
import { BasicButton, BasicInput} from "../../../common/ui";
import ym from 'react-yandex-metrika';
import { Recaptcha } from "../../../common";

export default function FormPopupWeb({ closeHandler, isOpen }) {
  const images = useStaticQuery(graphql`
  query FormPopupWebRuQuery {
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
    if (!values.value && !values.tg) return;
    fetch('/api/form', {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        siteLang: 'ru',
        type: 'web',
        name: values.name,
        tg: values.tg,
      })
    })
    .then(res => {
      if (res.ok) {
        successMessageHandler()
        handleReset({name: '', tg: ''})
        //momentWindow.yaCounter308880837.reachGoal('tg_form_click');
        if (typeof window !== "undefined") {
          if (window.fbq != null) {
            window.fbq('track', 'Lead', {type: "web"});
          }
          if (window.gtag != null) {
            window.gtag('event', 'generate_lead', {type: "web"});
          }
          ym('reachGoal', 'tg_form_click');
        }
        setRecaptchaWindow(false);
        closeHandler()
      } else return Promise.reject(`error ${res.status}`)
    })
    .catch(err => console.error(err))
  }
  
  React.useEffect(() => {
    setMomentWindow(window)
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
              name='name'
              placeholder='Имя'
              value={values.name}
              onChange={handleChange}
              minLength={1}
              isRequired={true}
            />
             <BasicInput
              name='tg'
              placeholder='Телеграм'
              value={values.tg}
              onChange={handleChange}
              minLength={1}
              isRequired={true}
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