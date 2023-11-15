'use client'

import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './styles.module.scss';
import ThreeThing from '../ThreeThing';


const Hero = () => {
  // console.log("RERENDER")

  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [dragDiff, setDragDiff] = useState(0);
  const [startDragXCordinate, setStartDragXCordinat] = useState<number>()
  const fontElemRef = useRef<HTMLDivElement>(null);



  useEffect(() => {
    // console.log(fontElemRef)
    // const targetElement = fontElemRef.current;
    // if (targetElement) {
    //   const elementRect = targetElement.getBoundingClientRect();
    //   const elementX = elementRect.left + elementRect.width / 2;
    //   const elementY = elementRect.top + elementRect.height / 2;

    //   console.log('Element Coordinates:', { x: elementX, y: elementY });
    //   setFontElemXCordinate(elementX)
    // }
  },[])

  const handleDragStart = (e : any) => {
    setStartDragXCordinat(e.clientX);

  }

  const handleDragEnd = (e : any) => {
    if (startDragXCordinate) {
      const newDragOffset = e.clientX;
      setDragDiff(-(startDragXCordinate - newDragOffset));
      console.log(startDragXCordinate - newDragOffset)
    }
  }


  const handleDrag = (e : any) => {  
    // if (startDragXCordinate) {
    //   const newDragOffset = e.clientX;
    //   setDragDiff(-(startDragXCordinate - newDragOffset));
    //   console.log(startDragXCordinate - newDragOffset)
    // }
  };

  return (
		<div className={styles.heroContainer}>
      <div className={styles.flexLeft}>
        <h1 className={styles.heroTitle}>
          Let’s{" "}
          <span
            className={styles.expandWord}
            onMouseEnter={() => setIsExpanded((current) => !current)}
            onMouseLeave={() => setIsExpanded((current) => !current)}
            onClick={() => setIsAnimated((current) => !current)}
          >
            <div
              draggable
              ref={fontElemRef} 
              className={styles.draggableMask}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              onDrag={handleDrag}
            ></div>
            Expand
          </span>
          <br/>
          Your Ideas
        </h1>
      </div>
      <div className={styles.magicElement}>
        <ThreeThing expanded={isExpanded} animated={isAnimated} range1={400} range2={400}/>
      </div>
		</div>
  );
};

export default Hero;