import * as React from "react"
import * as styles from './SliderLayout.module.css';
import { Splide, SplideTrack} from '@splidejs/react-splide';
import SliderLayoutArrow from "./Arrow/SliderLayoutArrow";

export default function SliderLayout({ children }) {

  const options = {
    type: 'slide',
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

  return (
    <Splide hasTrack={ false } options={options}>

      <div className={`splide__arrows ${styles.arrowContainer}`}>
        <button className={`splide__arrow splide__arrow--prev ${styles.prevArrow}`}>
          <SliderLayoutArrow isLeft={true}/>
        </button> 

        <SplideTrack>
          {children}
        </SplideTrack>

        <button className={`splide__arrow splide__arrow--next ${styles.nextArrow}`}>
          <SliderLayoutArrow isLeft={false}/>
        </button>

      </div>
    </Splide>
  )
}