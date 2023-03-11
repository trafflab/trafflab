import '../../../../styles/global.css';
import * as React from "react";
import * as styles from './index-page-layout.module.css';

import { Header, Opening, Footer  } from "../../sections";
import { SuccessMessage, FixedContacts } from '../../elements';
import BackgroundItems from "./background-items/background-items";
import { MessagesContext } from '../../../../utils/contexts';
import { NavPopup } from '../../popups';

export default function IndexPageLayout({ children, openFormPopupHandler }) {

  const [ navPopupOpen, setNavPopupOpen ] = React.useState(false);
  const openNavPopup = () =>  setNavPopupOpen(true);
  const closeNavPopup = () => setNavPopupOpen(false);

  const [isSuccessMessage, setIsSuccessMessage] = React.useState(false);
  const pageRef = React.useRef();
  const smoothScrollToHeader = () => pageRef.current.scrollIntoView({behavior: 'smooth'});
  
  const showSuccessMessage = () => {
    setIsSuccessMessage(true)
    setTimeout(() => setIsSuccessMessage(false), 2000)
  } 

  return (
    <MessagesContext.Provider value={showSuccessMessage}>
      <div ref={pageRef} className={styles.page}>
        
        <div className={styles.content}>
          <div className={styles.openingContainer}>
            <Header openNavPopupHandler={openNavPopup}/>
            <Opening openFormPopupHandler={openFormPopupHandler} />
            <div className={styles.openingBubble} />
          </div>
          <main className={styles.main}>
            { children }
          </main>
          <Footer />

          <FixedContacts scrollHandler={smoothScrollToHeader}/>
          <NavPopup isOpen={navPopupOpen} closeHandler={closeNavPopup}/>
        </div>
        
        <SuccessMessage isShown={isSuccessMessage} />
        <BackgroundItems />

      </div>
    </MessagesContext.Provider>
  )
}