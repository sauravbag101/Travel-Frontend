import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";

const TrendingPack = () => {

    const testimonials = [
        {
          name: "3 Tours | 4 Days 3 Night",
          position: "Agra",
          quote:
            "View to all Tours",
          rating: 5,
          image:
            "https://static.toiimg.com/photo/msid-31346158,width-96,height-65.cms",
        },
        {
          name: "5 Tours | 5 Days 4 Night",
          position: "Jammu",
          quote:
            " View to all Tours",
          rating: 5,
          image:
            "https://www.shutterstock.com/image-photo/view-dal-lake-winter-beautiful-600nw-2044050407.jpg",
        },
        {
          name: "2 Tours | 2 Days 1 Night",
          position: "Kanyakumari",
          quote:
            "View to all Tours",
          rating: 4,
          image:
            "https://media.istockphoto.com/id/1440972356/photo/aerial-shot-of-the-thiruvalluvar-surrounded-by-the-sea.webp?a=1&b=1&s=612x612&w=0&k=20&c=UQcDkBR2N7ZTDjuybFEdU3Awotum41EdmtjXOS9OOZs=",
        },
        {
          name: "4 Tours | 3 Days 2 Night",
          position: "Kerela",
          quote:
            "View to all Tours",
          rating: 5,
          image:
            "https://s3.india.com/wp-content/uploads/2024/08/Kerala-Travel-Guide_-Discover-Gods-Own-Country-On-A-Budget.jpg##image/jpg",
        },
        {
          name: "5 Tours | 4 Days 3 Night",
          position: "Vanaras",
          quote:
            "View to all Tours",
          rating: 4,
          image:
            "https://media.istockphoto.com/id/157772138/photo/puja-ritual-for-praising-the-god-of-ganga-india.jpg?s=612x612&w=0&k=20&c=TxW3v8UekjQF6Irj3MhDTLTRWjtZu-yD-c2YqzFvPRk=",
        },
      ];
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024, // Tablets and below
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768, // Small tablets and phones
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
  return (
    <div>
        <section className="py-16 bg-blue-50 text-white">
      <div className="text-center pt-20 px-4">
        <p className="text-4xl italic font-light font-serif text-orange-500">Perfect destination</p>
        <p className="not-italic text-xl font-sans py-4 text-gray-600">
        Trending destinations
        </p>
       
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <Slider {...settings}>
          {testimonials.map((test, index) => (
            <div key={index} className="mb-4 flex flex-col gap-3 p-4 ">
             
             <div className="rounded-lg w-full h-[200px] overflow-hidden">
             <img
               src={test.image}
               alt={test.name}
               className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
             />
           </div>
               <div className='bg-white text-black rounded-lg py-5 text-center shadow-lg'>
                <button className="text-md md:text-sm font-semibold px-3 py-1 rounded-lg text-white bg-green-600 text-center ">{test.name}</button>
                <p className="text-xl md:text-2xl font-serif text-center py-8 pt-10">{test.position}</p>
                <div className='flex justify-center space-x-2'>
                <p className="text-sm md:text-sm py-3 text-center font-semibold">{test.quote}</p>
                <div className="w-10 h-10 bg-red-400 text-white rounded-full flex items-center justify-center">
                 <IoIosArrowForward />
                </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <p className='text-gray-600 text-center pt-12'>Explore our top destinations voted by more than <span className='font-bold'>100,000+</span>  customers around the world. </p>
      </div>
    </section>
    </div>
  )
}

export default TrendingPack
