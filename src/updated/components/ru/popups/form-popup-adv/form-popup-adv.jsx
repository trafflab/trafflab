import * as React from "react"
import * as styles from './form-popup-adv.module.css';
import { useStaticQuery, graphql } from "gatsby";
import { MessagesContext } from '../../../../utils/contexts';
import { sendFormToTgRu } from "../../../../utils/api";
import useForm from "../../../../hooks/use-form";
import { ADImage } from "../../../common/ui";

import PopupLayout from "../popup-layout/popup-layout";
import { BasicButton, BasicInput} from "../../../common/ui";

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

  const successMessageHandler = React.useContext(MessagesContext)

  const handleSendClick = () => {
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
        momentWindow.yaCounter89406166.reachGoal('tg_form_click');
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
        <p className={styles.title}>?????????? ???????????? ???????????? ?? ??????????????</p>
        <p className={styles.subtitle}>???????????????? ???????????? ?? ???????????????? ???????????????? ?? ???????? ?? ?????????????????? ??????????</p>

        <form className={styles.form}>
          <div className={styles.inputsContainer}>
            <BasicInput
              name='product'
              placeholder='?????? ??????????????'
              value={values.product}
              onChange={handleChange}
              minLength={1}
              isRequired={true}
            />
            <BasicInput
              name='name'
              placeholder='???????? ??????'
              value={values.name}
              onChange={handleChange}
              minLength={1}
              isRequired={true}
            />
            <BasicInput
              name='contact'
              placeholder='?????????????? ?????? ??????????'
              value={values.contact}
              onChange={handleChange}
              minLength={1}
              isRequired={true}
            />
            <BasicInput
              name='comfyContact'
              placeholder='?????????????? ?????????? ??????????'
              value={values.comfyContact}
              onChange={handleChange}
            />
          </div>
          <div className={styles.buttonContainer}>
            <BasicButton
              text='??????????????????'
              isActive={isValid}
              handler={handleSendClick}
            />
            <p className={styles.agreement}>?? ???????????????? ???? ?????????????????? ???????????????????????? ????????????</p>
          </div>
        </form>

      </div>
    </PopupLayout>
  )
}