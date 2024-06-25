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
import heroImg12 from "../../assets/projects/residential/hasmukh bhai/1.jpg";
import heroImg13 from "../../assets/projects/residential/hasmukh bhai/2.jpg";
import heroImg14 from "../../assets/projects/residential/hasmukh bhai/3.jpg";
import heroImg15 from "../../assets/projects/commercial/sbi_girinagar/1.jpg";
import heroImg16 from "../../assets/projects/commercial/sbi_girinagar/2.jpg";
import heroImg17 from "../../assets/projects/commercial/sbi_girinagar/3.jpg";
import heroImg18 from "../../assets/projects/residential/mrs_veena/1.jpg";
import heroImg19 from "../../assets/projects/residential/mrs_veena/2.jpg";
import heroImg20 from "../../assets/projects/residential/mrs_veena/7.jpg";
import heroImg21 from "../../assets/projects/commercial/coimbatore_office/1.jpg";
import heroImg22 from "../../assets/projects/commercial/coimbatore_office/2.jpg";
import heroImg23 from "../../assets/projects/commercial/coimbatore_office/3.jpg";
import heroImg24 from "../../assets/projects/residential/swanyadeep/1.jpg";
import heroImg25 from "../../assets/projects/residential/swanyadeep/2.jpg";
import heroImg26 from "../../assets/projects/residential/swanyadeep/3.jpg";
import heroImg27 from "../../assets/projects/commercial/ncc_regional/1.jpg";
import heroImg28 from "../../assets/projects/commercial/ncc_regional/2.jpg";
import heroImg29 from "../../assets/projects/commercial/ncc_regional/3.jpg";
import heroImg30 from "../../assets/projects/residential/devanahalli_villa/1.jpg";
import heroImg31 from "../../assets/projects/residential/devanahalli_villa/2.jpg";
import heroImg32 from "../../assets/projects/residential/devanahalli_villa/3.jpg";
import heroImg33 from "../../assets/projects/commercial/adospher/1.jpg";
import heroImg34 from "../../assets/projects/commercial/adospher/2.jpg";
import heroImg35 from "../../assets/projects/commercial/adospher/3.jpg";
import heroImg36 from "../../assets/projects/residential/arihant_villa/1.jpg";
import heroImg37 from "../../assets/projects/residential/arihant_villa/2.jpg";
import heroImg38 from "../../assets/projects/residential/arihant_villa/3.jpg";
import heroImg39 from "../../assets/projects/commercial/gokulum_chits/1.jpg";
import heroImg40 from "../../assets/projects/commercial/gokulum_chits/2.jpg";
import heroImg41 from "../../assets/projects/commercial/gokulum_chits/3.jpg";

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
          Mona Mam's Residence
        </h2>
        <div>
          <Slider {...settings}>
            {data.map((item) => (
              <img src={item.image} alt="hero_Img" className="size-80 w-full" />
            ))}
          </Slider>
        </div>
      </div>

      <div className="pt-28 ">
        <h2 className="mx-auto w-2/3  font-playfairsc font-medium text-[#B39CAB] text-center text-3xl mb-8">
          Sureworks Office
        </h2>
        <div>
          <Slider {...settings}>
            {data1.map((item) => (
              <img src={item.image} alt="hero_Img" className="size-80 w-full" />
            ))}
          </Slider>
        </div>
      </div>

      <div className="pt-28 ">
        <h2 className="mx-auto w-2/3 font-playfairsc font-medium text-[#B39CAB] text-center text-3xl mb-8">
          District Judge Villa
        </h2>
        <div>
          <Slider {...settings}>
            {data2.map((item) => (
              <img src={item.image} alt="hero_Img" className="size-80 w-full" />
            ))}
          </Slider>
        </div>
      </div>

      <div className="pt-28 ">
        <h2 className="mx-auto w-2/3  font-playfairsc font-medium text-[#B39CAB] text-center text-3xl mb-8">
          Gokulum Bank
        </h2>
        <div>
          <Slider {...settings}>
            {data3.map((item) => (
              <img src={item.image} alt="hero_Img" className="size-80 w-full" />
            ))}
          </Slider>
        </div>
      </div>

      <div className="pt-28 ">
        <h2 className="mx-auto w-2/3 font-playfairsc font-medium text-[#B39CAB] text-center text-3xl mb-8">
          Hasmukh Bhai Purva Venezia
        </h2>
        <div>
          <Slider {...settings}>
            {data4.map((item) => (
              <img src={item.image} alt="hero_Img" className="size-80 w-full" />
            ))}
          </Slider>
        </div>
      </div>

      <div className="pt-28 ">
        <h2 className="mx-auto w-2/3 font-playfairsc font-medium text-[#B39CAB] text-center text-3xl mb-8">
          SBI Girinagar Branch
        </h2>
        <div>
          <Slider {...settings}>
            {data5.map((item) => (
              <img src={item.image} alt="hero_Img" className="size-80 w-full" />
            ))}
          </Slider>
        </div>
      </div>

      <div className="pt-28 ">
        <h2 className="mx-auto w-2/3 font-playfairsc font-medium text-[#B39CAB] text-center text-3xl mb-8">
          Mrs Veena's Villa
        </h2>
        <div>
          <Slider {...settings}>
            {data6.map((item) => (
              <img src={item.image} alt="hero_Img" className="size-80 w-full" />
            ))}
          </Slider>
        </div>
      </div>

      <div className="pt-28 ">
        <h2 className="mx-auto w-2/3 font-playfairsc font-medium text-[#B39CAB] text-center text-3xl mb-8">
          Coimbatore's Office
        </h2>
        <div>
          <Slider {...settings}>
            {data7.map((item) => (
              <img src={item.image} alt="hero_Img" className="size-80 w-full" />
            ))}
          </Slider>
        </div>
      </div>

      <div className="pt-28 ">
        <h2 className="mx-auto w-2/3 font-playfairsc font-medium text-[#B39CAB] text-center text-3xl mb-8">
          Swanyadeep's Villa
        </h2>
        <div>
          <Slider {...settings}>
            {data8.map((item) => (
              <img src={item.image} alt="hero_Img" className="size-80 w-full" />
            ))}
          </Slider>
        </div>
      </div>

      <div className="pt-28 ">
        <h2 className="mx-auto w-2/3 font-playfairsc font-medium text-[#B39CAB] text-center text-3xl mb-8">
          NCC Regional's Office
        </h2>
        <div>
          <Slider {...settings}>
            {data9.map((item) => (
              <img src={item.image} alt="hero_Img" className="size-80 w-full" />
            ))}
          </Slider>
        </div>
      </div>
      <div className="pt-28 ">
        <h2 className="mx-auto w-2/3 font-playfairsc font-medium text-[#B39CAB] text-center text-3xl mb-8">
          Devanahalli's Villa
        </h2>
        <div>
          <Slider {...settings}>
            {data10.map((item) => (
              <img src={item.image} alt="hero_Img" className="size-80 w-full" />
            ))}
          </Slider>
        </div>
      </div>
      <div className="pt-28 ">
        <h2 className="mx-auto w-2/3 font-playfairsc font-medium text-[#B39CAB] text-center text-3xl mb-8">
          Adospher's Office
        </h2>
        <div>
          <Slider {...settings}>
            {data11.map((item) => (
              <img src={item.image} alt="hero_Img" className="size-80 w-full" />
            ))}
          </Slider>
        </div>
      </div>
      <div className="pt-28 ">
        <h2 className="mx-auto w-2/3 font-playfairsc font-medium text-[#B39CAB] text-center text-3xl mb-8">
          Arihant's Villa
        </h2>
        <div>
          <Slider {...settings}>
            {data12.map((item) => (
              <img src={item.image} alt="hero_Img" className="size-80 w-full" />
            ))}
          </Slider>
        </div>
      </div>
      <div className="pt-28 ">
        <h2 className="mx-auto w-2/3 font-playfairsc font-medium text-[#B39CAB] text-center text-3xl mb-8">
          Gokulum Chits
        </h2>
        <div>
          <Slider {...settings}>
            {data13.map((item) => (
              <img src={item.image} alt="hero_Img" className="size-80 w-full" />
            ))}
          </Slider>
        </div>
      </div>

      <br />
      <br />
      {/* <Footer /> */}
    </div>
  );
}
