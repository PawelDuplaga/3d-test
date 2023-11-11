import styles from './styles.module.scss';

const Navbar = () => {
  return (
		<div className={styles.navbarContainer}>
      <nav className={styles.navbar}>
         <h2 className={styles.logoFont}>
            Duplaga
         </h2>
         <div className={styles.leftFlex}>
          <div className={styles.navOptFlex}>
            <p>About Me</p>
            <p>Projects</p>
            <p>Experience</p>
          </div>
          <p className={styles.contact}>Contact</p>
         </div>
      </nav>
		</div>  
  );
};

export default Navbar