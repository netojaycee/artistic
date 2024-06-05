// import React from "react";
import Consultation from "./Consultation";
import Hero from "./Hero";
import Project from "./Project";
import Tetstimonial from "./Testimonial";
import Who from "./Who";
import Banner from "./banner";

export default function Landing() {
  return (
    <>
      <Hero />
      <Who />
      <Banner />
      <Consultation />
      <Project />
      <Tetstimonial />
      <iframe
        width="100%"
        height="600"
        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
        frameBorder="0"
        scrolling="no"
      ></iframe>
      <br />
    </>
  );
}
