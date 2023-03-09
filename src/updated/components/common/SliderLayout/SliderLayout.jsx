import * as React from "react"
import * as styles from './SliderLayout.module.css';
import { Splide, SplideTrack} from '@splidejs/react-splide';
import SliderLayoutArrow from "./Arrow/SliderLayoutArrow";

export default function SliderLayout({ children, options, isArrows=true }) {

  return (
    <Splide hasTrack={ false } options={options}>

      <div className={`splide__arrows ${styles.arrowContainer}`}>
        <button className={`splide__arrow splide__arrow--prev ${styles.prevArrow}`} data-arrows={isArrows}>
          <SliderLayoutArrow isLeft={true}/>
        </button> 

        <SplideTrack>
          {children}
        </SplideTrack>

        <button className={`splide__arrow splide__arrow--next ${styles.nextArrow}`} data-arrows={isArrows}>
          <SliderLayoutArrow isLeft={false}/>
        </button>

      </div>
    </Splide>
  )
}