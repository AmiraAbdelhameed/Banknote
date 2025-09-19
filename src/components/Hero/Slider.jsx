import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  const images = [
    "./images/heroSection/slider/slider1.jpg",
    "./images/heroSection/slider/slider2.jpg",
    "./images/heroSection/slider/slider3.jpg",
    "./images/heroSection/slider/slider4.jpg",
    "./images/heroSection/slider/slider5.jpg",
    "./images/heroSection/slider/slider6.jpg",
    "./images/heroSection/slider/slider7.jpg",
    "./images/heroSection/slider/slider8.jpg",
    "./images/heroSection/slider/slider9.jpg",
  ];

  return (
    <div className="slider bg-[url(/images/heroSection/background.png)] bg-no-repeat relative overflow-hidden py-10">

      <div className="absolute top-0 left-0">
        <img
          src="./images/heroSection/offer.png"
          alt="offer"
          className="z-10 relative"
        />
      </div>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        centeredSlides={true}
        loop={true}
        slidesPerView={5} 
        spaceBetween={15}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="w-full  mx-auto"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={img}
              alt={`slider-${index}`}
              className="rounded-[110px] object-cover mt-7  w-[170px] h-[255px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>

    
    </div>
  );
};

export default Slider;
