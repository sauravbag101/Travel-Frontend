import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';


const HotelCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);

// navbar



const menuItems = [
    { 
      label: 'Destination', 
      href: '#home',
      dropdown: [
        { label: 'Beach Destinations', href: '#beach' },
        { label: 'Mountain Retreats', href: '#mountain' },
        { label: 'City Escapes', href: '#city' }
      ]
    },
    { 
      label: 'Interest', 
      href: '#about',
      dropdown: [
        { label: 'Adventure', href: '#adventure' },
        { label: 'Relaxation', href: '#relaxation' },
        { label: 'Cultural Tours', href: '#cultural' }
      ]
    },
    { 
      label: 'Rooms', 
      href: '#rooms',
      dropdown: [
        { label: 'Standard Room', href: '#standard' },
        { label: 'Deluxe Room', href: '#deluxe' },
        { label: 'Suite', href: '#suite' }
      ]
    },
    { 
      label: 'About', 
      href: '#contact',
      dropdown: [
        { label: 'Our Story', href: '#story' },
        { label: 'Team', href: '#team' },
        { label: 'Contact Us', href: '#contact-details' }
      ]
    }
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };



  const carouselItems = [
    {
      video: 'https://media.istockphoto.com/id/1471820340/video/view-of-modern-buildings-village-in-a-hill-at-nilgiri-forest-ooty-landscape-of-ooty-tamil.mp4?s=mp4-640x640-is&k=20&c=dIoAMk7NHXEuvhMQaocZXe-8q_g-ZDkRFSGrZrWMlqo=', // Replace with your video URL
      title: 'Luxury Living',
      subtitle: 'Discover A Brand Luxurious Hotel & Adventureous Tour',
    },
    {
      video: 'https://media.istockphoto.com/id/1472075777/video/riding-sailboat-motorboat-on-a-lake-edge-or-riverbank.mp4?s=mp4-640x640-is&k=20&c=Q0c7y-zC-zOpqu-1rux7DBSCPrC3e_Bor8H1lcG9aQY=', // Replace with your video URL
      title: 'Modern Comfort',
      subtitle: 'Experience the Ultimate Comfort',
    },
    {
        video: 'https://videos.pexels.com/video-files/20200352/20200352-uhd_2560_1440_50fps.mp4', // Replace with your video URL
        title: 'Modern Comfort',
        subtitle: 'Experience the Ultimate Comfort',
      },
      {
        video: 'https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4', // Replace with your video URL
        title: 'Modern Comfort',
        subtitle: 'Experience the Ultimate Comfort',
      },
      {
        video: 'https://videos.pexels.com/video-files/4460336/4460336-hd_1920_1080_25fps.mp4', // Replace with your video URL
        title: 'Modern Comfort',
        subtitle: 'Experience the Ultimate Comfort',
      },
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

//   dataset




  return (
    <div className="relative w-full overflow-hidden ">

        {/* navbar */}
        <nav className="absolute top-0 left-0 w-full  bg-opacity-75 text-white z-50 px-60 ">
        <div className="container mx-auto flex items-center justify-between p-4">
            
          <a className="text-2xl italic font-light font-serif ">
            Tour<span className='not-italic text-xl font-sans'>Adventure</span>
          </a>
          <nav className="relative">
      <ul className="hidden md:flex space-x-6 items-center">
        {menuItems.map((item, index) => (
          <li 
            key={index} 
            className="relative group"
            onMouseEnter={() => toggleDropdown(index)}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <a 
              href={item.href} 
              className="flex items-center hover:text-primary transition"
            >
              {item.label}
              {item.dropdown && (
                <ChevronDown 
                  className="ml-1 h-4 w-4 text-gray-500 group-hover:text-primary transition"
                />
              )}
            </a>
            
            {item.dropdown && (
              <div 
                className={`
                  absolute left-0 top-full z-20 bg-white/50 shadow-lg rounded-lg 
                  min-w-[200px] mt-2 py-2 
                  transform origin-top transition-all duration-300 ease-in-out
                  ${activeDropdown === index 
                    ? 'opacity-100 scale-100 visible' 
                    : 'opacity-0 scale-95 invisible'
                  }
                `}
              >
                {item.dropdown.map((dropdownItem, dropIndex) => (
                  <a
                    key={dropIndex}
                    href={dropdownItem.href}
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-400 transition"
                  >
                    {dropdownItem.label}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
        </div>
      </nav>    
      
        <div className="relative w-full h-[600px]">
     
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`
              absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out
              ${index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}
            `}
          >
            {/* Video Background */}
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={item.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay Content */}
        

            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center px-4 max-w-xl">
                <h6 className="text-white uppercase text-lg mb-3 animate-slideInDown tracking-wide">
                  {item.title}
                </h6>
                <h1 className="text-white text-5xl font-medium mb-4 font-serif animate-slideInDown">
                  {item.subtitle}
                </h1>
                <div className="flex justify-center space-x-4">
                  <a
                    href="#rooms"
                    className="bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark font-serif  transition animate-slideInLeft"
                  >
                    Our Plans
                  </a>
                  <a
                    href="#book"
                    className="bg-white text-primary py-3 px-6 rounded-lg hover:bg-gray-100 transition animate-slideInRight"
                  >
                    Book A Room
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
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-white/50 p-2 rounded-full hover:bg-white/75 transition"
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
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-white/50 p-2 rounded-full hover:bg-white/75 transition"
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

export default HotelCarousel;
