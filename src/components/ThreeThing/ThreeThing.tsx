'use client'

import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './styles.module.scss';
import VanillaTilt from "vanilla-tilt";

const options = {
  scale: 1.1,
  speed: 700,
  max: 60,
  reverse: true,
  startX: 30,
  startY: 30
}

type TProps = {
  expanded : boolean
  transform: string
}

// const circles : number [] = Array.from({ length: 100 }, (_, index) => index);


const ThreeThing = ({expanded, transform}: TProps) => {
  const tilt = useRef<HTMLDivElement>(null);
  

  const coloredCircles = useMemo(() => {
    return Array.from({ length: 60 }, () => 1);
  }, []);

  const coloredCirclesX = useMemo(() => {
    return Array.from({ length: 30 }, () => 1);
  }, []);

  useEffect(() => {
    if(tilt.current !== null){
      VanillaTilt.init(tilt.current, options);
    }
  }, [tilt]);
  
 
  
  const circlesMappedFront = useMemo(() => {
    return coloredCircles.map((color, index) => {
      const translateZ = expanded ? `translateZ(${index*(600/coloredCircles.length)}px)` : ``;

      return (
        <div key={index} className={styles.circle} style={{
          transform: `rotate(${index*(360/coloredCircles.length)}deg) translateX(150px) ${translateZ}`,
          backgroundColor: `rgba(215,196,149,${1/(1 + index/15)})`
        }}></div>
        
        )
    })
  } ,[expanded])

  const circlesMappedBack = useMemo(() => {
    return coloredCircles.map((color, index) => {
      const translateZ = expanded ? `translateZ(${index*(-600/coloredCircles.length)}px)` : ``;

      return (
        <div key={index} className={styles.circle} style={{
          transform: `rotate(${index*(-360/coloredCircles.length)}deg) translateX(150px) ${translateZ}`,
          backgroundColor: `rgba(215,196,149,${1/(1 + index/20)})`
        }}></div>
        )
    })
  } ,[expanded])

  const circlesMappedFrontX = useMemo(() => {
    return coloredCirclesX.map((color, index) => {
      const translateZ = expanded ? `translateZ(${index*(500/coloredCirclesX.length)}px)` : ``;

      return (
        <div key={index} className={styles.circle} style={{
          transform: `rotate(${index*(180/coloredCirclesX.length)}deg) translateX(-150px) ${translateZ}`,
          backgroundColor: `rgba(161,146,107,${1/(1 + index/15)})`
        }}></div>
        
        )
    })
  } ,[expanded, coloredCircles])

  const circlesMappedBackX = useMemo(() => {
    return coloredCirclesX.map((color, index) => {
      const translateZ = expanded ? `translateZ(${index*(-500/coloredCirclesX.length)}px)` : ``;

      return (
        <div key={index} className={styles.circle} style={{
          transform: `rotate(${index*(-180/coloredCirclesX.length)}deg) translateX(-150px) ${translateZ}`,
          backgroundColor: `rgba(161,146,107,${1/(1 + index/20)})`
        }}></div>
        )
    })
  } ,[expanded])



  const box02Ex = expanded ? styles.box02Ex : '';
  const box01Ex = expanded ? styles.box01Ex : '';
  const box1Ex = expanded ? styles.box1Ex : '';
  const box2Ex = expanded ? styles.box2Ex : '';

  const border = expanded ? styles.border1 : styles.border0;

  return (
		<div>
      <div 
        ref={tilt} 
        className={styles.box}
        style={{ transform: transform}} 
        data-tilt-full-page-listening>
          <div className={`${styles.box_} ${box02Ex} ${border}`}></div>
          <div className={`${styles.box_} ${box01Ex} ${border}`}></div>
          <div className={`${styles.box_} ${box1Ex} ${border}`}></div>
          <div className={`${styles.box_} ${box2Ex} ${border}`}></div>
          {/* <div className={styles.mainCircle}></div> */}
            {circlesMappedFront}
            {circlesMappedBack}
            {circlesMappedFrontX}
            {circlesMappedBackX}
      </div>
    </div>
  );
};

export default ThreeThing