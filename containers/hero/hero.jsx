import styles from './hero.module.scss';
import Image from 'next/image';
import Carousel from '../caorousel/carousel';
import images from '../../data/carouselData.json';

const Hero = ({children}) => {
  console.log('images', images);

  return (
    <div className={styles.hero}>
      <div className={styles.background}>
        <Carousel images={images} />
      </div>
      {children}
    </div>
  );
};

export default Hero;
