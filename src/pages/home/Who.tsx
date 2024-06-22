// import React from "react";
import { Link } from "react-router-dom";
import who from "../../assets/who.png";
export default function Who() {
  return (
    <>
      <div className="mx-auto w-full mt-[69px] mb-5 md:mt-[150px] lg:mx-auto lg:w-[90%] xl:w-[80%]">
        <div className="relative w-full bg-gradient-to-bl from-[#ECD9C7] to-primary px-[25px] py-[30px] flex flex-col md:flex-row gap-3 items-center justify-center">
          <div className="absolute w-[97%] h-[103%] border border-primaryVariant xl:mt-20 xl:w-[110%]"></div>

          <div className="w-full lg:w-1/2 p-3 z-[1000] ">
            <img src={who} alt="" className="w-[470px]" />
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-1/2 z-[1000] tems-center lg:items-start">
            <h2 className="text-[#8a5353] mb-[-33px] hero-text fonts-nicky">
              Your Creative Partner
            </h2>
            <h1 className="text-white hero-text   mb-3 lg:mb-10">Who We Are</h1>
            <p className="text-white mb-3 fonts-lato w-full lg:w-[90%] ">
              Since our inception in 2014, INNOV8 Interiors has been at the
              forefront of delivering exceptional interior design and turnkey
              solutions in Bangalore, Mumbai, Surat, Goa, Vapi and Jodhpur. With
              a passion for transforming spaces into vibrant and functional
              environments, we have established ourselves as a trusted name in
              the industry. At innov8 Interiors, we believe that every space has
              its unique story waiting to be told. Our team of talented
              designers and craftsmen work tirelessly to bring these stories to
              life, blending creativity with functionality to create spaces that
              exceed our clients' expectations.
            </p>
            <p className="text-white mb-2 w-full lg:w-[90%]">
              Our turnkey solutions encompass every stage of the project, from
              conceptualization and design to execution and final delivery. We
              understand the importance of deadlines and budget constraints, and
              strive to deliver projects on time and within budget without
              compromising on quality. At Vinayaka Interiors, we don't just
              design spaces; we create experiences. Our goal is to inspire and
              delight our clients with designs that not only meet their
              functional needs but also elevate their lifestyle.
            </p>
            <button className="bg-transparent hover:bg-black  text-white text-center border-2 border-primary px-4 py-2 w-1/2">
              <Link to="/design">Our Services</Link>
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
