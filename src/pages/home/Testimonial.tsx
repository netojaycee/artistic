// import React from "react";
import Slider from "react-slick";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";

export default function Tetstimonial() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    // centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      image: project1,
      title: "NEW OWNERS ARE GREAT",
      message: "I always came in for custom framing. And they have the best accessories selection. But now I was able to order wallpaper and rugs for my condo. New owners are great!",
      name: "victoria",
    },
    {
      image: project2,
      title: "Absolute Pleasure",
      message: "We had the pleasure of working with Katya and Drew and their fabulous team for the interior design of our home. From the moment I reached out to Katya till the final reveal day of our home(which was an absolute dream btw!), everything was absolutely seamless(even if there was minor hiccups, the team had the solutions before presenting us the problem). Working with Katya and Drew on our home was an absolute pleasure as they are genuinely lovely people and we look forward to finding more areas in our home we will need their help on!",
      name: "mary-kate",
    },
    {
      image: project3,
      title: "Beautiful Boutique",
      message: "Beautiful boutique! Lots of unique pieces! I always find the best presents for my friends, family and clients at the boutique. The owners - Katya and Drew - are friendly, knowledgeable and creative and they have amazing staff. The design studio that is run by Katya is fantastic! I engaged them for interior design/decor for my primary residence and was amazed how stunning everything came out. Recommended them to several of my clients and family - everybody absolutely loved working with them. Stop by and meet them and shop around in the boutique!",
      name: "karina",
    },
    {
      image: project4,
      title: "Selection of Gifts",
      message: "Artistic Elements has fabulous home furnishings, contemporary curated art, & a selection of gifts for your home - second to none in Boca Raton, FL. Their selection of gifts, moldings for framing, for that special art piece, is extensive. Artistic Elements is a one stop shop for gifts this holiday season! Great service in a welcoming shopping experience! East Palmetto Park Rd in Boca Raton, simply the best!",
      name: "lauretta",
    },
    {
      image: project5,
      title: "Wouldn't Trust Anyone Else",
      message: "Used Artistic Elements in 3 of my homes so far and wouldn’t trust anyone else ! European flare and elegance locally in BOCA !!!!",
      name: "arina",
    },
    {
      image: project6,
      title: "Great Eye for Detail",
      message: "The new owners have added their own new look to Artistic Elements. Katya, a licensed interior designer, has a great eye for detail. While I only needed help with accessories this trip, I look forward to going back to get their help on a bigger picture -coordinating and customizing our open concept kitchen/family space.",
      name: "grace",
    },
  ];
  return (
    <>
      <div className="bg-white flex flex-col py-[60px] w-full my-[70px]">
        <h2 className="hero-text w-[65%] mx-auto text-center text-primaryVariant mb-5">
        Testimonials        </h2>
        <div className="slider-container p-2">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div className="p-2 flex flex-col lg:flex-row slider-containe lg:gap-[60px] gap-4 items-center" key={index}>
                <div className="w-full lg:w-1/2">
                  <img src={item.image} alt="" className="" />
                </div>
                <div className="w-full lg:w-1/2 p-10">
                  <h2 className="lg:text-[30px] mb-2 lg:mb-4 uppercase">{item.title}</h2>
                  <p className="lg:mb-4 mb-2 text-[14px] w-full">{item.message}</p>
                  <p className="text-[12px] md:text-[14px] lg:text-[20px] text-left">
                   -{item.name}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
