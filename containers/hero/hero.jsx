import styles from './hero.module.scss';
import Image from 'next/image';
import Carousel from '../caorousel/carousel';
import images from '../../data/carouselData.json';
import SectionMainTitle from '../../components/sectionMainTitle/sectionMainTitle';
import Section from '../section/section';

const Hero = ({children}) => {
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
