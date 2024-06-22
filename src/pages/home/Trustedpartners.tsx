import Slider from "react-slick";
import img1 from "../../assets/13-1.jpg";
import img2 from "../../assets/13-2.jpg";
import img3 from "../../assets/13-3.jpg";
import img4 from "../../assets/13-4.jpg";
import img5 from "../../assets/13-5.jpg";
import img6 from "../../assets/13-6.jpg";

export default function TrustedPartners() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
    centerMode: true,
    arrows: false,
  };

  const data = [
    {
      image: img1,
    },
    {
      image: img2,
    },
    {
      image: img3,
    },
    {
      image: img4,
    },
    {
      image: img5,
    },
    {
      image: img6,
    },
  ];
  return (
    <div className="py-10">
      <div>
        <h2 className="text-center  text-primaryVariant  hero-text">
          Our Trusted Partners
        </h2>
      </div>
      <div className="py-5 md:w-2/3 md:mx-auto">
        <Slider {...settings}>
          {data.map((item) => (
            <img
              src={item.image}
              width={500}
              height={200}
              alt=""
              className="size-32 md:size-40 rounded-lg"
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
