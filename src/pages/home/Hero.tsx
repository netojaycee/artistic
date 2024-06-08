import React from "react";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";
import hero4 from "../../assets/hero4.jpg";
import hero5 from "../../assets/hero5.jpg";
import hero6 from "../../assets/hero6.jpg";
import herom1 from "../../assets/13-1.jpg";
import herom2 from "../../assets/13-2.jpg";
import herom3 from "../../assets/13-3.jpg";
import herom4 from "../../assets/13-4.jpg";
import herom5 from "../../assets/13-5.jpg";
import herom6 from "../../assets/13-6.jpg";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

export default function Hero() {
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
    {
      image: herom4,
      title: "Home Office Designs",
    },
    {
      image: herom5,
      title: "Bedroom Designs",
    },
    {
      image: herom6,
      title: "Living Room Designs",
    },
  ];

  const [isDesktop, setIsDesktop] = React.useState(window.innerWidth >= 960);

  React.useEffect(() => {
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
          <Carousel
            autoPlay
            showArrows={false}
            infiniteLoop
            showThumbs={false}
            showStatus={false}
          >
            {data.map((item, index) => (
              <div key={index} className="shadow-md relative">
                <img src={item.image} alt="" className="w-full h-auto" />
                <div className="absolute inset-0 "></div>{" "}
              </div>
            ))}
          </Carousel>
        ) : (
          <Carousel
            autoPlay
            showArrows={false}
            infiniteLoop
            showThumbs={false}
            showStatus={false}
          >
            {dataMobile.map((item, index) => (
              <div key={index} className="shadow-md relative">
                <img src={item.image} alt="" className="w-full h-screen" />
                <div className="absolute inset-0 "></div>{" "}
              </div>
            ))}
          </Carousel>
        )}
        <div className="absolute lg:top-[60%] top-[50%] w-full flex flex-col items-center gap-3">
          <h2 className="lg:font-bold text-white text-center text-[50px] lg:hero-text">
            Interior Design & Home Decor
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
            <button className="bg-transparent hover:bg-black  text-white text-center border-2 border-primary px-4 py-2">
              INTERIOR DESIGN
            </button>
            <button className="bg-primary hover:bg-black border-none text-center text-white px-4 py-2">
              <Link to="/projects">OUR PORTFOLIO</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
