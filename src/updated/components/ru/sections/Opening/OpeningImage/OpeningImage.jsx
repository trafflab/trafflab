import * as React from "react"
import * as styles from './OpeningImage.module.css';
import { SiteImage, ADImage } from "../../../../common/ui";
import { useStaticQuery, graphql } from "gatsby";

export default function OpeningImage() {
  const images = useStaticQuery(graphql`
  query OpeningImageQuery {
    opening: file(name: {eq: "opening"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          breakpoints: [1424]
          layout: FULL_WIDTH
        )
      }
    }

    opening_480: file(name: {eq: "opening480"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          breakpoints: [480]
          layout: FULL_WIDTH
        )
      }
    }

    coin1: file(name: {eq: "coin-1"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          sizes: "(max-width: 480px) 1px, 1000000px"
          breakpoints: [164, 73]
          layout: FULL_WIDTH
        )
      }
    }

    coin2: file(name: {eq: "coin-2"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          sizes: "(max-width: 480px) 1px, 1000000px"
          breakpoints: [38, 85]
          layout: FULL_WIDTH
        )
      }
    }

    coin3: file(name: {eq: "coin-3"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          sizes: "(max-width: 480px) 1px, 1000000px"
          breakpoints: [63, 143]
          layout: FULL_WIDTH
        )
      }
    }

    coin4: file(name: {eq: "coin-4"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          sizes: "(max-width: 480px) 1px, 1000000px"
          breakpoints: [76, 170]
          layout: FULL_WIDTH
        )
      }
    }

    coin5: file(name: {eq: "coin-5"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          sizes: "(max-width: 480px) 1px, 1000000px"
          breakpoints: [47, 104]
          layout: FULL_WIDTH
        )
      }
    }

    coin6: file(name: {eq: "coin-6"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          sizes: "(max-width: 480px) 1px, 1000000px"
          breakpoints: [66, 149]
          layout: FULL_WIDTH
        )
      }
    }

    coin7: file(name: {eq: "coin-7"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          sizes: "(max-width: 480px) 1px, 1000000px"
          breakpoints: [64, 145]
          layout: FULL_WIDTH
        )
      }
    }

    coin8: file(name: {eq: "coin-8"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          sizes: "(max-width: 480px) 1px, 1000000px"
          breakpoints: [49, 110]
          layout: FULL_WIDTH
        )
      }
    }
  }
  
  
  `)

  return (
    <div className={styles.imageContainer}>
      <ADImage image={images.opening.childImageSharp} image_480={images.opening_480.childImageSharp} alt=' trafflab lucky cat'/>
      <div className={styles.imageShadow}></div>
      <div className={styles.coin1}><SiteImage image={images.coin1.childImageSharp}/></div>
      <div className={styles.coin2}><SiteImage image={images.coin2.childImageSharp}/></div>
      <div className={styles.coin3}><SiteImage image={images.coin3.childImageSharp}/></div>
      <div className={styles.coin4}><SiteImage image={images.coin4.childImageSharp}/></div>
      <div className={styles.coin5}><SiteImage image={images.coin5.childImageSharp}/></div>
      <div className={styles.coin6}><SiteImage image={images.coin6.childImageSharp}/></div>
      <div className={styles.coin7}><SiteImage image={images.coin7.childImageSharp}/></div>
      <div className={styles.coin8}><SiteImage image={images.coin8.childImageSharp}/></div>
      <div className={styles.coin9}><SiteImage image={images.coin2.childImageSharp}/></div>
    </div>

    
  )
}