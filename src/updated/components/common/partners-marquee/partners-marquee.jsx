import * as React from "react"
import * as styles from './partners-marquee.module.css';
import Marquee from "react-fast-marquee";
import { useStaticQuery, graphql } from "gatsby";

import PartnersMarqueeCard from "./card/partners-marquee-card";

const partnersLogoDimensions = [
  {width: '84em', height: '84em'},
  {width: '65em', height: '64em'},
  {width: '230em', height: '65em'},
  {width: '196em', height: '34em'},
  {width: '155em', height: '41em'},
  {width: '115em', height: '49em'},
  {width: '77em', height: '76em'},
  {width: '225em', height: '64em'},
  {width: '116em', height: '84em'}
]

export default function PartnersMarquee({ title }) {
  const images = useStaticQuery(graphql`
  query PartnersMarqueeQuery {
    partner_logo_0: file(name: {eq: "partner-logo-0"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          breakpoints: [84]
          layout: FULL_WIDTH
        )
      }
    }
    partner_logo_1: file(name: {eq: "partner-logo-1"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          breakpoints: [65]
          layout: FULL_WIDTH
        )
      }
    }
    partner_logo_2: file(name: {eq: "partner-logo-2"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          breakpoints: [230]
          layout: FULL_WIDTH
        )
      }
    }
    partner_logo_3: file(name: {eq: "partner-logo-3"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          breakpoints: [196]
          layout: FULL_WIDTH
        )
      }
    }
    partner_logo_4: file(name: {eq: "partner-logo-4"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          breakpoints: [155]
          layout: FULL_WIDTH
        )
      }
    }
    partner_logo_5: file(name: {eq: "partner-logo-5"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          breakpoints: [115]
          layout: FULL_WIDTH
        )
      }
    }
    partner_logo_6: file(name: {eq: "partner-logo-6"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          breakpoints: [77]
          layout: FULL_WIDTH
        )
      }
    }
    partner_logo_7: file(name: {eq: "partner-logo-7"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          breakpoints: [225]
          layout: FULL_WIDTH
        )
      }
    }
    partner_logo_8: file(name: {eq: "partner-logo-8"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          breakpoints: [116]
          layout: FULL_WIDTH
        )
      }
    }
  }
  `)
  return (
    <section id='partners' className={styles.partenrsMarquee}>
      <div className={styles.content}>

        <h2 className={styles.title}>{title}</h2>
        <Marquee gradient={false} direction="right">
          <ul className={styles.list}>
            <PartnersMarqueeCard image={images.partner_logo_0.childImageSharp} dimensions={partnersLogoDimensions[0]} />
            <PartnersMarqueeCard image={images.partner_logo_1.childImageSharp} dimensions={partnersLogoDimensions[1]} />
            <PartnersMarqueeCard image={images.partner_logo_2.childImageSharp} dimensions={partnersLogoDimensions[2]} />
            <PartnersMarqueeCard image={images.partner_logo_3.childImageSharp} dimensions={partnersLogoDimensions[3]} />
            <PartnersMarqueeCard image={images.partner_logo_4.childImageSharp} dimensions={partnersLogoDimensions[4]} />
            <PartnersMarqueeCard image={images.partner_logo_5.childImageSharp} dimensions={partnersLogoDimensions[5]} />
            <PartnersMarqueeCard image={images.partner_logo_6.childImageSharp} dimensions={partnersLogoDimensions[6]} />
            <PartnersMarqueeCard image={images.partner_logo_7.childImageSharp} dimensions={partnersLogoDimensions[7]} />
            <PartnersMarqueeCard image={images.partner_logo_8.childImageSharp} dimensions={partnersLogoDimensions[8]} />
          </ul>
        </Marquee>
      </div>
    </section>
  )
}