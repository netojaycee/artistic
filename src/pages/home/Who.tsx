// import React from "react";
import who from "../../assets/who.png";
export default function Who() {
  return (
    <>
      <div className="mx-auto w-[95%] mt-[60px] mb-5">
        <div className="relative min-h-[560px] bg-gradient-to-bl from-[#ECD9C7] to-primary px-[25px] py-[50px] flex flex-col md:flex-row gap-3 items-center">
          <div className="absolute w-[998px] h-[582px] bg-transparent border border-primaryVariant ">
            {" "}
          </div>

          <div className="w-full lg:w-1/2 p-3">
            <img src={who} alt="" className="w-[472px] h-[450px]" />
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-1/2">
            <h2 className="">Your Creative Partner</h2>
            <h1 className="">Who We Are</h1>
            <p className="">
              Artistic Elements is the premier luxury Showroom, and Interior
              Design Studio in South Florida. It is led by husband & wife team,
              Drew and Katya Thompson. Katya is an international award-winning
              licensed Interior Designer and Drew is an MBA and accomplished
              businessman. Their shared talents uniquely allow for Artistic
              Elements to provide a Personalized Luxury Experience like no
              other.
            </p>
            <p className="">
              Our Boutique showcases High-End Furniture • Unique Home
              Accessories • Exquisite Art and Framing • Gorgeous Rugs • Vibrant
              Lighting • Luscious Bedding and Much More
            </p>
            <button className="bg-transparent hover:bg-black  text-white text-center border-2 border-primary px-4 py-2">
              Learn More
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
