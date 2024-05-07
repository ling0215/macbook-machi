import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './featured.module.scss';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function Featured() {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, 'Slide ' + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination, Autoplay]}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        }}
        navigation={true}
        loop={true}
        virtual
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
        
      <p className="append-buttons text-center p-3">
        <button onClick={() => prepend()} className="btn btn-outline-brown prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => slideTo(1)} className="btn btn-outline-brown">
          Slide 1
        </button>
        <button onClick={() => slideTo(250)} className="btn btn-outline-brown slide-250">
          Slide 250
        </button>
        <button onClick={() => slideTo(500)} className="btn btn-outline-brown slide-500">
          Slide 500
        </button>
        <button onClick={() => append()} className="btn btn-outline-brown append-slides">
          Append Slide
        </button>
      </p>
    </>
  );
}
