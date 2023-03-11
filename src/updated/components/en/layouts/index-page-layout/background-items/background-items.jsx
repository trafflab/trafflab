import * as React from "react";
import * as styles from './background-items.module.css';
import AnimatedLine from "./animated-line/animated-line";

export default function BackgroundItems() {
  const [ offset, setOffset ] = React.useState(0)

  React.useEffect(() => {
    const docHeight = document.body.scrollHeight
    const factor = window.matchMedia('(max-width: 480px)').matches ? 120 : 100;
    const ratio = factor / docHeight
    const handleScroll = () => setOffset(window.pageYOffset * ratio)

    handleScroll()
    window.addEventListener('scroll', handleScroll, {passive: true})
    return () => window.removeEventListener('scroll', handleScroll, {passive: true})
  }, [])


  return (
    <div className={styles.backgroundItems}>
      <div id='backNet'/>
      <div id='backNet'/>
      <div id='backNet'/>
      {/* <div id='backNet'/> */}
      
      <div id='backLine'><AnimatedLine position={offset}/></div>
      <div id='backLine'><AnimatedLine position={offset} isRight={true} /></div>
      <div id='backLine'><AnimatedLine position={offset}/></div>
      {/* <div id='backLine'><AnimatedLine position={offset} isRight={true} /></div> */}
      
      <div id='backBubble'/>
      <div id='backBubble'/>
      <div id='backBubble'/>
      <div id='backBubble'/>
      <div id='backBubble'/>
      {/* <div id='backBubble'/> */}
    </div>
  )
}