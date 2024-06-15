import { useEffect } from "react";

export default function Contact() {
  useEffect(function () {
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    scrollToTop();
  }, []);

  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(90.31deg,#CBB6A4 .33%,#ECD9C7 14.62%,#CDB7A6 41.41%,#B39C8B 63.89%)",
        }}
        className="py-40 bg-neutral-400 w-full h-60 relative"
      >
        <h2 className="text-center font-normal text-[92px] fonts-nicky absolute bottom-1/3 left-0 right-0">
          Contact
        </h2>
      </div>

      <div className="bg-slate-200 py-20">
        <div className="text-center w-2/3 mx-auto mt-20">
          <h2 className="font-bold text-lg">Visit Us At INNOV8</h2>
          <p className=" mt-2">38, Narayan Gowda Layout,</p>
          <p className=" mt-1">
            Vidyaranyapura, Bengaluru, Karnataka 560097, India.
          </p>
          <p className="mt-8 font-bold">Opening Hours:</p>
          <p className="  ">Monday - Sunday 9:00am - 6:00pm</p>
          <p className=" "> Except Monday 9:30am - 6:00pm</p>{" "}
          <p className="mt-8 text-lg">Got a question?</p>
          <p className="  font-bold">+91 84968 47337</p>
          <p className="  font-bold">gmail-info.innov8n@gmail.com</p>
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
                  className="p-2 w-full border border-gray-400 rounded-md"
                />
              </div>

              <div className="mt-5 md:w-1/2 md:mt-0">
                <label className="block font-semibold" htmlFor="lastName">
                  Last Name <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="p-2 w-full border border-gray-400 rounded-md"
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
                  className="p-2 w-full border border-gray-400 rounded-md"
                />
              </div>

              <div className="mt-5 md:w-1/2">
                <label className="block font-semibold" htmlFor="phone">
                  Phone <span className="text-red-700">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="p-2 w-full border border-gray-400 rounded-md"
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
                  className="p-2  resize-none w-full border border-gray-400 rounded-md"
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
        <iframe
          className="w-full size-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4605218612305!2d77.53775313855517!3d13.069974112768858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae22b892f04965%3A0x1a60574c96b6d3f7!2s38%2C%20Narayan%20Gowda%20Rd%2C%20KVP%20Nagar%2C%20Vidyaranyapura%2C%20Bengaluru%2C%20Karnataka%20560014%2C%20India!5e0!3m2!1sen!2sng!4v1717764327030!5m2!1sen!2sng"
          loading="lazy"
        ></iframe>
      </div>

      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
}
