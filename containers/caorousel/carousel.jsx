import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import {Autoplay, Navigation, Pagination} from 'swiper';

import {useState} from 'react';

const Carousel = ({images}) => {
  const carouselSlides = images.map(({alt, src, priority}) => {
    return (
      <SwiperSlide key={alt}>
        <Image
          src={'/images/' + src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          quality={75}
          loading={priority ? 'eager' : 'lazy'}
          priority={priority}
        />
      </SwiperSlide>
    );
  });

  return (
    <div style={{height: '100%'}}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{clickable: true}}
        loop
        freeMode
        loopedSlides={3}
        mousewheel={{releaseOnEdges: true}}
        style={{height: '100%'}}
        autoplay={{delay: 5000}}
      >
        {carouselSlides}
      </Swiper>
    </div>
  );
};

export default Carousel;
