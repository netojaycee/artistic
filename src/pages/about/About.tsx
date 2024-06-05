// import { useState } from "react";
// import { HiBars3BottomLeft, HiXMark } from "react-icons/hi2";
// import { Link } from "react-router-dom";
// import Logo from "./assets/logo-header.svg";
// import Footer from "./components/ui/Footer";

import Who from "../home/Who";

export default function About() {
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
              className="size-40 -mt-14 md:h-20 md:mt-1"
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
        className="py-40 bg-neutral-400 w-full h-60 relative"
      >
        <h2 className="text-center font-normal text-[92px] fonts-nicky absolute bottom-1/3 left-0 right-0">
          About Us
        </h2>
      </div>

      <Who />

      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
}
