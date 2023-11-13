'use client'

import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { VanillaTilt }  from "../../scripts/vanilla-tilts-custom-mini";

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
  transform?: string
}



const ThreeThing = ({expanded, transform}: TProps) => {
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
  
 
  
  const boxesMappedFront = useMemo(() => {
    return smallBoxes.map((color, index) => {
      const translateZ = expanded 
      ? `translateZ(${index*(400/smallBoxes.length)}px) rotate(${index*(180/smallBoxes.length)}deg)` 
      : ``;

      return (
        <div key={index} className={styles.smallBox} style={{
          transform: `${translateZ}`,
          width: index*1.6 + 40,
          height: index*1.6 + 40,
        }}></div>
        
        )
    })
  } ,[expanded])

  const boxesMappedBack = useMemo(() => {
    return smallBoxes.map((color, index) => {
      if (index === 0) return
      const translateZ = expanded 
      ? `translateZ(${index*(-400/smallBoxes.length)}px) rotate(${index*(-180/smallBoxes.length)}deg)` 
      : ``;

      return (
        <div key={index} className={styles.smallBox} style={{
          transform: `${translateZ}`,
          width: index*1.6 + 40,
          height: index*1.6 + 40,
        }}></div>
        )
    })
  } ,[expanded])


  
  const customBoxClonesMappedFront = useMemo(() => {
    return customBoxClones.map((color, index) => {
      const translateZ = expanded 
      ? `translateZ(${index*(400/customBoxClones.length)}px) rotate(${index*(180/customBoxClones.length)}deg)` 
      : ``;

      return (
        <div key={index} className={styles.customBoxOutside} style={{
          transform: `${translateZ}`,
          // width: 140-index*1.6,
          // height: 140-index*1.6,
          width: index*3 + 100,
          height: index*3 + 100,
          transition: `all 0.3s ease-in-out ${index/200}s`
          // transitionDelay: `${index}ms`,
          // transitionProperty: "all"
        }}></div>
        
        )
    })
  } ,[expanded])


  const customBoxClonesMappedBack = useMemo(() => {
    return customBoxClones.map((color, index) => {
      if (index === 0) return
      const translateZ = expanded 
      ? `translateZ(${index*(-400/customBoxClones.length)}px) rotate(${index*(-180/customBoxClones.length)}deg)` 
      : ``;

      return (
        <div key={index} className={styles.customBoxOutside} style={{
          transform: `${translateZ}`,
          // width: 140-index*1.6,
          // height: 140-index*1.6,
          width: index*3 + 100,
          height: index*3 + 100,
          transition: `all 0.3s ease-in-out ${index/200}s`
        }}></div>
        )
    })
  } ,[expanded])



  const smallBoxMaskAnim = expanded ? styles.smallBoxMaskAfter : styles.smallBoxMaskBefore;

  return (
		<div>
      <div 
        ref={tilt} 
        className={styles.box}
        style={{ transform: transform}} 
        data-tilt-full-page-listening>
            {boxesMappedBack}
            {boxesMappedFront}
            {customBoxClonesMappedFront}
            {customBoxClonesMappedBack}
            <div className={`${styles.smallBoxMask} ${smallBoxMaskAnim}`}></div>
      </div>
    </div>
  );
};

export default ThreeThing