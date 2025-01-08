import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import your images
import Image1 from "../assets/Friends1.jpg";
import Image2 from "../assets/Friends3.jpg";
import Image3 from "../assets/Friends6.jpg";
import Image4 from "../assets/Friends2.jpg";

const Slider = () => {
  const images = [Image1, Image2, Image3, Image4];

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <Swiper
        navigation
        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        speed={400}
        autoplay={{
          delay: 2000,
        }}
        className="rounded-lg overflow-hidden"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
