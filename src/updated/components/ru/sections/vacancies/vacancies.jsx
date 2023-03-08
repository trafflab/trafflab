import * as React from "react"
import * as styles from './Vacancies.module.css';
import { SplideSlide } from '@splidejs/react-splide';

import { SliderLayout, SectionContentLayout } from "../../../common";
import VacanciesCard from "./Card/VacanciesCard";

const vacanciesData = [
  {
    status: 'Удалённо',
    speciality: 'Data scientist',
    experience: 'от 1 года',
    about: 'Сбор, анализ, структурирование данных компании. Подготовка отчетов и поиск оптимальных решений для обработки информации'
  },
  {
    status: 'Удалённо',
    speciality: 'Swift developer',
    experience: 'от 1 года',
    about: 'Разработка необходимого ПО, приложений на базе IOS'
  },
  {
    status: 'Удалённо',
    speciality: 'Media buyer',
    experience: 'от 1 года',
    about: 'Работа с рекламными сетями (Facebook, TikTok, Google), залив трафика и поиск новых связок'
  },
  {
    status: 'Удалённо',
    speciality: 'Affiliate manager',
    experience: 'от 1 года',
    about: 'Поиск новых вебмастеров, коммуникация, помощь, сбор обратной связи'
  },
  {
    status: 'Удалённо',
    speciality: 'Systems Analyst',
    experience: 'от 3 лет',
    about: 'Технический анализ работы отделов компании, поиск недостатков, формулировка задач по разработке необходимых решений и ПО'
  },
  {
    status: 'Удалённо',
    speciality: 'HR Business Partner',
    experience: 'от 2 лет',
    about: 'Поиск новых сотрудников, тимбилдинг и управление персоналом'
  },
]

export default function Vacancies() {

  return (
    <section id='vacancies' className={styles.vacancies}>
      <SectionContentLayout
        titleSecondPart='вакансии'
        text='Trafflab постоянно растет. У тебя есть навыки кодинга, ты делаешь успехи в дизайне или всегда знаешь, где найти профитные связки? У нас есть выгодное предложение! Trafflab - международная компания, работающая по единому принципу: win-win. Работай удаленно из удобной точки планеты, развивайся, а мы дадим все для этого необходимое.'
        textStyle={{width: '1150rem'}}
      >
        <ul className={styles.list}>
          <SliderLayout>
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