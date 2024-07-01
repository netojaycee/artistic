// import React from "react";
import { Link } from "react-router-dom";
import who from "../../assets/partners/philips.png";
export default function Who() {
  return (
    <>
      <div className="mx-auto w-full mt-[69px] mb-5 md:mt-[150px] lg:mx-auto lg:w-[90%] xl:w-[80%]">
        <div className="relative w-full bg-gradient-to-bl from-[#ECD9C7] to-primary px-[25px] py-[30px] flex flex-col md:flex-row gap-3 items-center justify-center">
          <div className="absolute w-[97%] h-[103%] border border-primaryVariant xl:mt-20 xl:w-[110%]"></div>

          <div className="w-full lg:w-1/2 p-3 z-[1] ">
            <img src={who} alt="" className="w-[470px]" />
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-1/2 z-[1000] tems-center lg:items-start">
            <h2 className="text-[#8a5353] mb-[-33px] hero-text fonts-nicky">
              About Us
            </h2>
            <h1 className="text-white hero-text   mb-3 lg:mb-10">Who We Are</h1>
            <p className="text-white mb-3 fonts-lato w-full lg:w-[90%] ">
              Since 2014, INNOV8 Interiors has delivered exceptional interior
              design and turnkey solutions in Bangalore, Mumbai, Surat, Goa,
              Vapi, and Jodhpur. Renowned for transforming spaces into vibrant,
              functional environments, we blend creativity with functionality to
              exceed clients' expectations. Our talented team of designers and
              craftsmen passionately bring each space's unique story to life.
            </p>
            <p className="text-white mb-2 w-full lg:w-[90%]">
              Our turnkey solutions cover every stage, from conceptualization
              and design to execution and delivery, ensuring timely and
              budget-friendly results without compromising quality. At Innov8
              Interiors, we create experiences that inspire and delight, meeting
              functional needs while elevating lifestyles.
            </p>
            <button className="bg-transparent hover:bg-black  text-white text-center border-2 border-primary px-4 py-2 w-1/2">
              <Link to="/contact">Get Consultation</Link>
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
