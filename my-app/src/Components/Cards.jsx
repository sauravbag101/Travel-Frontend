// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const cards = [
//   {
//     title: "Mountain View",
//     copy: "Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains.",
//     button: "View Trips",
//     image: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?w=400&fit=max",
//   },
//   {
//     title: "To The Beach",
//     copy: "Plan your next beach trip with these fabulous destinations.",
//     button: "View Trips",
//     image: "https://images.unsplash.com/photo-1533903345306-15d1c30952de?w=400&fit=max",
//   },
//   {
//     title: "Desert Destinations",
//     copy: "It's the desert you've always dreamed of.",
//     button: "Book Now",
//     image: "https://images.unsplash.com/photo-1545243424-0ce743321e11?w=400&fit=max",
//   },
//   {
//     title: "Explore The Galaxy",
//     copy: "Seriously, straight up, just blast off into outer space today.",
//     button: "Book Now",
//     image: "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?w=400&fit=max",
//   },
// ];

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024, // Tablets and below
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768, // Small tablets and phones
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

// const Card = ({ title, copy, button, image }) => (
//     <div>
//   <div className="relative flex flex-col justify-end p-4 bg-white pb-6 shadow-md rounded-lg  overflow-hidden group w-full h-[500px]">
//     {/* Background Image */}
//     <div
//       className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 "
//       style={{ backgroundImage: `url(${image})` }}
//     />
//     {/* Overlay */}
//     <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
//     {/* Content */}
//     <div className="relative z-10 text-white flex flex-col items-center gap-4 transform translate-y-16 transition-all duration-700 group-hover:translate-y-0">
//       <h2 className="text-xl font-bold">{title}</h2>
//       <p className="font-serif italic text-lg">{copy}</p>
//       <button className="bg-black hover:bg-gray-700 text-white font-bold uppercase text-sm py-2 px-4 rounded">
//         {button}
//       </button>
//     </div>
//   </div>
//   </div>
// );

// const CardGrid = () => (
  // <div className="max-w-6xl mx-auto p-4">
  //   <div className="text-center pt-20 px-4">
  //       <p className="text-4xl italic font-light font-serif text-orange-500">Choose a Collection</p>
  //       <p className="not-italic text-xl font-sans py-4 text-gray-600">
  //       Find your own destination, by your interest 
  //       </p>
       
  //     </div>
//     <Slider {...settings}
//     className="space-x-6  ]">
//       {cards.map((card, index) => (
//         <div>
//         <Card
//           key={index}
//           title={card.title}
//           copy={card.copy}
//           button={card.button}
//           image={card.image}
//         /></div>
//       ))}
//     </Slider>
//   </div>
// );

// export default CardGrid;











import React from 'react';
import Slider from 'react-slick'; // Import Slider from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 // Optional for custom styling

const cards = [
  { 
    title: 'Mountain View', 
    copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains', 
    button: 'View Trips',
    Image: 'https://www.atlasandboots.com/wp-content/uploads/2019/05/ama-dablam2-most-beautiful-mountains-in-the-world.jpg',
  }, 
  { 
    title: 'To The Beach', 
    copy: 'Plan your next beach trip with these fabulous destinations', 
    button: 'View Trips',
    Image: 'https://vietnam.travel/sites/default/files/inline-images/shutterstock_585187837.jpg',
  }, 
  { 
    title: 'Desert Destinations', 
    copy: 'It\'s the desert you\'ve always dreamed of banjara place', 
    Image: 'https://hips.hearstapps.com/hmg-prod/images/dunes-in-the-sahara-desert-merzouga-morocco-royalty-free-image-1695321159.jpg?crop=0.66682xw:1xh;center,top&resize=640:*',
    button: 'Book Now',
  }, 
  { 
    title: 'Explore The Galaxy', 
    copy: 'Seriously, straight up, just blast off into outer space today', 
    Image: 'https://space-india.com/wp-content/uploads/2024/09/View-of-our-Milky-way-galaxys-arm-from-Earth.png',
    button: 'Book Now',
  },
  { 
    title: 'Explore The Snow', 
    copy: ' I wonder if the snow loves the trees and fields, that it kisses them so gently', 
    Image: 'https://www.stuffintheair.com/images/Heavy-Snow.jpg',
    button: 'Book Now',
  }
];

const TravelCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="text-center pt-20 px-4">
        <p className="text-4xl italic font-light font-serif text-orange-500">Choose a Collection</p>
        <p className="not-italic text-xl font-sans py-4 text-gray-600">
        Find your own destination, by your interest 
        </p>
       
      </div>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="p-2">
            <div className="relative flex flex-col items-end overflow-hidden rounded-lg shadow-lg group h-[400px]">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url(${card.Image})`,
                }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 transition-all duration-1000 ease-out" />

              {/* Content */}
              <div className="relative z-10 w-full p-4 text-center text-white transition-all duration-700 ease-out transform group-hover:translate-y-0 md:translate-y-[calc(100%-4.5rem)] group-hover:opacity-100">
                <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
                <p className="italic text-lg mb-4 opacity-0 translate-y-4 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                  {card.copy}
                </p>
                <button className="bg-black text-white uppercase text-xs font-bold px-6 py-3 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 opacity-0 translate-y-4 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                  {card.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TravelCards;
