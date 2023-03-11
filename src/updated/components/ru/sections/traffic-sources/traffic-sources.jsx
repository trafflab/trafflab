import * as React from "react"
import * as styles from './traffic-sources.module.css';
import { useStaticQuery, graphql } from "gatsby";

import { SectionContentLayout } from "../../../common";
import TrafficSourcesCard from "./card/traffic-sources-card";

export default function TrafficSources() {
  const images = useStaticQuery(graphql`
  query TrafficSourcesQuery {
    aso: file(name: {eq: "traffic-sources-aso"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          sizes: "(max-width: 480px) 1px, 1000000px"
          breakpoints: [196, 360]
          layout: FULL_WIDTH
        )
      }
    }

    fb: file(name: {eq: "traffic-sources-fb"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          sizes: "(max-width: 480px) 1px, 1000000px"
          breakpoints: [196,360]
          layout: FULL_WIDTH
        )
      }
    }

    other: file(name: {eq: "traffic-sources-other"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          sizes: "(max-width: 480px) 1px, 1000000px"
          breakpoints: [196, 360]
          layout: FULL_WIDTH
        )
      }
    }

    pc: file(name: {eq: "traffic-sources-pc"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          sizes: "(max-width: 480px) 1px, 1000000px"
          breakpoints: [196, 360]
          layout: FULL_WIDTH
        )
      }
    }

    seo: file(name: {eq: "traffic-sources-seo"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          sizes: "(max-width: 480px) 1px, 1000000px"
          breakpoints: [196, 360]
          layout: FULL_WIDTH
        )
      }
    }

    tt: file(name: {eq: "traffic-sources-tt"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          sizes: "(max-width: 480px) 1px, 1000000px"
          breakpoints: [196, 360]
          layout: FULL_WIDTH
        )
      }
    }

    uac: file(name: {eq: "traffic-sources-uac"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          sizes: "(max-width: 480px) 1px, 1000000px"
          breakpoints: [196, 360]
          layout: FULL_WIDTH
        )
      }
    }

    unity: file(name: {eq: "traffic-sources-unity"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          sizes: "(max-width: 480px) 1px, 1000000px"
          breakpoints: [196, 360]
          layout: FULL_WIDTH
        )
      }
    }
  }
  `)

  return (
    <section id='sources' className={styles.trafficSources}>
      <SectionContentLayout
        titleFirstPart='Traffic'
        titleSecondPart='Sources'
        text='Мы предложим лучшие условия под твой источник трафика, просто дай нам максимально информации о своем подходе, а дальше наша команда всё сделает за тебя'
        textStyle={{width: '550rem'}}
      >
        <ul className={styles.list}>
          <TrafficSourcesCard image={images.fb.childImageSharp} title='Facebook' />
          <TrafficSourcesCard image={images.tt.childImageSharp} isDownPosition={true}  title='Tiktok' />
          <TrafficSourcesCard image={images.uac.childImageSharp} title='Google Ads UAC' />
          <TrafficSourcesCard image={images.unity.childImageSharp} isDownPosition={true}  title='In-app' />
          <TrafficSourcesCard image={images.seo.childImageSharp} title='SEO' />
          <TrafficSourcesCard image={images.pc.childImageSharp} isDownPosition={true}  title='PPC' />
          <TrafficSourcesCard image={images.aso.childImageSharp} title='ASO' />
          <TrafficSourcesCard image={images.other.childImageSharp} isDownPosition={true} title='Предложи свой'/>
        </ul>
      </SectionContentLayout>
    </section>
  )
  
}