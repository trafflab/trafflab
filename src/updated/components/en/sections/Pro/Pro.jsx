import * as React from "react"
import * as styles from './Pro.module.css';
import { useStaticQuery, graphql } from "gatsby";
import { SplideSlide } from '@splidejs/react-splide';

import { SliderLayout, SectionContentLayout } from "../../../common";
import ProCard from "./Card/ProCard";

const prosData = [
  {
    photoAlt: 'Trafflab Тамерлан',
    about: [
      '7+ лет практического опыта залива гемблинг-трафика',
      'Спикер международных конференций'
    ]
  },
  {
    photoAlt: 'Trafflab Аня',
    about: [
      'Опыт в гемблинге 5+ лет',
      'За честный подход к работе: пресекает шейв на корню',
      'С ней веб-мастера заработали   $10 000 000+'
    ]
  },
  {
    photoAlt: 'Trafflab Дима',
    about: [
      '5+ лет находит общий язык с бурж реклами',
      'Каждый продукт перепроверяет лично и знает, что конвертит',
      'Защитил срезанный траф перед рекламодателями на $4 000 000+'
    ]
  }
]

const SliderOptions = {
  type: 'slide',
  gap: '75rem',
  pagination: false,
  autoWidth: true,
  snap: true,
  drag: false,
  breakpoints: {
    480: {
      gap: '20rem',
      drag: 'free',
    },
  }
}

export default function Pro() {
  const images = useStaticQuery(graphql`
  query ProEnQuery {
    pro_1: file(name: {eq: "pro-1"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          sizes: "(max-width: 480px) 1px, 1000000px"
          breakpoints: [204, 1080]
          layout: FULL_WIDTH
        )
      }
    }

    pro_2: file(name: {eq: "pro-2"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          sizes: "(max-width: 480px) 1px, 1000000px"
          breakpoints: [204, 1080]
          layout: FULL_WIDTH
        )
      }
    }

    pro_3: file(name: {eq: "pro-3"}) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: {quality: 85}
          sizes: "(max-width: 480px) 1px, 1000000px"
          breakpoints: [204, 1080]
          layout: FULL_WIDTH
        )
      }
    }
  }
  `)
  return (
    <section id='pro' className={styles.pro}>
      <SectionContentLayout
        titleSecondPart='PRO'
        text='Trafflab - международная компания. В команде профессионалы в сфере iGaming и EDTech с 7+ летним опытом. Базируемся в Украине, Беларуси, во Франции и на Кипре, а также в некоторых азиатских странах. У нас нет предпочтений по национальному, гражданскому или гендерному признаку. Мы говорим на разных языках, в разных странах, но строим взаимодействие со всеми партнерами по единому принципу: win-win.'
        textStyle={{width: '1150rem'}}
      >
        <div className={styles.splideContainer}>
          <SliderLayout options={SliderOptions} isArrows={false}>
            <SplideSlide><ProCard proData={prosData[0]} proImage={images.pro_1.childImageSharp}/></SplideSlide>
            <SplideSlide><ProCard proData={prosData[1]} proImage={images.pro_2.childImageSharp}/></SplideSlide>
            <SplideSlide><ProCard proData={prosData[2]} proImage={images.pro_3.childImageSharp}/></SplideSlide>  
          </SliderLayout>
        </div>
      </SectionContentLayout>
    </section>
  )
}