// import React from "react";
import who from "../../assets/who.png";
export default function Who() {
  return (
    <>
      <div className="mx-auto w-full lg:w-[80%] mt-[60px] mb-5">
        <div className="relative w-full bg-gradient-to-bl from-[#ECD9C7] to-primary px-[25px] py-[30px] flex flex-col md:flex-row gap-3 items-center justify-center">
          <div className="absolute w-[97%] h-[103%] border border-primaryVariant ">
          </div>

          <div className="w-full lg:w-1/2 p-3 z-[9999] ">
            <img src={who} alt="" className="w-[470px]" />
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-1/2 z-[9999] tems-center lg:items-start">
            <h2 className="text-[#3f3f3f] mb-[-33px] hero-text fonts-nicky">Your Creative Partner</h2>
            <h1 className="text-white hero-text  lg:mt-[-20px] mb-3 lg:mb-10">Who We Are</h1>
            <p className="text-white mb-3 fonts-lato w-full lg:w-[90%] ">
              Artistic Elements is the premier luxury Showroom, and Interior
              Design Studio in South Florida. It is led by husband & wife team,
              Drew and Katya Thompson. Katya is an international award-winning
              licensed Interior Designer and Drew is an MBA and accomplished
              businessman. Their shared talents uniquely allow for Artistic
              Elements to provide a Personalized Luxury Experience like no
              other.
            </p>
            <p className="text-white mb-2 w-full lg:w-[90%]">
              Our Boutique showcases High-End Furniture • Unique Home
              Accessories • Exquisite Art and Framing • Gorgeous Rugs • Vibrant
              Lighting • Luscious Bedding and Much More
            </p>
            <button className="bg-transparent hover:bg-black  text-white text-center border-2 border-primary px-4 py-2 w-1/2">
              Learn More
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
