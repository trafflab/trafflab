import * as React from "react"
import * as styles from './what-we-do.module.css';
import { FormsContexts } from "../../../../utils/contexts";
import WhatWeDoCard from "./card/what-we-do-card";
import WhatWeDoImage from "./image/what-we-do-image";
import { BasicButton } from "../../../common/ui";
import {
  phoneIcon,
  calendarIcon,
  redCalendarIcon,
  bannerIcon,
  coinIcon,
  sortIcon,
  graphIcon
} from '../../../../images/icons'

export default function WhatWeDo() {
  const { openWebFormPopup } = React.useContext(FormsContexts);

  return (
    <section className={styles.whatWeDo}>
      <div className={styles.content}>
        <WhatWeDoImage />
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Не нужно искать<br/><span>всё уже здесь</span></h2>
          <ul className={styles.list}>
            <WhatWeDoCard icon={bannerIcon} text='Компетентная команда решит любой вопрос за тебя' />
            <WhatWeDoCard icon={calendarIcon} text='Защита трафика от среза и шейва благодаря высоким технологиям в нише ad-tech' />
            <WhatWeDoCard icon={phoneIcon} text='Большой выбор приложений от различных подрядчиков' />
            <WhatWeDoCard icon={sortIcon} text='Еженедельные выплаты' />
            <WhatWeDoCard icon={coinIcon} text='Вывод денег любым удобным способом' />
            <WhatWeDoCard icon={graphIcon} text='Создаем продукты для улучшения профита'/>
            <WhatWeDoCard icon={redCalendarIcon} text='Холд от 7 дней' />
          </ul>
          <div className={styles.buttonContainer}>
            <BasicButton handler={openWebFormPopup} text='Старт!'/>
          </div>
        </div>
      </div>
    </section>
  )
  
}