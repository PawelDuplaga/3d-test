'use client'

import ThreeThing from '@/components/ThreeThing';
import styles from './styles.module.scss';
import { useState } from 'react';

const Home = () => {

  const [ isExpanded, setIsExpanded ] = useState(false);


  return (
		<div className={styles.homeContainer}>
      <button 
        className={styles.button} 
        onClick={() => setIsExpanded((current) => !current)}
        >Expand
      </button>
      <div className={styles.t3container}>
      <ThreeThing expanded={isExpanded} transform='translateY(600px)'/>

      </div>
      {/* <ThreeThing expanded={isExpanded} transform='translateY(-400px)'/> */}
		</div>
  );
};

export default Home