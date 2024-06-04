// import { HiBars3BottomLeft, HiXMark } from "react-icons/hi2";
// import Logo from "../../assets/logo-header-white.svg";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// export default function NavBar() {
//   const [openNav, setOpenNav] = useState(false);
//   return (
//     <div>
//       <div
//         style={{
//           background:
//             "linear-gradient(90.31deg,#CBB6A4 .33%,#ECD9C7 14.62%,#CDB7A6 41.41%,#B39C8B 63.89%)",
//         }}
//         className=" z-50  w-full fixed px-3 py-4 h-20 md:h-28  flex justify-between md:px-24 "
//       >
//         <div className="md:hidden">
//           <HiBars3BottomLeft
//             onClick={() => setOpenNav(true)}
//             className="size-8 text-[#c7b72c] cursor-pointer"
//           />
//         </div>
//         <div className="md:flex hidden mt-8">
//           <ul className="flex justify-around space-x-4">
//             <li className="text-black  font-semibold text-lg">
//               <Link to="/project">PROJECTS</Link>
//             </li>
//             <li className="text-black  font-semibold text-lg">
//               <Link to="/design">DESIGN</Link>
//             </li>
//             <li className="text-black  font-semibold text-lg">SHOWROOM</li>
//             <li className="text-black  font-semibold text-lg">OUR TEAM</li>
//           </ul>
//         </div>
//         <div>
//           <img
//             src={Logo}
//             alt="logo"
//             className="size-40 -mt-14 md:bg-black md:h-20 md:mt-1"
//           />
//         </div>
//       </div>
//       <div
//         className={`modal md:hidden transition-all duration-500 ${
//           openNav ? "" : "hidden"
//         }`}
//       >
//         <div className="fixed h-full z-50   bg-white top-0 w-1/2 left-0 md:hidden">
//           <HiXMark
//             onClick={() => setOpenNav(false)}
//             className="size-8 absolute cursor-pointer left-3 top-5 text-[#c7b72c]"
//           />
//           <ul className="pt-20 px-4 text-center">
//             <li className="  cursor-pointer font-medium text-black p-2 hover:bg-[#c7b72c] hover:text-white">
//               <Link to="/">HOME</Link>
//             </li>
//             <li className="  cursor-pointer mt-2 font-medium text-black p-2 hover:bg-[#c7b72c] hover:text-white">
//               <Link to="/design">DESIGN</Link>
//             </li>
//             <li className="  cursor-pointer  font-medium text-black p-2 hover:bg-[#c7b72c] hover:text-white ">
//               <Link to="/project">PROJECTS</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Collapse, IconButton, Typography } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "./Logo";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 mx-5 lg:mx-0 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-white">
      <li className="p-1 font-medium">
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          PROJECTS{" "}
        </a>
      </li>
      <hr className="border-primary lg:hidden" />
      <li className="p-1 font-medium">
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          DESIGN{" "}
        </a>
      </li>
      <hr className="border-primary lg:hidden" />
      <li className="p-1 font-medium">
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          SHOP NOW
        </a>
      </li>
      <hr className="border-primary lg:hidden" />
      <div className="">
        <Logo color="white" />
      </div>

      <li className="p-1 font-medium">
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          SHOWROOM
        </a>
      </li>
      <hr className="border-primary lg:hidden" />

      <li className="p-1 font-medium">
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          OUR TEAM
        </a>
      </li>
      <hr className="border-primary lg:hidden" />
      <li className="p-1 font-medium">
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          ABOUT
        </a>
      </li>
      <hr className="border-primary lg:hidden" />
      
    </ul>
  );
}

export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <>
      <div className=" bg-[#5c4b3b] z-[9999] bg-opacity-30 w-full fixed top-0">
        <div className="px-5 py-2 flex justify-evenly items-center w-full ">
          {/* <Logo color={"white"} /> */}

          <div className="hidden lg:block">
            <NavList />
          </div>
          <div
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </div>
        </div>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </>
  );
}
