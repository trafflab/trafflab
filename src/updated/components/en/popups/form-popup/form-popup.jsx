import * as React from "react"
import * as styles from './form-popup.module.css';
import { useStaticQuery, graphql } from "gatsby";
import { MessagesContext } from '../../../../utils/contexts';
import { sendFormToTgEn } from "../../../../utils/api";
import useForm from "../../../../hooks/use-form";
import { ADImage } from "../../../common/ui";

import PopupLayout from "../popup-layout/popup-layout";
import { BasicButton, BasicInput} from "../../../common/ui";

export default function FormPopup({ closeHandler, isOpen }) {
  const images = useStaticQuery(graphql`
  query FormPopupEnQuery {
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

  const successMessageHandler = React.useContext(MessagesContext)

  const handleSendClick = () => {
    sendFormToTgEn(values.name, values.tg)
      .then(res => {
        if (res.ok) {
          successMessageHandler()
          handleReset()
          handleReset({name: '', tg: ''})
          momentWindow.yaCounter89406166.reachGoal('tg_form_click');

        }
      })
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
        <p className={styles.title}>Become the best together with the best</p>
        <p className={styles.subtitle}>Submit a request and the manager will contact you shortly</p>

        <form className={styles.form}>
          <div className={styles.inputsContainer}>
            <BasicInput
              name='name'
              placeholder='Your name'
              value={values.name}
              onChange={handleChange}
              minLength={1}
              isRequired={true}
            />
             <BasicInput
              name='tg'
              placeholder='Telegram'
              value={values.tg}
              onChange={handleChange}
              minLength={1}
              isRequired={true}
            />
          </div>
          <div className={styles.buttonContainer}>
            <BasicButton
              text='Send'
              isActive={isValid}
              handler={handleSendClick}
            />
            <p className={styles.agreement}>I agree to the personal data processing</p>
          </div>
        </form>

      </div>
    </PopupLayout>
  )
}