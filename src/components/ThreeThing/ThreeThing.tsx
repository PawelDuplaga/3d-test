'use client'

import { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import VanillaTilt from "vanilla-tilt";

const options = {
  scale: 1.1,
  speed: 700,
  max: 20
}

const ThreeThing = () => {
  const tilt = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(tilt.current !== null){
      VanillaTilt.init(tilt.current, options);
    }
  }, [tilt]);


  return (
		<div ref={tilt} className={styles.box} data-tilt-full-page-listening>
      <div className={styles.box01}></div>
      <div className={styles.box02}></div>
      <div className={styles.box1}></div>
      <div className={styles.box2}></div>
    </div>
  );
};

export default ThreeThing