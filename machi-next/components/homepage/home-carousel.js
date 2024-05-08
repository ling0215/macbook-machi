import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default function HomeCarousel() {
  return (
    <>
      <div
        id="HomeCarousel"
        className="HomeCarousel"
        data-bs-ride="carousel"
        style={{    // 輪播滿版
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
        }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#HomeCarousel"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#HomeCarousel"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#HomeCarousel"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#HomeCarousel"
            data-bs-slide-to={3}
            aria-label="Slide 4"
          />
          <button
            type="button"
            data-bs-target="#HomeCarousel"
            data-bs-slide-to={4}
            aria-label="Slide 5"
          />
          <button
            type="button"
            data-bs-target="#HomeCarousel"
            data-bs-slide-to={5}
            aria-label="Slide 6"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/images/heroes/slider1.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/images/heroes/slider2.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/images/heroes/slider3.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/images/heroes/slider4.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Fourth slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/images/heroes/slider5.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Fifth slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/images/heroes/slider6.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Sixth slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#HomeCarousel"
          data-bs-slide="prev"
          style={{
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#HomeCarousel"
          data-bs-slide="next"
          style={{
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* <Swiper
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
      </Swiper> */}
    </>
  )
}
