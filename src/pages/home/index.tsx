import { useEffect, useState } from "react";
import Consultation from "./Consultation";
import Hero from "./Hero";
import Project from "./Project";
import Tetstimonial from "./Testimonial";
import TrustedPartners from "./Trustedpartners";
import Who from "./Who";
import Banner from "./banner";
import Why from "./why";
import Process from "./Process";
import WhatWeOffer from "./WhatWeOffer";
import { BookingModal } from "../../components/ui/BookingModal";

export default function Landing() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    handleOpen();
  }, []);
  useEffect(function () {
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    scrollToTop();
  }, []);
  return (
    <>
      <Hero />
      <Who />

      {/* <Banner /> */}
      <WhatWeOffer />

      <Project />

      <Why />
      <Tetstimonial />
      <TrustedPartners />
      <BookingModal open={open} setOpen={setOpen} handleOpen={handleOpen} />

      <iframe
        className="w-full size-96"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4605218612305!2d77.53775313855517!3d13.069974112768858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae22b892f04965%3A0x1a60574c96b6d3f7!2s38%2C%20Narayan%20Gowda%20Rd%2C%20KVP%20Nagar%2C%20Vidyaranyapura%2C%20Bengaluru%2C%20Karnataka%20560014%2C%20India!5e0!3m2!1sen!2sng!4v1717764327030!5m2!1sen!2sng"
        loading="lazy"
      ></iframe>
      <br />
    </>
  );
}
