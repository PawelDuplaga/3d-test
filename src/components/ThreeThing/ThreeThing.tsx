'use client'

import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './styles.module.scss';
import styled, { keyframes } from 'styled-components'
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



const ThreeThing = ({expanded, transform, animated = false, range1 = 400, range2 = 400}: TProps) => {
  const tilt = useRef<HTMLDivElement>(null);
  

  const smallBoxes = useMemo(() => {
    return Array.from({ length: 50 }, () => 1)
  },[])

  const customBoxClones = useMemo(() => {
    return Array.from({ length: 36 }, () => 1)
  },[])

  useEffect(() => {
    if(tilt.current !== null){
      VanillaTilt.init(tilt.current, options);
    }
  }, [tilt]);
  
 
  // const smallerBoxesMemo = useMemo(() => {
  //   return (
  //     <SmallerBoxes 
  //       expanded = {expanded}
  //       animated = {animated}
  //       length={50}
  //       rangeZ={400}
  //       overallDeg={180}
  //     />
  //   )
  // }, [expanded, animated])

  const boxesMappedFront = useMemo(() => {



    return smallBoxes.map((color, index) => {
      const translateZ = expanded 
      ? `translateZ(${index*(range1/smallBoxes.length)}px) rotate(${index*(180/smallBoxes.length)}deg)` 
      : ``;

      
      return (
        <div key={index} className={styles.smallBox} style={{
          transform: `${translateZ}`,
          width: index*1.6 + 40,
          height: index*1.6 + 40,
        }}></div>
        
        )
    })
  } ,[expanded, range1, smallBoxes])

  const boxesMappedBack = useMemo(() => {
    return smallBoxes.map((color, index) => {
      if (index === 0) return
      const translateZ = expanded 
      ? `translateZ(${index*(-range1/smallBoxes.length)}px) rotate(${index*(-180/smallBoxes.length)}deg)` 
      : ``;

      return (
        <div key={index} className={styles.smallBox} style={{
          transform: `${translateZ}`,
          width: index*1.6 + 40,
          height: index*1.6 + 40,
        }}></div>
        )
    })
  } ,[expanded, range1, smallBoxes])


  
  const customBoxClonesMappedFront = useMemo(() => {
    return customBoxClones.map((color, index) => {
      const translateZ = expanded 
      ? `translateZ(${index*(range2/customBoxClones.length)}px) rotate(${index*(180/customBoxClones.length)}deg)` 
      : ``;

      return (
        <div key={index} className={styles.customBoxOutside} style={{
          transform: `${translateZ}`,
          width: index*3 + 100,
          height: index*3 + 100,
          transition: `all 0.3s ease-in-out ${index/200}s`
        }}></div>
        
        )
    })
  } ,[expanded, range2, customBoxClones])


  const customBoxClonesMappedBack = useMemo(() => {
    return customBoxClones.map((color, index) => {
      if (index === 0) return
      const translateZ = expanded 
      ? `translateZ(${index*(-range2/customBoxClones.length)}px) rotate(${index*(-180/customBoxClones.length)}deg)` 
      : ``;

      return (
        <div key={index} className={styles.customBoxOutside} style={{
          transform: `${translateZ}`,
          width: index*3 + 100,
          height: index*3 + 100,
          transition: `all 0.3s ease-in-out ${index/200}s`
        }}></div>
        )
    })
  } ,[expanded, range2, customBoxClones])



  const smallBoxMaskAnim = expanded ? styles.smallBoxMaskAfter : styles.smallBoxMaskBefore;

  return (
		<div>
      <div 
        ref={tilt} 
        className={styles.box}
        style={{ transform: transform}} 
        data-tilt-full-page-listening>
            {boxesMappedBack}
            {/* {boxesMappedFront} */}
            <SmallerBoxes 
              expanded = {expanded}
              animated = {animated}
              length={50}
              rangeZ={400}
              overallDeg={180}
            />
            {customBoxClonesMappedFront}
            {customBoxClonesMappedBack}
            <div className={`${styles.smallBoxMask} ${smallBoxMaskAnim}`}></div>
      </div>
    </div>
  );
};

export default ThreeThing