// import NavBar from "../../components/ui/NavBar";
import { ImQuotesLeft } from "react-icons/im";
import HeroImg from "../../assets/011-219PalmTrail-DelrayBeach-FL-33483-FULL-scaled.jpg";
import heroImg1 from "../../assets/Ritchey_Kitchen-1.02.jpg";
import heroImg2 from "../../assets/RhmNRrXw.jpeg";
import heroImg3 from "../../assets/Y5ZHqsXh.jpeg";
import heroImg4 from "../../assets/Pn2hSreZ-scaled.jpeg";
import { useEffect } from "react";
import Slider from "react-slick";
// import Footer from "../../components/ui/Footer";

export default function Portfolio() {
  useEffect(function () {
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    scrollToTop();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: false,
    arrows: false,
  };

  const data = [
    {
      image: HeroImg,
    },
    {
      image: heroImg1,
    },
    {
      image: heroImg2,
    },
    {
      image: heroImg3,
    },
    {
      image: heroImg4,
    },
  ];

  const data2 = [
    {
      image: HeroImg,
    },
    {
      image: heroImg1,
    },
    {
      image: heroImg2,
    },
    {
      image: heroImg3,
    },
    {
      image: heroImg4,
    },
  ];
  return (
    <div>
      <div>{/* <NavBar /> */}</div>
      <div className="pt-40 text-center mx-auto w-2/3">
        <h2 className="text-[92px] text-center font-normal italic fonts-nicky">
          Portfolio
        </h2>
        <ImQuotesLeft className="size-8 mx-auto mt-8 text-[#B39CAB]" />
        <p className="italic text-2xl font-semibold font-playfair">
        Transforming Spaces, Inspiring Lives.
        </p>
      </div>

      <div className="pt-28 ">
        <h2 className="mx-auto w-2/3  font-playfairsc font-medium text-[#B39CAB] text-center text-4xl mb-8">
          INTRACOASTAL REMODEL
        </h2>
        <div>
          <Slider {...settings}>
            {data2.map((item) => (
              <img src={item.image} alt="hero_Img" className="size-80 w-full" />
            ))}
          </Slider>
        </div>
        <div className="pt-10 flex justify-center ">
          <button className="p-2 text-xl border-2 border-primary">
            GO TO THE PROJECT
          </button>
        </div>
      </div>

      <div className="pt-28 ">
        <h2 className="mx-auto w-2/3  font-playfairsc font-medium text-[#B39CAB] text-center text-3xl mb-8">
          BOCA BLUE DOOR
        </h2>
        <div>
          <Slider {...settings}>
            {data.map((item) => (
              <img src={item.image} alt="hero_Img" className="size-80 w-full" />
            ))}
          </Slider>
        </div>
        <div className="pt-10 flex justify-center ">
          <button className="p-2 text-xl border-2 border-primary">
            GO TO THE PROJECT
          </button>
        </div>{" "}
      </div>

      <div className="pt-28 ">
        <h2 className="mx-auto w-2/3 font-playfairsc font-medium text-[#B39CAB] text-center text-3xl mb-8">
          RITZ CARLTON RESIDENCES
        </h2>
        <div>
          <Slider {...settings}>
            {data.map((item) => (
              <img src={item.image} alt="hero_Img" className="size-80 w-full" />
            ))}
          </Slider>
        </div>
        <div className="pt-10 flex justify-center ">
          <button className="p-2 text-xl border-2 border-primary">
            GO TO THE PROJECT
          </button>
        </div>{" "}
      </div>

      <div className="pt-28 ">
        <h2 className="mx-auto w-2/3  font-playfairsc font-medium text-[#B39CAB] text-center text-3xl mb-8">
          CAKE HOUSE
        </h2>
        <div>
          <Slider {...settings}>
            {data.map((item) => (
              <img src={item.image} alt="hero_Img" className="size-80 w-full" />
            ))}
          </Slider>
        </div>
        <div className="pt-10 flex justify-center ">
          <button className="p-2 text-xl border-2 border-primary">
            GO TO THE PROJECT
          </button>
        </div>{" "}
      </div>

      <div className="pt-28 ">
        <h2 className="mx-auto w-2/3 font-playfairsc font-medium text-[#B39CAB] text-center text-3xl mb-8">
          ZEN RESIDENCE
        </h2>
        <div>
          <Slider {...settings}>
            {data.map((item) => (
              <img src={item.image} alt="hero_Img" className="size-80 w-full" />
            ))}
          </Slider>
        </div>
        <div className="pt-10 flex justify-center ">
          <button className="p-2 text-xl border-2 border-primary">
            GO TO THE PROJECT
          </button>
        </div>{" "}
      </div>
      <div className="text-center mx-auto w-3/4 pt-28 pb-9">
        <h2 className="text-xl font-semibold">
          SEE HOW WE MAKE YOUR DREAMS REALITY
        </h2>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
