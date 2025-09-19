import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


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
    // <div className="slider bg-red-200">
    <div className="slider bg-[url(/images/heroSection/background.png)] bg-cover
 bg-no-repeat relative py-10">

      <div className="absolute top-0 left-0">
        <img
          src="./images/heroSection/offer.png"
          alt="offer"
          className="z-10 relative"
        />
      </div>
<div className="swiper">

  
    <Carousel
        // autoPlay
        infiniteLoop
        interval={3000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        emulateTouch
        centerMode
        centerSlidePercentage={24} 
        className="w-full max-w-5xl mx-auto "

      >
        {images.map((img, index) => (
          <div key={index} className="flex justify-center px-2 py-12">
            <img
              src={img}
              alt={`slider-${index}`}
              className="rounded-[93px] object-cover w-[170px] h-[255px] ml-5"
            />
          </div>
        ))}
      </Carousel>
            </div>
    </div>
  );
};

export default Slider;
