import styles from './hero.module.scss';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.background}>
        <Image
          src="/images/hero.jpg"
          alt="Mama s bebom"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Hero;
