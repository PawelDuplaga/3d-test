'use client'

import { useState } from 'react';
import styles from './styles.module.scss';
import ThreeThing from '../ThreeThing';


const Hero = () => {

  const [isExpanded, setIsExpanded] = useState(false);


  return (
		<div className={styles.heroContainer}>
      <div className={styles.flexLeft}>
        <h1 className={styles.heroTitle}>
          Let’s{" "}
          <span 
            className={styles.expandWord}
            onMouseEnter={() => setIsExpanded((current) => !current)}
            onMouseLeave={() => setIsExpanded((current) => !current)}
          >
            Expand
          </span>
          <br/>
          Your Ideas
        </h1>
      </div>
      <div className={styles.magicElement}>
        <ThreeThing expanded={isExpanded}/>
      </div>
		</div>
  );
};

export default Hero;