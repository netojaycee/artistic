import { useEffect, useState } from "react";
import hero1 from "../../assets/projects/commercial/ncc_regional/2.jpg";
import hero2 from "../../assets/projects/commercial/coimbatore_office/2.jpg";
import hero3 from "../../assets/projects/residential/mrs_veena/1.jpg";

import herom1 from "../../assets/projects/commercial/coimbatore_office/2.jpg";
import herom2 from "../../assets/projects/commercial/ncc_regional/2.jpg";
import herom3 from "../../assets/projects/commercial/coimbatore_office/2.jpg";

import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function Hero() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

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
  ];
  const dataMobile = [
    {
      image: herom1,
      title: "2 BHK Interior Designs",
    },
    {
      image: herom2,
      title: "3 BHK Interior Designs",
    },
    {
      image: herom3,
      title: "Modular Kitchen Designs",
    },
  ];

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 960);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 960);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="w-full relative">
        {isDesktop ? (
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index} className="shadow-md relative">
                <img src={item.image} alt="" className="w-full h-screen " />
                <div className="absolute inset-0 "></div>{" "}
              </div>
            ))}
          </Slider>
        ) : (
          <Slider {...settings}>
            {dataMobile.map((item, index) => (
              <div key={index} className="shadow-md relative">
                <img src={item.image} alt="" className="w-full h-screen" />
                <div className="absolute inset-0 "></div>{" "}
              </div>
            ))}
          </Slider>
        )}
        <div className="absolute  lg:top-[60%] top-[50%] w-full flex flex-col items-center gap-3">
          <div className="lg:font-bold py-5 flex flex-col md:flex-row md:space-x-2 text-white text-center text-[50px]  lg:hero-text">
            <span>Interior Design</span>{" "}
            <span className="text-4xl sm:text-[50px] md:mt-5">
              & Turnkey Solutions
            </span>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
            <button className="bg-transparent hover:bg-black  text-white text-center border-2 border-primary px-4 py-2">
              INTERIOR DESIGN
            </button>
            <button className="bg-primary hover:bg-black border-none text-center text-white px-4 py-2">
              <Link to="/portfolio">OUR PORTFOLIO</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
