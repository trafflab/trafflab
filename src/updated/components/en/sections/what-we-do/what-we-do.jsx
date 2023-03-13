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
          <h2 className={styles.title}>All at once!<br/><span>in one place</span></h2>
          <ul className={styles.list}>
            <WhatWeDoCard icon={bannerIcon} text='Custom development of converting creatives' />
            <WhatWeDoCard icon={calendarIcon} text='We help increase the conversion rate and get high rates for your source' />
            <WhatWeDoCard icon={phoneIcon} text='In-house app development for our partners free of charge' />
            <WhatWeDoCard icon={sortIcon} text='Our own payments' />
            <WhatWeDoCard icon={coinIcon} text='Money withdrawal in any convenient way' />
            <WhatWeDoCard icon={graphIcon} text='We create products to improve profit'/>
            <WhatWeDoCard icon={redCalendarIcon} text='Hold up to 14 days' />
          </ul>
          <div className={styles.buttonContainer}>
            <BasicButton handler={openWebFormPopup} text='Join!'/>
          </div>
        </div>
      </div>
    </section>
  )
  
}