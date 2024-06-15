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
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
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
        <h2 className="text-center text-primary font-bold text-xl">
          Our trusted partners
        </h2>
      </div>
      <div className="py-5">
        <Slider {...settings}>
          {data.map((item) => (
            <img
              src={item.image}
              width={200}
              height={200}
              alt=""
              className=" size-16 md:size-40 rounded-lg"
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
