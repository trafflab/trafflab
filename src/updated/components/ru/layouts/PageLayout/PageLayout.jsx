// import '../../../styles/global.css';
// import * as React from "react";
// import * as styles from './IndexPageLayout.module.css';

// import { Header, Opening, Footer  } from "../../sections";
// import { SuccessMessage, FixedContacts } from '../../elements';

// // import BackgroundItems from "./BackgroundItems/BackgroundItems";

// import { MessagesContext } from '../../../../utils/contexts';

// export default function IndexPageLayout({ children, openFormPopupHandler, openNavPopupHandler }) {
  
//   const [isSuccessMessage, setIsSuccessMessage] = React.useState(false);
//   const pageRef = React.useRef();
//   const smoothScrollToHeader = () => pageRef.current.scrollIntoView({behavior: 'smooth'});
  
//   const showSuccessMessage = () => {
//     setIsSuccessMessage(true)
//     setTimeout(() => setIsSuccessMessage(false), 2000)
//   } 

//   return (
//     <MessagesContext.Provider value={showSuccessMessage}>
//       <div ref={pageRef} className={styles.page}>
        
//         <div className={styles.content}>
//           <div className={styles.openingContainer}>
//             <Header openNavPopupHandler={openNavPopupHandler}/>
//             <Opening openFormPopupHandler={openFormPopupHandler} />
//             <div className={styles.openingBubble} />
//           </div>
//           <main className={styles.main}>
//             { children }
//           </main>
//           <Footer />

//           <FixedContacts scrollHandler={smoothScrollToHeader}/>
//           {/* <BackgroundItems /> */}
//         </div>
//         <SuccessMessage isShown={isSuccessMessage} />
//       </div>
//     </MessagesContext.Provider>
//   )
// }