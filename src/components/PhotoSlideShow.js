import React, { useState, useEffect } from 'react'

const slides = [
  {
    id: 1,
    src : "tegner1.png",
  },
  {
    id: 2,
    src : "tegner2.jpeg",
  },
  {
    id: 3,
    src : "tegner3.jpg",
  },


];

const PhotoSlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);  // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden flex flex-col justify-center items-center mr-24">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute  flex justify-center items-center transition-opacity duration-500 ease-in w-[80%]  ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="px-32">
            <img src={`/images/${slide.src}`} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PhotoSlideShow
