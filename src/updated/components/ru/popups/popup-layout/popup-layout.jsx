import * as React from "react"
import * as styles from './popup-layout.module.css';
import useDelayUnmountState from '../../../../hooks/use-delay-unmount-state';
import ReactDOM from "react-dom";

const portalRoot = typeof document !== 'undefined' ? document.getElementById('___portal') : null
const delay = 200;

export default function PopupLayout({children, isOpen, closeHandler}) {
  
  const shouldMount = useDelayUnmountState(isOpen, delay);
  const animation = isOpen ? {animation: `openAniamtion ${delay}ms ease-out`} : {animation: `closeAniamtion ${delay}ms ease-out forwards`}

  const overlayClose = (evt) => {
    console.log(evt.target.classList)
    if (evt.target.classList.contains(styles.popupLayout)) closeHandler()
  }
  React.useEffect(() => {
    if (shouldMount) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }, [shouldMount])
  
  return (
    (shouldMount && portalRoot)
      ? ReactDOM.createPortal((
          <section
            onClick={overlayClose}
            className={styles.popupLayout}
            style={{...animation}}
          >
            {children}
          </section>
        ), portalRoot)
      : null
  )
}