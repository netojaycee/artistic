import interior1 from "../../assets/interior1.jpg";
import interior2 from "../../assets/interior2.jpg";
import interior3 from "../../assets/interior3.jpg";
import interior4 from "../../assets/interior4.webp";

const interiorData = [
  {
    number: "01",
    title: "Book an appointment",
    image: interior1,
  },
  {
    number: "02",
    title: "Meet our designers",
    image: interior2,
  },
  {
    number: "03",
    title: "Personalise your designs",
    image: interior3,
  },
  {
    number: "04",
    title: "Move in",
    image: interior4,
  },
];

export default function Process() {
  return (
    <>
      <div className="p-10 flex flex-col lg:gap-10 gap-5">
        <h1
          className="text-center  text-primaryVariant  "
          style={{ fontSize: "30px" }}
        >
          Our Process
        </h1>
        <p className="lg:px-5 text-[14px] lg:text-[18px] lg:leading-8 font-[400] text-[#222]">
          You book a consultation, get guided by one of the top-notch interior
          designers, and we take care of the rest, from start to finish. We have
          done it for more than 1,000 homes already.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {interiorData.map((item, index) => (
            <div key={index} className="flex flex-col">
              <img src={item.image} alt="" className="" />
              <div className="flex items-center gap-2">
                <p className="text-[24px] lg:text-[40px]">{item.number}</p>
                <p className="text-[14px] lg:text-[20px]">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
