import React, { useRef } from 'react';

function Swiper(){
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
        const swiperWidth = swiperRef.current.offsetWidth;
        swiperRef.current.scrollLeft += swiperWidth + 20; // Adjust the scroll value as needed
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
        const swiperWidth = swiperRef.current.offsetWidth;
        swiperRef.current.scrollLeft -= swiperWidth + 20; // Adjust the scroll value as needed
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div ref={swiperRef} className="flex space-x-4 overflow-x-auto">
        <div className="w-full h-64 flex-shrink-0 bg-gray-200 text-center">Slide 1</div>
        <div className="w-full h-64 flex-shrink-0 bg-gray-200 text-center">Slide 2</div>
        <div className="w-full h-64 flex-shrink-0 bg-gray-200 text-center">Slide 3</div>
        <div className="w-full h-64 flex-shrink-0 bg-gray-200 text-center">Slide 4</div>
        {/* Add more slides as needed */}
      </div>
      <button
        className="absolute top-0 bottom-0 left-0 flex items-center justify-center w-12 bg-gray-500 text-white"
        onClick={handlePrev}
      >
        Prev
      </button>
      <button
        className="absolute top-0 bottom-0 right-0 flex items-center justify-center w-12 bg-gray-500 text-white"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Swiper;