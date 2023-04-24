import * as React from "react"
import * as styles from './page-form.module.css';
import { useStaticQuery, graphql } from "gatsby";
import { FormsContexts } from "../../../../utils/contexts";
import { SiteImage, ADImage, BasicButton } from "../../../common/ui";
export default function PageForm({ isMiddle }) {
  const images = useStaticQuery(graphql`
  query PageFormEnQuery {
    page_form: file(name: {eq: "page-form"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          breakpoints: [1066]
          layout: FULL_WIDTH
        )
      }
    }

    page_form_480: file(name: {eq: "page-form-480"}) {
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

    text_image: file(name: {eq: "page-form-text-en"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          sizes: "(max-width: 480px) 1px, 1000000px"
          breakpoints: [486, 733]
          layout: FULL_WIDTH
        )
      }
    }

    text_image_last: file(name: {eq: "page-form-text-en-last"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          sizes: "(max-width: 480px) 1px, 1000000px"
          breakpoints: [486, 733]
          layout: FULL_WIDTH
        )
      }
    }

  }
  `)
  const { openWebFormPopup } = React.useContext(FormsContexts)

  return (
    <section className={`${styles.pageForm} ${isMiddle ? styles.isMiddle : {}}`}>
      <div className={styles.content}>
        
        <div className={styles.formContainer}>
          <div className={styles.textImg}>
            {
              isMiddle
                ? <SiteImage image={images.text_image_last.childImageSharp}/>
                : <SiteImage image={images.text_image.childImageSharp}/> 
            }
          </div>

          <p className={styles.text}>Leave a request and the manager will contact you soon</p>
          <div className={styles.buttonContainer}><BasicButton handler={openWebFormPopup} text='Become a partner'/></div>
        </div>

        <div className={styles.imageContainer}>
          <ADImage image={images.page_form.childImageSharp} image_480={images.page_form_480.childImageSharp} />
        </div>

      </div>      
    </section>
  )
}