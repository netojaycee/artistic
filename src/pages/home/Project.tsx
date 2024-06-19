// import React from "react";
import Slider from "react-slick";
import project1 from "../../assets/projects/residential/devanahalli_villa/2.jpg";
import project2 from "../../assets/projects/commercial/ncc_regional/2.jpg";
import project3 from "../../assets/projects/residential/mona mam/1.jpg";
import project4 from "../../assets/projects/commercial/sbi_banshankari/3.jpg";
import project5 from "../../assets/projects/residential/District_judge_villa/5.jpg";
import project6 from "../../assets/projects/commercial/gokulum_chits/2.jpg";

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
      title: "",
    },
    {
      image: project2,
      title: "",
    },
    {
      image: project3,
      title: "",
    },
    {
      image: project4,
      title: "",
    },
    {
      image: project5,
      title: "M",
    },
    {
      image: project6,
      title: "",
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
