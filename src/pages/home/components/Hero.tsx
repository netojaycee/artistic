import React from "react";
import Slider from "react-slick";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import hero1 from "../../../assets/hero1.jpg";
import hero2 from "../../../assets/hero2.jpg";
import hero3 from "../../../assets/hero3.jpg";
import hero4 from "../../../assets/hero4.jpg";
import hero5 from "../../../assets/hero5.jpg";
import hero6 from "../../../assets/hero6.jpg";
import "../../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Hero() {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 700,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   autoplay: true,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  const data = [
    {
      image: hero1,
      title: "2 BHK Interior Designs",
    },
    {
      image: hero2,
      title: "3 BHK Interior Designs",
    },
    {
      image: hero3,
      title: "Modular Kitchen Designs",
    },
    {
      image: hero4,
      title: "Home Office Designs",
    },
    {
      image: hero5,
      title: "Bedroom Designs",
    },
    {
      image: hero6,
      title: "Living Room Designs",
    },
  ];
  return (
    <>
      {/* <div className="slider-container">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div className="" key={index}>
              <img src={item.image} alt="" className="relative" />
            </div>
          ))}
        </Slider>
      
      <div className="absolute text-3xl font-medium w-2/3 flex flex-col items-center space-y-4 right-20 bottom-1 md:top-1/2 md:right-36">
         <h2 className="text-center text-white text-5xl md:text-6xl font-playfairsc uppercase">
           Interior Design & Home Decor
         </h2>
         <div className="md:flex md:space-x-8 md:w-full md:justify-center ">
           <div>
             <button className="border-2 w-full  border-neutral-500 text-sm text-white px-2 py-2">
               INTERIOR DESIGN
             </button>
           </div>

           
            
             <button className="bg-gradient-to-l from-neutral-500 to-[#898864] text-sm w-full  text-white px-4 py-2">
               SHOP NOW
             </button>
           </div>
         </div>
      </div> */}
      <div className="w-full relative">
        <Carousel
          autoPlay
          showArrows={false}
          // swipeable={true}
          // emulateTouch={true}
          infiniteLoop
          showThumbs={false}
          showStatus={false}
        >
          {data.map((item, index) => (
            <div key={index} className="shadow-md relative">
              <img src={item.image} alt="" className="w-full h-auto" />
              <div className="absolute inset-0 bg-black opacity-50 blur-sm"></div>{" "}
            </div>
          ))}
        </Carousel>
        <div className="absolute top-[60%] w-full  flex flex-col items-center gap-3">
          <h2 className="font-bold text-white text-center hero-text">
            Interior Design & Home Decor
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
            <button className="bg-transparent hover:bg-black  text-white text-center border-2 border-primary px-4 py-2">
              INTERIOR DESIGN
            </button>
            <button className="bg-primary hover:bg-black border-none text-center text-white px-4 py-2">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
