import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://www.eci.gov.in/eci-backend/public/banner/February/QPz6iKYZpGfliqK1740051664.jpg",
  "https://www.eci.gov.in/eci-backend/public/banner/February/KKf8o4KoJi4jRM81740074978.jpg",
  "https://www.eci.gov.in/eci-backend/public/banner/February/bXDQo5fCrDutjvj1739956015.jpg",
  "https://www.eci.gov.in/eci-backend/public/banner/February/FLipYObUslchUzk1739512362.jpg",
  "https://www.eci.gov.in/eci-backend/public/banner/January/BkKoLRW2n3wkm4P1737821452.jpg",
  "https://www.eci.gov.in/eci-backend/public/banner/August/s2VnwHHMZXwRuxW1724837862.jpg",
  "https://www.eci.gov.in/eci-backend/public/banner/June/cGrGlk3na6SD9mN1717683100.jpg"
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-48 md:h-auto  mx-auto overflow-hidden shadow-md">
      {/* Images */}
      <div className="flex transition-transform duration-500 h-full ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index + 1}`} className="w-full h-full flex-shrink-0" />
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white scale-125" : "bg-gray-400"}`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
