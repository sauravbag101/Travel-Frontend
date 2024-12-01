import React, { useState } from 'react';

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const carouselItems = [
    {
      image: 'https://plus.unsplash.com/premium_photo-1661878434394-7f7e3d032b2a?w=600&auto=format&fit=crop&q=60',
      title: ' From buzzing megacities to ancient Silk Road outposts, explore Asias kaleidoscope of cultures.',
      subtitle: 'Asia',
    },
    {
      image: 'https://images.unsplash.com/photo-1659000407411-c9b18fd3c3c9?w=600&auto=format&fit=crop&q=60',
      title:  'Discover Europes lesser-known marvels and rarely traveled backroads with Atlas Obscura.',
      subtitle: 'Europe',
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1661936361131-c421746dcd0d?w=600&auto=format&fit=crop&q=60',
      title: 'Experience Africas awe-inspiring natural wonders and fascinating hidden corners with Atlas Obscura',
      subtitle: 'Africa',
    },
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative max-w-[1250px] mx-auto py-40 px-4 rounded-lg overflow-hidden ">
      <div className="relative w-full h-[600px] rounded-lg">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`
              absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out
              ${index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}
            `}
          >
            {/* Image Background */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center px-4 max-w-xl">
               
                <h1 className="text-white text-8xl font-medium mb-4 font-serif animate-slideInDown">
                  {item.subtitle}
                </h1>
                 <h6 className="text-white  text-base mb-3 animate-slideInDown tracking-wide py-5">
                  {item.title}
                </h6>
                <div className="flex justify-center space-x-4">
                 
                  <a
                 href="#book"
                 className="bg-slate-500 bg-opacity-50 text-white py-3 px-6 rounded-lg hover:bg-gray-100 hover:text-black transition animate-slideInRight"
               >
                 Explore
               </a>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className=" absolute top-1/2 left-8 transform -translate-y-1/2 z-20 bg-white/50 p-2 rounded-full hover:bg-white/75 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-8 transform -translate-y-1/2 z-20 bg-white/50 p-2 rounded-full hover:bg-white/75 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
