import Image from 'next/image';
import styles from './hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.background}>
        <Image
          src="/images/hero.jpg"
          width={6000}
          height={4000}
          alt="Mama s bebom"
        />
      </div>
    </div>
  );
};

export default Hero;
