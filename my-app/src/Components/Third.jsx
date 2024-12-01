import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, Tech Innovations",
      quote:
        "Working with this team has been an absolute game-changer for our company. Their attention to detail and commitment to excellence.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Michael Chen",
      position: "Marketing Director, Global Solutions",
      quote:
        "Incredible service and professionalism. They consistently deliver results that exceed our expectations and drive real business value.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1520069853334-85e555651e6f?w=500&auto=format&fit=crop&q=60",
    },
    {
      name: "Emily Rodriguez",
      position: "Startup Founder, InnovateX",
      quote:
        "Their strategic insights and innovative approach have been crucial to our growth. I couldn't imagine our success without their support.",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1534777367038-9404f45b869a?w=500&auto=format&fit=crop&q=60",
    },
    {
      name: "David Kim",
      position: "CTO, Innovation Labs",
      quote:
        "A transformative partnership that has redefined our approach to technology and business strategy.",
      rating: 5,
      image:
        "https://plus.unsplash.com/premium_photo-1722038420033-4ef4446283b1?w=500&auto=format&fit=crop&q=60",
    },
    {
      name: "Anna Lee",
      position: "Designer, Creative Minds",
      quote:
        "Their creative approach and outstanding execution have made a significant difference for our brand.",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1496133216394-bd66a733c696?w=500&auto=format&fit=crop&q=60",
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
    <section className="py-16 bg-gray-800 text-white mt-[-80px]">
      <div className="text-center pt-20 px-4">
        <p className="uppercase text-lg py-2">Why Tour Adventure</p>
        <p className="text-2xl md:text-4xl font-serif py-4">
        <i>Tour</i> Adventure is all about storytelling and experience
        </p>
        <p className="text-lg max-w-2xl mx-auto pb-12">
          Our trips are inspired by our Adventure of the world's most fascinating
          places, the stories behind them, and the people who bring them to
          life.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <Slider {...settings}>
          {testimonials.map((test, index) => (
            <div key={index} className="mb-4 flex flex-col gap-3 p-4">
              <div>
                <p className="text-xl md:text-2xl font-serif text-center">{test.name}</p>
                <p className="text-sm md:text-base py-3 text-center">{test.quote}</p>
              </div>
              <div className="flex justify-center h-40">
                <img
                  src={test.image}
                  alt={test.name}
                  className="rounded-lg w-full h-[200px] object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSlider;
