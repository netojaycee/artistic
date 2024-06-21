// import NavBar from "../../components/ui/NavBar";
import { ImQuotesLeft } from "react-icons/im";
import heroImg from "../../assets/projects/residential/mona mam/1.jpg";
import heroImg1 from "../../assets/projects/residential/mona mam/2.jpg";
import heroImg2 from "../../assets/projects/residential/mona mam/3.jpg";
import heroImg3 from "../../assets/projects/commercial/sureworks/3.jpg";
import heroImg4 from "../../assets/projects/commercial/sureworks/1.jpg";
import heroImg5 from "../../assets/projects/commercial/sureworks/2.jpg";
import heroImg6 from "../../assets/projects/residential/District_judge_villa/1.jpg";
import heroImg7 from "../../assets/projects/residential/District_judge_villa/2.jpg";
import heroImg8 from "../../assets/projects/residential/District_judge_villa/3.jpg";
import heroImg9 from "../../assets/projects/commercial/gokulum_bank/1.jpg";
import heroImg10 from "../../assets/projects/commercial/gokulum_bank/2.jpg";
import heroImg11 from "../../assets/projects/commercial/gokulum_bank/3.jpg";
import heroImg12 from "../../assets/RhmNRrXw.jpeg";
import heroImg13 from "../../assets/Y5ZHqsXh.jpeg";
import heroImg14 from "../../assets/Pn2hSreZ-scaled.jpeg";
import heroImg15 from "../../assets/011-219PalmTrail-DelrayBeach-FL-33483-FULL-scaled.jpg";
import heroImg16 from "../../assets/Ritchey_Kitchen-1.02.jpg";
import heroImg17 from "../../assets/RhmNRrXw.jpeg";
import heroImg18 from "../../assets/Y5ZHqsXh.jpeg";
import heroImg19 from "../../assets/Pn2hSreZ-scaled.jpeg";
import heroImg20  from "../../assets/011-219PalmTrail-DelrayBeach-FL-33483-FULL-scaled.jpg";
import heroImg21 from "../../assets/Ritchey_Kitchen-1.02.jpg";
import heroImg22 from "../../assets/RhmNRrXw.jpeg";
import heroImg23 from "../../assets/Y5ZHqsXh.jpeg";
import heroImg24 from "../../assets/Pn2hSreZ-scaled.jpeg";
import heroImg25 from "../../assets/011-219PalmTrail-DelrayBeach-FL-33483-FULL-scaled.jpg";
import heroImg26 from "../../assets/Ritchey_Kitchen-1.02.jpg";
import heroImg27 from "../../assets/RhmNRrXw.jpeg";
import heroImg28 from "../../assets/Y5ZHqsXh.jpeg";
import heroImg29 from "../../assets/Pn2hSreZ-scaled.jpeg";
import heroImg30 from "../../assets/011-219PalmTrail-DelrayBeach-FL-33483-FULL-scaled.jpg";
import heroImg31 from "../../assets/Ritchey_Kitchen-1.02.jpg";
import heroImg32 from "../../assets/RhmNRrXw.jpeg";
import heroImg33 from "../../assets/Y5ZHqsXh.jpeg";
import heroImg34 from "../../assets/Pn2hSreZ-scaled.jpeg";
import heroImg35 from "../../assets/011-219PalmTrail-DelrayBeach-FL-33483-FULL-scaled.jpg";
import heroImg36 from "../../assets/Ritchey_Kitchen-1.02.jpg";
import heroImg37 from "../../assets/RhmNRrXw.jpeg";
import heroImg38 from "../../assets/Y5ZHqsXh.jpeg";
import heroImg39 from "../../assets/Pn2hSreZ-scaled.jpeg";
import heroImg40 from "../../assets/011-219PalmTrail-DelrayBeach-FL-33483-FULL-scaled.jpg";
import heroImg41 from "../../assets/Ritchey_Kitchen-1.02.jpg";
import heroImg42 from "../../assets/RhmNRrXw.jpeg";
import heroImg43 from "../../assets/Y5ZHqsXh.jpeg";
import heroImg44 from "../../assets/Pn2hSreZ-scaled.jpeg";


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
      image: heroImg,
    },
    {
      image: heroImg1,
    },
    {
      image: heroImg2,
    },
   
  ];

  const data1 = [
    {
      image: heroImg3,
    },
    {
      image: heroImg4,
    },
    {
      image: heroImg5,
    },
    
  ];

  const data2 = [
    {
      image: heroImg6,
    },
    {
      image: heroImg7,
    },
    {
      image: heroImg8,
    },
    
  ];

  const data3 = [
    {
      image: heroImg9,
    },
    {
      image: heroImg10,
    },
    {
      image: heroImg11,
    },
    
  ];

  const data4 = [
    {
      image: heroImg12,
    },
    {
      image: heroImg13,
    },
    {
      image: heroImg14,
    },
    
  ];

  const data5 = [
    {
      image: heroImg15,
    },
    {
      image: heroImg16,
    },
    {
      image: heroImg17,
    },
    
  ];

  const data6 = [
    {
      image: heroImg18,
    },
    {
      image: heroImg19,
    },
    {
      image: heroImg20,
    },
    
  ];

  const data7 = [
    {
      image: heroImg21,
    },
    {
      image: heroImg22,
    },
    {
      image: heroImg23,
    },
    
  ];


  const data8 = [
    {
      image: heroImg24,
    },
    {
      image: heroImg25,
    },
    {
      image: heroImg26,
    },
    
  ];

  const data9 = [
    {
      image: heroImg27,
    },
    {
      image: heroImg28,
    },
    {
      image: heroImg29,
    },
    
  ];

  const data10 = [
    {
      image: heroImg30,
    },
    {
      image: heroImg31,
    },
    {
      image: heroImg32,
    },
    
  ];


  const data11 = [
    {
      image: heroImg33,
    },
    {
      image: heroImg34,
    },
    {
      image: heroImg35,
    },
    
  ];


  const data12 = [
    {
      image: heroImg36,
    },
    {
      image: heroImg37,
    },
    {
      image: heroImg38,
    },
    
  ];


  const data13 = [
    {
      image: heroImg39,
    },
    {
      image: heroImg40,
    },
    {
      image: heroImg41,
    },
    
  ];

  const data14 = [
    {
      image: heroImg42,
    },
    {
      image: heroImg43,
    },
    {
      image: heroImg44,
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
            {data.map((item) => (
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
            {data1.map((item) => (
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
            {data2.map((item) => (
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
            {data3.map((item) => (
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
            {data4.map((item) => (
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
            {data5.map((item) => (
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
            {data6.map((item) => (
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
            {data7.map((item) => (
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
            {data8.map((item) => (
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
            {data9.map((item) => (
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
            {data10.map((item) => (
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
            {data11.map((item) => (
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
            {data12.map((item) => (
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
            {data13.map((item) => (
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
            {data14.map((item) => (
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
