import React from "react";
import Swiper from 'swiper';
import 'swiper/css';
import { useState, useEffect } from "react";
// import image1 from "../assets/Friends 2.jpg"
// import image2 from "../assets/Friends 4.jpg"
// import image3 from "../assets/Friends 6.jpg"



// const swiper = new Swiper(...);
// const Carousel = () => {
//   const images = [
//    image1, image2, image3
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change slide every 3 seconds
//     return () => clearInterval(interval);
//   }, [images.length]);

//   const goToSlide = (index) => setCurrentIndex(index);

//   return (
//     <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
//       {/* Slides */}
//       <div
//         className="flex transition-transform duration-700"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Slide ${index + 1}`}
//             className="w-full flex-shrink-0"
//           />
//         ))}
//       </div>

//       {/* Navigation Dots */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-3 h-3 rounded-full ${
//               currentIndex === index ? "bg-white" : "bg-gray-400"
//             }`}
//           ></button>
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         onClick={() =>
//           setCurrentIndex((currentIndex - 1 + images.length) % images.length)
//         }
//         className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
//       >
//         &#10094;
//       </button>
//       <button
//         onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
//         className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
//       >
//         &#10095;
//       </button>
//     </div>
//   );


export default Carousel;
