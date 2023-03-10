import * as React from "react"
import * as styles from './WhatWeDoImage.module.css';
import { useStaticQuery, graphql } from "gatsby";
import lottie from 'lottie-web';

import animation from './back.json';
import { SiteImage } from "../../../../common/ui";

export default function WhatWeDoImage() {
  const images = useStaticQuery(graphql`
  query WhatWeDoImageRuQuery {

    whatWeDo: file(name: {eq: "what-we-do"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          sizes: "(max-width: 480px) 1px, 1000000px"
          breakpoints: [421, 876]
          layout: FULL_WIDTH
        )
      }
    }

    coin_1: file(name: {eq: "what-we-do-coin-1"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          sizes: "(max-width: 480px) 1px, 1000000px"
          breakpoints: [75, 155]
          layout: FULL_WIDTH
        )
      }
    }

    coin_2: file(name: {eq: "what-we-do-coin-2"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          sizes: "(max-width: 480px) 1px, 1000000px"
          breakpoints: [68, 140]
          layout: FULL_WIDTH
        )
      }
    }

    coin_3: file(name: {eq: "what-we-do-coin-3"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          sizes: "(max-width: 480px) 1px, 1000000px"
          breakpoints: [72, 147]
          layout: FULL_WIDTH
        )
      }
    }
  }
  `)
  const lottieContainer = React.useRef()

  React.useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieContainer.current,
      animationData: animation,
      rendere: 'canvas',
      loop: true,
      autoplay: true,

    })
    return () => anim.destroy()
  }, [lottieContainer])

  return (
    <div className={styles.imageContainer}>
      <div ref={lottieContainer} className={styles.lottieDiv} />
      <SiteImage image={images.whatWeDo.childImageSharp}/>
      <div className={styles.coin1}><SiteImage image={images.coin_1.childImageSharp}/></div>
      <div className={styles.coin2}><SiteImage image={images.coin_2.childImageSharp}/></div>
      <div className={styles.coin3}><SiteImage image={images.coin_3.childImageSharp}/></div>
    </div>
  )
}




// import * as React from "react"
// import * as styles from './what-we-do-image.module.css';
// import lottie from 'lottie-web';
// import animation from '../../../../../images/what-we-do/back.json';
// import MediaImage from "../../../ui/media-image/media-image";

// import image from '../../../../../images/what-we-do/what-we-do.png';
// import image_480 from '../../../../../images/what-we-do/what-we-do-480.png';
// import image_webp from '../../../../../images/what-we-do/what-we-do.webp';
// import image_480_webp from '../../../../../images/what-we-do/what-we-do-480.webp';

// import coin1 from '../../../../../images/what-we-do/coin-1.png';
// import coin2 from '../../../../../images/what-we-do/coin-2.png';
// import coin3 from '../../../../../images/what-we-do/coin-3.png';
// import coin1_480 from '../../../../../images/what-we-do/coin-1-480.png';
// import coin2_480 from '../../../../../images/what-we-do/coin-2-480.png';
// import coin3_480 from '../../../../../images/what-we-do/coin-3-480.png';

// import coin1_webp from '../../../../../images/what-we-do/coin-1.webp';
// import coin2_webp from '../../../../../images/what-we-do/coin-2.webp';
// import coin3_webp from '../../../../../images/what-we-do/coin-3.webp';
// import coin1_480_webp from '../../../../../images/what-we-do/coin-1-480.webp';
// import coin2_480_webp from '../../../../../images/what-we-do/coin-2-480.webp';
// import coin3_480_webp from '../../../../../images/what-we-do/coin-3-480.webp';

// export default function WhatWeDoImage() {
//   const lottieContainer = React.useRef()

//   React.useEffect(() => {
//     const anim = lottie.loadAnimation({
//       container: lottieContainer.current,
//       animationData: animation,
//       rendere: 'canvas',
//       loop: true,
//       autoplay: true,

//     })
//     return () => anim.destroy()
//   }, [lottieContainer])

//   return (
//     <div className={styles.imageContainer}>
//       <div ref={lottieContainer} className={styles.lottieDiv} />
//       <MediaImage
//         image_webp={image_webp}
//         image_480_webp={image_480_webp}
//         image={image}
//         image_480={image_480}
//       />
//       <div className={styles.coin1}><MediaImage image_webp={coin1_webp} image_480_webp={coin1_480_webp} image={coin1} image_480={coin1_480}/></div>
//       <div className={styles.coin2}><MediaImage image_webp={coin2_webp} image_480_webp={coin2_480_webp} image={coin2} image_480={coin2_480}/></div>
//       <div className={styles.coin3}><MediaImage image_webp={coin3_webp} image_480_webp={coin3_480_webp} image={coin3} image_480={coin3_480}/></div>
//     </div>
//   )
// }