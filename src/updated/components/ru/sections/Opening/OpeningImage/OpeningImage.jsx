import * as React from "react"
import * as styles from './OpeningImage.module.css';
import { SiteImage } from "../../../../common/ui";
import { useStaticQuery, graphql } from "gatsby";

export default function OpeningImage() {
  const images = useStaticQuery(graphql`
  query OpeningImageQuery {
    opening: file(name: {eq: "opening"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, webpOptions: {quality: 85})
      }
    }

    opening_480: file(name: {eq: "opening480"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, webpOptions: {quality: 85})
      }
    }

    coin1: file(name: {eq: "coin-1"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, webpOptions: {quality: 85})
      }
    }

    coin2: file(name: {eq: "coin-2"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, webpOptions: {quality: 85})
      }
    }

    coin3: file(name: {eq: "coin-3"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, webpOptions: {quality: 85})
      }
    }

    coin4: file(name: {eq: "coin-4"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, webpOptions: {quality: 85})
      }
    }

    coin5: file(name: {eq: "coin-5"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, webpOptions: {quality: 85})
      }
    }

    coin6: file(name: {eq: "coin-6"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, webpOptions: {quality: 85})
      }
    }

    coin7: file(name: {eq: "coin-7"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, webpOptions: {quality: 85})
      }
    }

    coin8: file(name: {eq: "coin-8"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, webpOptions: {quality: 85})
      }
    }

    coin1_480: file(name: {eq: "coin480-1"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, webpOptions: {quality: 85})
      }
    }

    coin2_480: file(name: {eq: "coin480-2"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, webpOptions: {quality: 85})
      }
    }

    coin3_480: file(name: {eq: "coin480-3"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, webpOptions: {quality: 85})
      }
    }

    coin4_480: file(name: {eq: "coin480-4"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, webpOptions: {quality: 85})
      }
    }

    coin5_480: file(name: {eq: "coin480-5"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, webpOptions: {quality: 85})
      }
    }

    coin6_480: file(name: {eq: "coin480-6"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, webpOptions: {quality: 85})
      }
    }

    coin7_480: file(name: {eq: "coin480-7"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, webpOptions: {quality: 85})
      }
    }

    coin8_480: file(name: {eq: "coin480-8"}) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, webpOptions: {quality: 85})
      }
    }
  }
  
  
  `)

  console.log(images);
  return (
    <div className={styles.imageContainer}>
      <SiteImage image={images.opening.childImageSharp} image_480={images.opening_480.childImageSharp} alt=' trafflab lucky cat'/>
      <div className={styles.imageShadow}></div>
      <div className={styles.coin1}><SiteImage image={images.coin1.childImageSharp} image_480={images.coin1_480.childImageSharp}/></div>
      <div className={styles.coin2}><SiteImage image={images.coin2.childImageSharp} image_480={images.coin2_480.childImageSharp}/></div>
      <div className={styles.coin3}><SiteImage image={images.coin3.childImageSharp} image_480={images.coin3_480.childImageSharp}/></div>
      <div className={styles.coin4}><SiteImage image={images.coin4.childImageSharp} image_480={images.coin4_480.childImageSharp}/></div>
      <div className={styles.coin5}><SiteImage image={images.coin5.childImageSharp} image_480={images.coin5_480.childImageSharp}/></div>
      <div className={styles.coin6}><SiteImage image={images.coin6.childImageSharp} image_480={images.coin6_480.childImageSharp}/></div>
      <div className={styles.coin7}><SiteImage image={images.coin7.childImageSharp} image_480={images.coin7_480.childImageSharp}/></div>
      <div className={styles.coin8}><SiteImage image={images.coin8.childImageSharp} image_480={images.coin8_480.childImageSharp}/></div>
      <div className={styles.coin9}><SiteImage image={images.coin2.childImageSharp} image_480={images.coin2_480.childImageSharp}/></div>
    </div>

    
  )
}



// export default function OpeningImage() {

//   return (
//     <div className={styles.imageContainer}>
//       <MediaImage image={image} image_480={image_480} image_webp={image_webp} image_480_webp={image_480_webp} alt='lucky cat'/>
//       <div className={styles.imageShadow}></div>
//       <div className={styles.coin1}><MediaImage image_webp={coin1_webp} image_480_webp={coin1_480_webp} image={coin1} image_480={coin1_480}/></div>
//       <div className={styles.coin2}><MediaImage image_webp={coin2_webp} image_480_webp={coin2_480_webp} image={coin2} image_480={coin2_480}/></div>
//       <div className={styles.coin3}><MediaImage image_webp={coin3_webp} image_480_webp={coin3_480_webp} image={coin3} image_480={coin3_480}/></div>
//       <div className={styles.coin4}><MediaImage image_webp={coin4_webp} image_480_webp={coin4_480_webp} image={coin4} image_480={coin4_480}/></div>
//       <div className={styles.coin5}><MediaImage image_webp={coin5_webp} image_480_webp={coin5_480_webp} image={coin5} image_480={coin5_480}/></div>
//       <div className={styles.coin6}><MediaImage image_webp={coin6_webp} image_480_webp={coin6_480_webp} image={coin6} image_480={coin6_480}/></div>
//       <div className={styles.coin7}><MediaImage image_webp={coin7_webp} image_480_webp={coin7_480_webp} image={coin7} image_480={coin7_480}/></div>
//       <div className={styles.coin8}><MediaImage image_webp={coin8_webp} image_480_webp={coin8_480_webp} image={coin8} image_480={coin8_480}/></div>
//       <div className={styles.coin9}><MediaImage image_webp={coin2_webp} image_480_webp={coin2_480_webp} image={coin2} image_480={coin2_480}/></div>
//     </div>
//   )
// }