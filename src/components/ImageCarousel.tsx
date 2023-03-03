import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";

const slides = ["/car-2.jpg", "/car-1.jpeg", "/car-3.jpg"];
const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="group relative m-auto h-48 w-full max-w-[1400px]">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
        className="h-full w-full rounded-t-xl bg-cover bg-center duration-100"
      ></div>
      {/* Left Arrow */}
      <div className="absolute top-[50%] left-5 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
        <ChevronLeftIcon onClick={prevSlide} className="w-6" />
      </div>
      {/* Right Arrow */}
      <div className="absolute top-[50%] right-5 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
        <ChevronRightIcon onClick={nextSlide} className="w-6" />
      </div>
      <div className="top-4 flex justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="cursor-pointer text-2xl"
          >
            <MinusIcon />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
