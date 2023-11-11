import styles from './styles.module.scss';

const Hero = () => {
  return (
		<div className={styles.heroContainer}>
      <div className={styles.flexLeft}>
        <h1 className={styles.heroTitle}>
          Let’s <span className={styles.expandWord}>Expand</span>
            <br/>
          Your Ideas
        </h1>
      </div>
      <div className={styles.magicElement}>
      </div>
		</div>
  );
};

export default Hero