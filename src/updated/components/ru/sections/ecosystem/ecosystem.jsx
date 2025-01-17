import * as React from "react"
import * as styles from './ecosystem.module.css';
import { SplideSlide } from '@splidejs/react-splide';

import { SliderLayout, SectionContentLayout } from "../../../common";
import EcosystemCard from "./card/ecosystem-card";

const ecosystemCardsData = [
  {
    cardClass: 'labCard',
    linkTo: '#lab',
  },
  {
    cardClass: 'edCard',
    linkTo: 'https://trafflab.academy',
  },
  {
    cardClass: 'appsCard',
    linkTo: '#apps',
  },
  {
    cardClass: 'cryptCard',
    linkTo: '#crypt',
  },
  {
    cardClass: 'merchCard',
    linkTo: '#merch',
  },
  {
    cardClass: 'labCard',
    linkTo: '#lab',
  },
  {
    cardClass: 'edCard',
    linkTo: '#education',
  },
  {
    cardClass: 'appsCard',
    linkTo: '#apps',
  },
]

const sliderOptions = {
  type: 'loop',
  gap: '30rem',
  pagination: false,
  autoWidth: true,
  drag: 'free',
  snap: true,
  breakpoints: {
    480: {
      gap: '20rem',
    },
  }
}

export default function Ecosystem() {

  return (
    <section id='ecosystem' className={styles.ecosystem}>
      <SectionContentLayout
        titleSecondPart='ecosystem'
        text='Ad-Tech платформа Trafflab - это готовое решение для специалиста любого уровня. Мы можем научить лить трафик с нуля и пробить потолок твоего дохода. Экосистема подстраивается под новичов и опытных вебов и решает любую задачу вебмастера.'
        textStyle={{width: '950rem'}}
      >
        <ul className={styles.list}>
          <SliderLayout options={sliderOptions}>
            {
              ecosystemCardsData.map((cardData, index) => (
                <SplideSlide key={index}><EcosystemCard cardClass={cardData.cardClass} linkTo={cardData.linkTo}/></SplideSlide>
              ))
            }
          </SliderLayout>
        </ul>

      </SectionContentLayout>
    </section>
  )
  
}