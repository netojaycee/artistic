//@ts-nocheck
import { useState } from "react";
import popular1 from "../../assets/projects/residential/District_judge_villa/3.jpg";
import popular2 from "../../assets/projects/commercial/gokulum_bank/1.jpg";
import popular3 from "../../assets/projects/residential/District_judge_villa/2.jpg";
import popular4 from "../../assets/projects/residential/mona mam/1.jpg";
import popular5 from "../../assets/projects/commercial/ncc_regional/2.jpg";
import popular6 from "../../assets/projects/residential/swanyadeep/1.jpg";
import Slider from "react-slick";

import { RiArrowRightUpLine } from "react-icons/ri";

export default function PopularDesigns() {
  const [myValue, setMyValue] = useState("");
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    // centerMode: true,
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
      image: popular1,
      title: "District Judge Villa ",
    },
    {
      image: popular2,
      title: "Gokulum Bank",
    },
    {
      image: popular3,
      title: "District Judge Villa",
    },
    {
      image: popular4,
      title: "Mona Mam's Residence",
    },
    {
      image: popular5,
      title: "Bedroom Designs",
    },
    {
      image: popular6,
      title: "Living Room Designs",
    },
  ];

  let myData = [
    {
      image: popular1,
      title: "Residential",
    },
    {
      image: popular2,
      title: "Commercial",
    },
    {
      image: popular3,
      title: "Residential",
    },
    {
      image: popular4,
      title: "Residential",
    },
    {
      image: popular5,
      title: "Commercial",
    },
    {
      image: popular6,
      title: "Residential",
    },
  ];

  if (myValue === "Residential")
    myData = myData.filter((item) => item.title === "Residential");

  if (myValue === "Commercial")
    myData = myData.filter((item) => item.title === "Commercial");

  if (myValue === "all") myData = myData;

  return (
    <>
      <div className="p-10 flex flex-col lg:gap-10 gap-5 bg-secondary">
        <div>
          <br />
          <br />
          <div className="md:flex md:justify-between">
            <div className="w-[30%]">
              <div className="flex space-x-3 items-center">
                <div className="bg-brown-200 w-2 h-4 rounded-l-full"></div>
                <p className="text-sm text-brown-200 ">Portfolio</p>
              </div>
              <h2 className="text-2xl font-semibold lg:text-4xl md:w-[50%]">
                Our Latest Projects
              </h2>
            </div>
            <div className="lg:w-[70%] grid grid-cols-3 mt-4 place-items-center md:grid-cols-6  lg:mt-24">
              <div
                value={myValue}
                onClick={() => setMyValue("all")}
                className="flex space-x-1 cursor-pointer "
              >
                <p
                  className={
                    myValue === "all"
                      ? "text-brown-600 font-semibold font-[Roboto]"
                      : " text-black font-  text-3xl font-[Roboto] hover:text-brown-600"
                  }
                >
                  All
                </p>
                {/* <span className="text-brown-600 -mt-1 text-">01</span> */}
              </div>
              <div
                value={myValue}
                onClick={() => setMyValue("Residential")}
                className="flex space-x-1 cursor-pointer"
              >
                <p
                  className={
                    myValue === "Residential"
                      ? "text-brown-600 font-semibold font-[Roboto]"
                      : " text-black font- font-[Roboto] text-3xl hover:text-brown-600"
                  }
                >
                  Residential
                </p>
                {/* <span className="text-brown-600 -mt-1 text-3xl">02</span> */}
              </div>

              <div
                value={myValue}
                onClick={() => setMyValue("Commercial")}
                className="flex space-x-1 cursor-pointer"
              >
                <p
                  className={
                    myValue === "Commercial"
                      ? "text-brown-600 font-semibold font-[Roboto]"
                      : " text-black text-3xl font- font-[Roboto] hover:text-brown-600"
                  }
                >
                  Commercial
                </p>
              </div>
            </div>
          </div>

          <div className="grid place-items-center md:grid md:grid-cols-3 md:gap-5">
            {myData?.map((item, index) => (
              <div key={index} className="mt-8 group">
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={item.image}
                    alt=""
                    className="w-[400px] h-[370px] md:h-[240px] lg:h-[370px]   rounded-3xl scale-100 group-hover:scale-125 transition-all duration-200 "
                  />
                  <div className="absolute w-full h-full bg-black/60 rounded-3xl bottom-0 opacity-0  group-hover:opacity-100   transition-all duration-500">
                    <div className="absolute right-4 top-4">
                      <RiArrowRightUpLine className="size-10 text-white" />
                    </div>
                    {/* <div className="text-white absolute bottom-3 left-8 ">
                      <h2 className="text-sm">Bedroom</h2>
                      <p className="text-2xl">Innovation</p>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
