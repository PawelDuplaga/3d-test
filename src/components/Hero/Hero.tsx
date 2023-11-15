'use client'

import { useState } from 'react';
import styles from './styles.module.scss';
import ThreeThing from '../ThreeThing';


const Hero = () => {


  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  const onMouseLeave = () => {
    setIsExpanded(false);
    setIsAnimated(false);
  }

  const onMouseEnter = () => {
    setIsExpanded(true)
    setIsAnimated(true)
  }


  return (
		<div className={styles.heroContainer}>
      <div className={styles.flexLeft}>
        <h1 className={styles.heroTitle}>
          Let’s{" "}
          <span
            className={styles.expandWord}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={() => setIsAnimated((current) => !current)}
          >
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