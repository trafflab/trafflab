import * as React from "react"
import * as styles from './form-popup.module.css';
import { useStaticQuery, graphql } from "gatsby";
import { MessagesContext } from '../../../../utils/contexts';
import { sendFormToTgRu } from "../../../../utils/api";
import useForm from "../../../../hooks/use-form";
import { ADImage } from "../../../common/ui";

import PopupLayout from "../popup-layout/popup-layout";
import { BasicButton, BasicInput} from "../../../common/ui";

export default function FormPopup({ closeHandler, isOpen }) {
  const images = useStaticQuery(graphql`
  query FormPopupQuery {
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
    sendFormToTgRu(values.product, values.name, values.contact, values.comfyContact)
      .then(res => {
        if (res.ok) {
          successMessageHandler()
          handleReset()
          handleReset({product: '', name: '', contact: '', comfyContact: ''})
          momentWindow.yaCounter89406166.reachGoal('tg_form_click');

        }
      })
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
              minLength={1}
              isRequired={true}
            />
          </div>
          <div className={styles.buttonContainer}>
            <BasicButton
              text='Отправить'
              isActive={isValid}
              handler={handleSendClick}
            />
            <p className={styles.agreement}>Я согласен на обработку персональных данных</p>
          </div>
        </form>

      </div>
    </PopupLayout>
  )
}