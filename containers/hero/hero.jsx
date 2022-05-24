import BackgroundImage from '../../components/backgroundImage/backgroundImage';
import styles from './hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      Hero
      <BackgroundImage url="/images/hero.jpg" />
    </div>
  );
};

export default Hero;
