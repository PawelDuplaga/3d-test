import Navbar from '@/components/Navbar';
import styles from './styles.module.scss';
import Hero from '@/components/Hero';

const HomeMain = () => {
  return (
		<div className={styles.homemainContainer}>
      <Navbar />
      <Hero />
		</div>
  );
};

export default HomeMain