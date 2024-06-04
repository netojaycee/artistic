import { useState } from "react";
import { HiBars3BottomLeft, HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Logo from "./assets/logo-header.svg";
import Footer from "./components/ui/Footer";

export default function Contact() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div>
      <div>
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
      </div>

      <div
        style={{
          background:
            "linear-gradient(90.31deg,#CBB6A4 .33%,#ECD9C7 14.62%,#CDB7A6 41.41%,#B39C8B 63.89%)",
        }}
        className="py-40 bg-neutral-400 w-full h-60 relative"
      >
        <h2 className="text-center font-bold text-5xl font-nicky absolute bottom-1/3 left-0 right-0  italic">
          Contact
        </h2>
      </div>

      <div className="bg-slate-200 py-20">
        <div className="text-center w-2/3 mx-auto mt-20">
          <h2 className="font-bold text-lg">Visit our Showrrom Storefront:</h2>
          <p>400 E. Palmetto Park Rd.,</p>
          <p>Boca Raton, FL 33432</p>
          <p className="mt-8 font-bold">Showroom Hours:</p>
          <p>Monday - Friday 10:00 - 5: 00</p>
          <p className="mt-8 text-lg">Got a question?</p>
          <p className="font-bold">Call us(561) 750-1554</p>
          <p className="font-bold">Or email info@the artisteclelements.com</p>
        </div>

        <div className="my-20 w-full px-5">
          <form action="">
            <div className="md:w-4/5 md:mx-auto md:flex md:space-x-10 md:justify-center">
              <div className="md:w-1/2">
                <label className="block font-semibold" htmlFor="firstName">
                  First Name <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="p-2 w-full outline-none"
                />
              </div>

              <div className="mt-5 md:w-1/2 md:mt-0">
                <label className="block font-semibold" htmlFor="lastName">
                  Last Name <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="p-2 w-full outline-none"
                />
              </div>
            </div>

            <div className="md:w-4/5 md:mx-auto md:flex md:space-x-10 md:justify-center">
              <div className="mt-5 md:w-1/2">
                <label className="block font-semibold" htmlFor="email">
                  Email <span className="text-red-700">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="p-2 w-full outline-none"
                />
              </div>

              <div className="mt-5 md:w-1/2">
                <label className="block font-semibold" htmlFor="phone">
                  Phone <span className="text-red-700">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="p-2 w-full outline-none"
                />
              </div>
            </div>

            <div className="md:w-4/5 md:mx-auto md:flex md:space-x-10 md:justify-center">
              <div className="mt-5 md:w-1/2">
                <h2 className="font-semibold">
                  Checkbox <span className="text-red-700">*</span>
                </h2>
                <div className="flex space-x-3">
                  <input type="radio" />
                  <p>Interior Design Services</p>
                </div>

                <div className="flex space-x-3 mt-3">
                  <input type="radio" />
                  <p>Furnishings & Home Decor</p>
                </div>

                <div className="flex space-x-3 mt-3">
                  <input type="radio" />
                  <p>Consultation</p>
                </div>
              </div>

              <div className="mt-5 md:w-1/2">
                <label className="block font-semibold" htmlFor="message">
                  Our Message <span className="text-red-700">*</span>
                </label>
                <textarea
                  name="phone"
                  rows={10}
                  className="p-2 rounded resize-none w-full outline-none"
                ></textarea>
              </div>
            </div>

            <div
              style={{
                background:
                  "linear-gradient(90.31deg,#CBB6A4 .33%,#ECD9C7 14.62%,#CDB7A6 41.41%,#B39C8B 63.89%)",
              }}
              className="mt-5 md:w-4/5 md:mx-auto"
            >
              <button className="w-full py-3 text-white rounded">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
