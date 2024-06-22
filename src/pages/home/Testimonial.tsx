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
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    // centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
      title: "EXECUTED NICELY",
      message:
        "The interior project was executed nicely to our new apartment at prestige willlow tree vidranyapura. On time completion with quality and cost effective. Pros: Flexible, creative design, on time delivery; Cons: not so significant",
      name: "Rajashekara HV",
    },
    {
      image: project2,
      title: "ONE OF THE BEST DECISION",
      message:
        "Took the service of innov8 and glad to have made the decision to associate wuth them for my flat interior work. The quality of work is amazing. Very professional work and good job at designing the whole house. ",
      name: "",
    },
    {
      image: project3,
      title: "Happy With Their Work",
      message:
        "Probably the only interiors worth investing in. Quality output in design and execution. Wonderful people working on your home. A-Z stop for fixed furniture and home interiors. Quite happy at their timely work done at my Villa Rica.",
      name: "karina",
    },
    {
      image: project4,
      title: "JUST EXCEPTIONAL!",
      message:
        "We had an amazing experience with Naresh bhai and his team. Every question was answered in detail and quality of material used is exceptional",
      name: "Shootal",
    },
    {
      image: project5,
      title: "BEAUTY IN THEIR DESIGN",
      message:
        "Details in the work and beauty of their designs simple or luxury anything you give them they will do their best.",
      name: "Sunil Kumar",
    },
    {
      image: project6,
      title: "GOOD INTERIOR COMPANY",
      message:
        "Good interior company and value of money work done on our flat at Prestige Willow Tree Apartment",
      name: "Javakumar",
    },
  ];
  return (
    <>
      <div className="bg-white flex flex-col py-[20px] w-full my-[0px]">
        <h2 className="hero-text w-[65%] mx-auto text-center text-primaryVariant mb-5">
          Testimonials{" "}
        </h2>
        <div className="slider-container p-2  w-4/5 mx-auto">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div
                className="p-2 grid   place-items-center gap-4 items-center w-full"
                key={index}
              >
                <div className="w-full lg:w-full">
                  <img src={item.image} alt="" className="" />
                </div>
                <div className="w-full lg:w-full p-10 ">
                  <h2 className="text-lg font-semibold mb-2 lg:mb-4 uppercase text-center">
                    {item.title}
                  </h2>
                  <p className="lg:mb-4 mb-2 text-[14px] w-full text-left">
                    {item.message}
                  </p>
                  <p className="text-[12px] md:text-[14px] lg:text-[20px] text-left">
                    {item.name}
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
