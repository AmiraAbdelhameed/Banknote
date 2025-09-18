import React,{useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
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
    <div className='relative overflow-hidden'>

    <figure className=''>
     <img src="./images/heroSection/background.png" alt="" srcset=""  />
    </figure>
    <div className="absolute top-0">
        <img src="./images/heroSection/offer.png" alt="" srcset="" />
    </div>
    {/* <div className="images absolute top-1/4  w-11 h-3 flex gap-4 justify-between items-center ">
      {images.map((image , index)=>(
        <img src={image} alt="image"  key={index} />
      ))}
    </div> */}

          
          {/* Display current image */}
       <div className="absolute top-1/4 w-full flex justify-center items-center gap-4">
          {images.map((image, index) => (
            <img 
              key={index}
              src={image} 
              alt={`gallery image ${index + 1}`} 
              className="w-1/5 h-auto" 
            />
          ))}
        </div>
       
          
        </div>
  

    </>
  )
}

export default Slider
