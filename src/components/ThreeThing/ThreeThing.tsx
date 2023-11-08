'use client'

import { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import VanillaTilt from "vanilla-tilt";

const options = {
  scale: 1.1,
  speed: 700,
  max: 40,
  reverse: true,
}

type TProps = {
  expanded : boolean
}

const ThreeThing = ({expanded}: TProps) => {
  const tilt = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(tilt.current !== null){
      VanillaTilt.init(tilt.current, options);
    }
  }, [tilt]);

  const box02Ex = expanded ? styles.box02Ex : '';
  const box01Ex = expanded ? styles.box01Ex : '';
  const box1Ex = expanded ? styles.box1Ex : '';
  const box2Ex = expanded ? styles.box2Ex : '';

  const border = expanded ? styles.border1 : styles.border0;

  return (
		<div ref={tilt} className={styles.box} data-tilt-full-page-listening>
      <div className={`${styles.box_} ${box02Ex} ${border}`}></div>
      <div className={`${styles.box_} ${box01Ex} ${border}`}>Expand</div>
      <div className={`${styles.box_} ${box1Ex} ${border}`}>Your</div>
      <div className={`${styles.box_} ${box2Ex} ${border}`}>Ideas</div>
    </div>
  );
};

export default ThreeThing