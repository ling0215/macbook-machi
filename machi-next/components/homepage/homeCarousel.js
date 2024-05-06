import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function HomeCarousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img 
            src="/images/heroes/slider1.jpg" 
            alt="hero image"
            style={{ width: "100%", height: "auto" }} // 確保圖片自適應容器大小
            />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="/images/heroes/slider2.jpg"
            alt="hero image"
            style={{ width: "100%", height: "auto" }}
            />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="/images/heroes/slider3.jpg"
            alt="hero image"
            style={{ width: "100%", height: "auto" }}
            />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="/images/heroes/slider4.jpg"
            alt="hero image"
            style={{ width: "100%", height: "auto" }}
            />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="/images/heroes/slider5.jpg"
            alt="hero image"
            style={{ width: "100%", height: "auto" }}
            />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="/images/heroes/slider6.jpg"
            alt="hero image"
            style={{ width: "100%", height: "auto" }}
            />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
