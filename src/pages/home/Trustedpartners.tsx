import Slider from "react-slick";
import img1 from "../../assets/partners/kaff.png";
import img2 from "../../assets/partners/futura.png";
import img3 from "../../assets/partners/crompton.png";
import img4 from "../../assets/partners/ebco_logo.jpg.webp";
import img5 from "../../assets/partners/faber.png";
import img6 from "../../assets/partners/everyday.png";
import img7 from "../../assets/partners/franke.png";
import img8 from "../../assets/partners/hettich.png";
import img9 from "../../assets/partners/ruhe.png";
import img10 from "../../assets/partners/philips.png";

export default function TrustedPartners() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
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
    {
      image: img7,
    },
    {
      image: img8,
    },
    {
      image: img9,
    },
    {
      image: img10,
    }
  ];
  return (
    <>
    <div className="py-10">
      <div>
        <h1 className="text-center  text-primaryVariant  " style={{fontSize:'30px'}}>
          Our Trusted Partners
        </h1>
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
 {/* <div style={{textAlign:'center'}}>
    <button className="bg-transparent hover:bg-black hover:text-white  text-black text-center border-2 border-primary px-4 py-2">
             See All Partners
            </button>
            </div> */}

           

</>
    
  );
}
