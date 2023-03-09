import '../../../../styles/global.css';
import * as React from "react";
import * as styles from './PageLayout.module.css';

import { Header, Footer } from "../../sections";
import { FixedContacts } from '../../elements';
import { NavPopup } from '../../popups';

export default function PageLayout({ children }) {
  
  const [ navPopupOpen, setNavPopupOpen ] = React.useState(false);
  const openNavPopup = () =>  setNavPopupOpen(true);
  const closeNavPopup = () => setNavPopupOpen(false);

  const pageRef = React.useRef();
  const smoothScrollToHeader = () => pageRef.current.scrollIntoView({behavior: 'smooth'});

  return (
      <div ref={pageRef} className={styles.page}>
        <Header openNavPopupHandler={openNavPopup}/>
        
        <div className={styles.content}>
          <main className={styles.main}>
            { children }
          </main>

          <FixedContacts scrollHandler={smoothScrollToHeader}/>
          <NavPopup isOpen={navPopupOpen} closeHandler={closeNavPopup}/>
        </div>

        <Footer />
      </div>
  )
}