import Image from 'next/image';
import {SwiperSlide} from 'swiper/react';

const CarouselSlide = ({alt, src}) => {
  console.log('url', src);

  return (
    <SwiperSlide>
      <Image
        src={'/images/' + src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        quality={75}
        loading="lazy"
      />
    </SwiperSlide>
  );
};

export default CarouselSlide;
