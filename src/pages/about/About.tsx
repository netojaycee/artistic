import { useEffect } from "react";
import who from "../../assets/011.jpg";
import img2 from "../../assets/13-4.jpg";

import { HiCheckCircle } from "react-icons/hi";
import { motion } from "framer-motion";
export default function About() {
  useEffect(function () {
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    scrollToTop();
  }, []);

  return (
    <div>
      <div className="py-40 bg-neutral-400 w-full h-60 relative text-white">
        <img
          src={who}
          alt=""
          className="w-full h-72 md:h-[300px] absolute top-0"
        />
        <p className="text-center absolute top-1/3 text-sm right-0 left-0 font-bold">
          HOME / ABOUT US
        </p>
        <h2 className="text-center font-normal text-[92px] fonts-nicky absolute bottom-1/4 left-0 right-0">
          About Us
        </h2>
      </div>

      <div className="mx-auto w-full mt-[60px] mb-5 md:w-2/3 ">
        <div className="px-10">
          <p className="text-primary text-lg">GET TO KNOW US</p>
          <h2 className="text-3xl font-bold font-sans">
            We're Providing Best Quality Decorative Wall Application
          </h2>
          <hr className="w-10 border-2 border-primary mt-2" />
        </div>

        <div className="px-10 mt-12 ">
          <p>
            We are offering our range of services which are designer Laser Cut
            Application for MS/SS walls, dividers, ceilings, exteriors and
            columns etc. We have a team which is dedicated to provide premium
            quality of products and services to our clients.
          </p>
        </div>

        <div className="md:flex">
          <div className="px-10 mt-8 text-left w-3/4">
            <h2 className="font-bold text-lg flex space-x-2">
              {" "}
              <HiCheckCircle className="size-7" /> Quality Material
            </h2>
            <p className="mt-4">
              Our clients like the quality of our services and have helped us to
              grow by providing recurring orders.
            </p>
          </div>

          <div className="px-10 mt-8 text-left w-3/4">
            <h2 className="font-bold text-lg flex space-x-2">
              <HiCheckCircle className="size-7" />
              Professional Team
            </h2>
            <p className="mt-4">
              We have a team which is dedicated to providing the best to our
              clients
            </p>
          </div>
        </div>

        <motion.div className="py-10 md:relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1, x: "0%" }}
            animate={{ x: "60%" }}
            transition={{
              type: "string",
              stiffness: 250,
              damping: 200,
              duration: 1.5,
            }}
            className="md:flex md:flex-row-reverse md:justify-center md:items-center"
          >
            <img
              src={who}
              alt=""
              className="size-96 mx-auto rounded-r-[120px] rounded-bl-[120px] rounded-tl-none"
            />
            <img
              src={img2}
              alt=""
              className="size-56 rounded-l-[90px] rounded-tr-[90px] hidden lg:flex lg:absolute lg:left-14 xl:left-28 "
            />
          </motion.div>
        </motion.div>

        <div className="text-center w-4/5  text-white bg-brown-400 py-10  mx-auto rounded-r-[78px] rounded-bl-[78px] rounded-tl-none md:flex md:flex-col md:w-2/3 md:items-center">
          <h2 className=" text-2xl font-bold font-sans">Join Our Newsletter</h2>
          <p className="w-3/4 mx-auto mt-4">
            Signup to our Newsletter to get the latest updates.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
            className="py-3 px-2 mt-8 w-4/5"
          />
          <button className="bg-black text-white py-2 px-4 font-sans text-sm mt-5">
            Subscribe
          </button>
        </div>
      </div>

      <div>
        <iframe
          className="w-full size-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4605218612305!2d77.53775313855517!3d13.069974112768858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae22b892f04965%3A0x1a60574c96b6d3f7!2s38%2C%20Narayan%20Gowda%20Rd%2C%20KVP%20Nagar%2C%20Vidyaranyapura%2C%20Bengaluru%2C%20Karnataka%20560014%2C%20India!5e0!3m2!1sen!2sng!4v1717764327030!5m2!1sen!2sng"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
