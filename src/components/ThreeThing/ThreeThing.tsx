'use client'

import { useEffect, useMemo, useRef } from 'react';
import styles from './styles.module.scss';
import { VanillaTilt }  from "../../scripts/vanilla-tilts-custom-mini";
import SmallerBoxes from './SmallBox/SmallerBoxes';

const options = {
  scale: 1.1,
  speed: 700,
  max: 60,
  reverse: true,
  mouseXOffset: 0,
  mouseYOffset: 400,
}

type TProps = {
  expanded : boolean
  animated? : boolean
  transform?: string
  range1?: number
  range2?: number
}



const ThreeThing = ({expanded, transform, animated = false, range2 = 400}: TProps) => {
  const tilt = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if(tilt.current !== null){
      VanillaTilt.init(tilt.current, options);
    }
  }, [tilt]);
  
  const smallBoxesFront = useMemo(() => {
    return (
      <SmallerBoxes 
        expanded={expanded}
        animated={animated}
        count={40}
        color='1px solid #cacfd65e'
        sizeMin={40}
        transitionDelayIndexSub={400}
        sizeIndexMultiplier={1.6}
        rangeTranslateZ={340}
        overallDeg={180}
     /> )
  }, [expanded, animated])

  const smallBoxesBack = useMemo(() => {
    return (
      <SmallerBoxes 
        expanded={expanded}
        animated={animated}
        count={40}
        color='1px solid #cacfd65e'
        sizeMin={40}
        sizeIndexMultiplier={1.6}
        transitionDelayIndexSub={400}
        rangeTranslateZ={-340}
        overallDeg={180}
        indexStart={1}
     /> )
  }, [expanded, animated])

  const bigBoxesFront = useMemo(() => {
    return (
      <SmallerBoxes 
        expanded={expanded}
        count={30}
        color='2px solid #f85a3e3f'
        sizeMin={100}
        sizeIndexMultiplier={3}
        transitionDelayIndexSub={200}
        rangeTranslateZ={340}
        overallDeg={180}
      /> )
  }, [expanded])
 
  const bigBoxesBack = useMemo(() => {
    return (
      <SmallerBoxes 
        expanded={expanded}
        count={30}
        color='2px solid #f85a3e3f'
        sizeMin={100}
        sizeIndexMultiplier={3}
        transitionDelayIndexSub={200}
        rangeTranslateZ={-340}
        overallDeg={-180}
        indexStart={1}
      /> )
  },[expanded])

  const smallBoxMaskAnim = expanded ? styles.smallBoxMaskAfter : styles.smallBoxMaskBefore;

  return (
		<div>
      <div 
        ref={tilt} 
        className={styles.box}
        style={{ transform: transform}} 
        data-tilt-full-page-listening>
          {smallBoxesBack}
          {smallBoxesFront}
          {bigBoxesBack}
          {bigBoxesFront}
          {/* <div className={`${styles.smallBoxMask} ${smallBoxMaskAnim}`}></div> */}
      </div>
    </div>
  );
};

export default ThreeThing