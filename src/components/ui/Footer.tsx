import { BsTelephoneFill } from "react-icons/bs";

import { GrMail } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className=" py-8 bg-black mt-0">
      <div>
        <div className="text-center text-white md:px-40">
          <div className="flex lg:flex-row flex-col lg:items-start items-center justify-between md:space-x-20">
            <div className=" mb-5 lg:mb-0">
              <h2 className="font-bold text-xl">Innov8 Interiors</h2>
              <p className=" mt-2">38, Narayan Gowda Layout,</p>
              <p className=" mt-1">
                Vidryaranyapura, Bengaluru, Karnataka 560097, India.
              </p>
              <div className="  my-2 flex justify-center items-center flex-col space-y-2">
                <p className="flex space-x-2">
                  <BsTelephoneFill className="size-3 mt-[6px]" /> :{" "}
                  <span> +91 84968 47337</span>
                </p>
                <p className="flex space-x-2">
                  <GrMail className="size-4 mt-1" />:{" "}
                  <span> Gmail-info.innov8@gmail.com</span>
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-bold text-xl mb-2">OPENING HOURS</h2>
              <p className="  ">Monday - Sunday 9:00am - 6:00pm</p>
              <p className=" "> Except Monday 9:30am - 6:00pm</p>
            </div>
            <div className="mt-6 md:mt-0">
              <h2 className="text-xl font-bold">Useful Links</h2>
              <p className="mt-3">Home</p>
              <p>
                <Link to="/design">Services</Link>
              </p>
              <p>
                {" "}
                <Link to="/projects">Portfolio</Link>
              </p>
              <p>
                <Link to="/about">About Us</Link>
              </p>
              <p>
                <Link to="/contact">Contact Us</Link>{" "}
              </p>
            </div>
          </div>
          <div className="mt-8 ">
            <p>@ 2024 INNOV8 Interiors. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
