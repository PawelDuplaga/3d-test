import ThreeThing from '@/components/ThreeThing';
import styles from './styles.module.scss';

const Home = () => {
  return (
		<div className={styles.homeContainer}>
      <button className={styles.button}>Expand</button>
      <ThreeThing />
		</div>
  );
};

export default Home