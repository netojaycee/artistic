import brand1 from "../../assets/partners/bosch.png";
import brand2 from "../../assets/partners/crompton.png";
import brand3 from "../../assets/partners/ruhe.png";
import brand4 from "../../assets/partners/ebco_logo.jpg.webp";
import brand5 from "../../assets/partners/elica.jpeg";
import brand6 from "../../assets/partners/everyday.png";
import Slider from "react-slick";

export default function Suppliers() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,

    // centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const data = [
    { image: brand1 },
    { image: brand2 },
    { image: brand3 },
    { image: brand4 },
    { image: brand5 },
    { image: brand6 },
  ];
  return (
    <>
      <div className="p-8 ">
        <div className="lg:flex">
          <div className="lg:w-[40%]">
            <h2 className="text-[20px] lg:text-[25px] font-bold">
              Our Trusted Partners
            </h2>
            <h2 className="mt-6 bg-black text-white p-10 leading-[33px] text-[12px] md:text-[20px] lg:text[30px] w-full lg:w-[70%]">
              Innov8 Interiors partners with trusted suppliers who uphold our
              standards of quality and craftsmanship, ensuring excellence in
              every project.
            </h2>
          </div>
          <div className="lg:w-[60%] lg:mt-24">
            <div className="lg:flex lg:flex-col lg:space-y-8 lg:max-h-[500px]">
              <div className="lg:h-[50%]">
                <Slider {...settings}>
                  {data.map(({ image }, index) => (
                    <div key={index}>
                      <img
                        src={image}
                        alt=""
                        className="size-48  mx-auto pb-5 mt-3 lg:mt-0 lg:w-24 lg:h-24 " // Adjust the width and height as needed
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div>
                {" "}
                <Slider {...settings}>
                  {data.map(({ image }, index) => (
                    <div key={index}>
                      <img
                        src={image}
                        alt=""
                        className="size-48  mx-auto pb-5 mt-3 lg:mt-0 lg:size-24" // Adjust the width and height as needed
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
