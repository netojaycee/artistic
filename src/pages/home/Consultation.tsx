// import React from "react";
import { useNavigate } from "react-router-dom";
import consult from "../../assets/services/canva1.jpg";

export default function Consultation() {
  const navigate = useNavigate();
  return (
    <>
      <div className="mx-auto w-[80%] mt-[30px] mb-5">
        <div className="relative w-full  px-[25px] py-[20px] flex flex-col md:flex-row gap-3 items-center justify-center">
          {/* <div className="absolute w-[97%] h-[103%] border border-primaryVariant ">
          </div> */}
           
           <div className="w-full lg:w-1/2 p-2 z-[1000] ">
            <img src={consult} alt="" className="w-[500px]" />
          </div>

          <div className="flex flex-col gap-2 w-full lg:w-1/2 z-[1000] tems-center lg:items-start">
            <h2 className="mb-[-33px] hero-text fonts-nicky text-black">
              Personalized luxury
            </h2>
            <h1 className=" lg:hero-text text-[30px]   mb-3 lg:mb-10 text-primary">
              Interior Design
            </h1>
            <p className="text-black mb-3 fonts-lato w-full lg:w-[90%] ">
            We believe that luxury interior design should transcend mere aesthetics, embodying the unique style and functional needs of each client. The essence of Personalized Luxury permeates all aspects of our work. From our bespoke designs to meticulous project management and final execution, we strive to make your dreams a reality. As your creative partner, we provide a comprehensive turnkey solution, ensuring every detail reflects your vision.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="bg-transparent hover:bg-black  hover:text-white text-black text-center border-2 border-primary px-4 py-2 w-full lg:w-1/2"
            >
              Get Consultation
            </button>
          </div>
         
        </div>
      </div>
    </>
  );
}
