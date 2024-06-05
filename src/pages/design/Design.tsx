// import Footer from "../../components/ui/Footer";
import heroImg2 from "../../assets/RhmNRrXw.jpeg";
import { Link } from "react-router-dom";
// import { HiBars3BottomLeft, HiXMark } from "react-icons/hi2";
// import Logo from "../../assets/logo-header.svg";
// import { useState } from "react";

export default function Design() {
  // const [openNav, setOpenNav] = useState(false);

  return (
    <div>
      {/* <div>
        <div className=" z-50 bg-white  w-full fixed px-3 py-4 h-20 md:h-28  flex justify-between md:px-24 ">
          <div className="md:hidden">
            <HiBars3BottomLeft
              onClick={() => setOpenNav(true)}
              className="size-8 text-[#c7b72c] cursor-pointer"
            />
          </div>
          <div className="md:flex hidden mt-8">
            <ul className="flex justify-around space-x-4">
              <li className="text-black  font-semibold text-lg">
                <Link to="/project">PROJECTS</Link>
              </li>
              <li className="text-black  font-semibold text-lg">
                <Link to="/design">DESIGN</Link>
              </li>
              <li className="text-black  font-semibold text-lg">SHOWROOM</li>
              <li className="text-black  font-semibold text-lg">OUR TEAM</li>
            </ul>
          </div>
          <div>
            <img
              src={Logo}
              alt="logo"
              className="size-40 -mt-14  md:h-20 md:mt-1"
            />
          </div>
        </div>
        <div
          className={`modal md:hidden transition-all duration-500 ${
            openNav ? "" : "hidden"
          }`}
        >
          <div className="fixed h-full z-50   bg-white top-0 w-1/2 left-0 md:hidden">
            <HiXMark
              onClick={() => setOpenNav(false)}
              className="size-8 absolute cursor-pointer left-3 top-5 text-[#c7b72c]"
            />
            <ul className="pt-20 px-4 text-center">
              <li className="  cursor-pointer font-medium text-black p-2 hover:bg-[#c7b72c] hover:text-white">
                <Link to="/">HOME</Link>
              </li>
              <li className="  cursor-pointer mt-2 font-medium text-black p-2 hover:bg-[#c7b72c] hover:text-white">
                <Link to="/design">DESIGN</Link>
              </li>
              <li className="  cursor-pointer  font-medium text-black p-2 hover:bg-[#c7b72c] hover:text-white ">
                <Link to="/project">PROJECTS</Link>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      <div
        style={{
          background:
            "linear-gradient(90.31deg,#CBB6A4 .33%,#ECD9C7 14.62%,#CDB7A6 41.41%,#B39C8B 63.89%)",
        }}
        className="py-[150px] bg-neutral-400 w-full h-60 relative"
      >
        <h2 className="text-center font-normal text-[92px] fonts-nicky absolute bottom-1/3 left-0 right-0  ">
          Design
        </h2>
      </div>

      <div className="mt-10 px-5 text-sm italic">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nesciunt
          a minus doloremque eveniet totam assumenda quae repellendus nulla
          expedita. Sed autem doloribus quaerat quisquam nulla recusandae
          consequatur magnam possimus. Soluta repellat, officia repudiandae
          reiciendis quo esse iure voluptatem, commodi quod ipsam, obcaecati
          quis corporis sit labore placeat fugiat possimus nihil. Architecto
          unde corporis quas inventore, facere pariatur fugit quos!
        </p>
      </div>

      <div className="mt-16">
        <img src={heroImg2} alt="hero_Img" className="size-80 w-full" />
        <h2 className="text-center font-semibold font-nicky italic  text-4xl">
          01 Concept
        </h2>
        <h2 className="text-3xl mt-2 mb-3 text-[#B39CAB]  text-center font-playfairsc ">
          DEVELOPMENT
        </h2>
        <p className="px-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nisi
          ea maiores quo vitae officia tempora quibusdam ad perspiciatis illum
          odit quos eveniet, id dignissimos mollitia aut rerum? Consequuntur,
          facilis. Optio modi quod cum, architecto sint iure! Repellendus esse
          quis laborum ipsam vel architecto aliquam praesentium facere beatae
          dignissimos dolorum, dolores maiores, tempora obcaecati itaque
          molestias sed deleniti consequuntur pariatur.
        </p>
      </div>

      <div className="mt-16">
        <img src={heroImg2} alt="hero_Img" className="size-80 w-full" />
        <h2 className="text-center font-semibold font-nicky italic  text-4xl">
          01 Concept
        </h2>
        <h2 className="text-3xl mt-2 mb-3 text-[#B39CAB]  text-center font-playfairsc ">
          DEVELOPMENT
        </h2>
        <p className="px-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nisi
          ea maiores quo vitae officia tempora quibusdam ad perspiciatis illum
          odit quos eveniet, id dignissimos mollitia aut rerum? Consequuntur,
          facilis. Optio modi quod cum, architecto sint iure! Repellendus esse
          quis laborum ipsam vel architecto aliquam praesentium facere beatae
          dignissimos dolorum, dolores maiores, tempora obcaecati itaque
          molestias sed deleniti consequuntur pariatur.
        </p>
      </div>

      <div className="mt-16">
        <img src={heroImg2} alt="hero_Img" className="size-80 w-full" />
        <h2 className="text-center font-semibold font-nicky italic  text-4xl">
          01 Concept
        </h2>
        <h2 className="text-3xl mt-2 mb-3 text-[#B39CAB]  text-center font-playfairsc ">
          DEVELOPMENT
        </h2>
        <p className="px-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nisi
          ea maiores quo vitae officia tempora quibusdam ad perspiciatis illum
          odit quos eveniet, id dignissimos mollitia aut rerum? Consequuntur,
          facilis. Optio modi quod cum, architecto sint iure! Repellendus esse
          quis laborum ipsam vel architecto aliquam praesentium facere beatae
          dignissimos dolorum, dolores maiores, tempora obcaecati itaque
          molestias sed deleniti consequuntur pariatur.
        </p>
      </div>

      <div className="mt-16">
        <img src={heroImg2} alt="hero_Img" className="size-80 w-full" />
        <h2 className="text-center font-semibold font-nicky italic  text-4xl">
          01 Concept
        </h2>
        <h2 className="text-3xl mt-2 mb-3 text-[#B39CAB]  text-center font-playfairsc ">
          DEVELOPMENT
        </h2>
        <p className="px-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nisi
          ea maiores quo vitae officia tempora quibusdam ad perspiciatis illum
          odit quos eveniet, id dignissimos mollitia aut rerum? Consequuntur,
          facilis. Optio modi quod cum, architecto sint iure! Repellendus esse
          quis laborum ipsam vel architecto aliquam praesentium facere beatae
          dignissimos dolorum, dolores maiores, tempora obcaecati itaque
          molestias sed deleniti consequuntur pariatur.
        </p>
      </div>

      <div className="mt-16">
        <img src={heroImg2} alt="hero_Img" className="size-80 w-full" />
        <h2 className="text-center font-semibold font-nicky italic  text-4xl">
          01 Concept
        </h2>
        <h2 className="text-3xl mt-2 mb-3 text-[#B39CAB]  text-center font-playfairsc ">
          DEVELOPMENT
        </h2>
        <p className="px-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nisi
          ea maiores quo vitae officia tempora quibusdam ad perspiciatis illum
          odit quos eveniet, id dignissimos mollitia aut rerum? Consequuntur,
          facilis. Optio modi quod cum, architecto sint iure! Repellendus esse
          quis laborum ipsam vel architecto aliquam praesentium facere beatae
          dignissimos dolorum, dolores maiores, tempora obcaecati itaque
          molestias sed deleniti consequuntur pariatur.
        </p>
      </div>

      <div className="mt-16">
        <img src={heroImg2} alt="hero_Img" className="size-80 w-full" />
        <h2 className="text-center font-semibold font-nicky italic  text-4xl">
          01 Concept
        </h2>
        <h2 className="text-3xl mt-2 mb-3 text-[#B39CAB]  text-center font-playfairsc ">
          DEVELOPMENT
        </h2>
        <p className="px-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nisi
          ea maiores quo vitae officia tempora quibusdam ad perspiciatis illum
          odit quos eveniet, id dignissimos mollitia aut rerum? Consequuntur,
          facilis. Optio modi quod cum, architecto sint iure! Repellendus esse
          quis laborum ipsam vel architecto aliquam praesentium facere beatae
          dignissimos dolorum, dolores maiores, tempora obcaecati itaque
          molestias sed deleniti consequuntur pariatur.
        </p>
      </div>

      <div className="my-20 text-center mx-auto w-2/3">
        <button className="p-2 border-2 border-[#B39CAB] ">
          <Link to="/contact">GET CONSULTATION</Link>
        </button>
      </div>

      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
}
