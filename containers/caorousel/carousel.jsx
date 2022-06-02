import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from 'swiper';

import {useState, useEffect} from 'react';

const Carousel = ({images}) => {
  console.log(images);

  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselSlides = images.map(({alt, src}) => {
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
  });

  return (
    <div style={{height: '100%'}}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{clickable: true}}
        scrollbar={{draggable: true}}
        autoplay={{delay: 300}}
        loop
        freeMode
        loopedSlides={3}
        mousewheel={{releaseOnEdges: true}}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        style={{height: '100%'}}
      >
        {carouselSlides}
      </Swiper>
    </div>
  );
};

export default Carousel;
