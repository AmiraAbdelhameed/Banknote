import React,{useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Carousel } from 'primereact/carousel';

const Slider = () => {
  let images=[
    './images/heroSection/slider/slider1.jpg',
    './images/heroSection/slider/slider2.jpg',
    './images/heroSection/slider/slider3.jpg',
    './images/heroSection/slider/slider4.jpg',
    './images/heroSection/slider/slider5.jpg',
    './images/heroSection/slider/slider6.jpg',
    './images/heroSection/slider/slider7.jpg',
    './images/heroSection/slider/slider8.jpg',
    './images/heroSection/slider/slider9.jpg',
   
  ]
   const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex === images.length - 1 ? 0 : prevIndex + 1)
    );
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex === 0 ? images.length - 1 : prevIndex - 1)
    );
  };
  return (
    <>
    <div className='relative overflow-hidden '>

    <figure className='overflow-hidden'>
     <img src="./images/heroSection/background.png" alt="" srcset=""  />
    </figure>
    <div className="absolute top-0">
        <img src="./images/heroSection/offer.png" alt="" srcset=""  className='z-10'/>
    </div>
       <div className="images absolute top-[100px]   flex  overflow-hidden ">
          <Carousel 
          value={images}
          circular
          // showNavigators={true}
          // showIndicators={true}
          numScroll={1} 
          numVisible={5}
          autoplayInterval={3000}
          itemTemplate={(item)=>(
            <>
            <img src={item}  alt='image' className='pl-4 rounded-[93px] xl:h-[] h-[200px] w-[200px] object-cover'/>
            </>
          )}
          />
          </div>
        </div>
  

    </>
  )
}

export default Slider
