// import React from "react";
import Slider from "react-slick";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";

export default function Project() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
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
      title: "MANDARIN ORIENTAL - BEDROOM",
    },
    {
      image: project2,
      title: "FORT LAUDERDALE INTRACOASTAL",
    },
    {
      image: project3,
      title: "CABO HOUSE - WINE ROOM",
    },
    {
      image: project4,
      title: "POMPANO BEACH WATERFRONT",
    },
    {
      image: project5,
      title: "MANDARIN ORIENTAL - LIVING ROOM",
    },
    {
      image: project6,
      title: "CABO HOUSE - LIVING ROOM",
    },
  ];
  return (
    <>
      <div className="bg-[#F0ECE9] flex flex-col py-[60px] w-full my-[80px]">
        <h2 className="hero-text w-[65%] mx-auto text-center text-[#3f3f3f] fonts-nicky">
          Projects
        </h2>
        <div className="slider-container p-2">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div className="p-2 flex flex-col" key={index}>
                <img src={item.image} alt="" className="" />
                <p className="text-[20px] text-center mt-3">
                  {item.title}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
