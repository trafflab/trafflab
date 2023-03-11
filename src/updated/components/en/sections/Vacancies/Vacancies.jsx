import * as React from "react"
import * as styles from './vacancies.module.css';
import { SplideSlide } from '@splidejs/react-splide';

import { SliderLayout, SectionContentLayout } from "../../../common";
import VacanciesCard from "./card/vacancies-card";

const vacanciesData = [
  {
    status: "Remotely",
    speciality: "Data scientist",
    experience: "Experience from 1 year",
    about: "Collection, analysis, and structuring of company data. Preparation of reports and search for optimal solutions for information processing"
  },
  {
    status: "Remotely",
    speciality: "Swift developer",
    experience: "Experience from 1 year",
    about: "Development of necessary software and IOS app"
  },
  {
    status: "Remotely",
    speciality: "Media buyer",
    experience: "Experience from 1 year",
    about: "Working with advertising networks (Facebook, TikTok, Google), attracting traffic and searching for new links"
  },
  {
    status: "Remotely",
    speciality: "Affiliate manager",
    experience: "Experience from 1 year",
    about: "Search for new webmasters, communication, help, feedback collection"
  },
  {
    status: "Remotely",
    speciality: "Systems Analyst",
    experience: "Experience from 3 years",
    about: "Technical analysis of the company departments operation, detection of drawbacks, formulation of tasks for the development of necessary solutions and software"
  },
  {
    status: "Remotely",
    speciality: "HR Business Partner",
    experience: "Experience from 2 years",
    about: "Search for new employees, team building and personnel management"
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

export default function Vacancies() {

  return (
    <section id='vacancies' className={styles.vacancies}>
      <SectionContentLayout
        titleSecondPart='Jobs'
        text='TTrafflab is always looking for professionals in their field. You have coding skills, making progress in design, or always know where to find profitable links? We have a great offer! Trafflab is an international company operating on a single win-win principle. Work remotely from any place you like on the planet, develop, and we will provide everything you need for this.'
        textStyle={{width: '1150rem'}}
      >
        <ul className={styles.list}>
          <SliderLayout options={sliderOptions}>
            {
              vacanciesData.map((vacancyData, index) => (
                <SplideSlide key={index}><VacanciesCard data={vacancyData}/></SplideSlide>
              ))
            }
          </SliderLayout>
        </ul>

      </SectionContentLayout>
    </section>
  )
  
}