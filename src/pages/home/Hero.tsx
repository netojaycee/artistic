// import React from "react";
import Slider from "react-slick";
import "./hero.css"; // Assuming this is your component-specific CSS
import img1 from "../../assets/2.jpg";
import img2 from "../../assets/5.jpg";
import img3 from "../../assets/7.jpg";
import logo from "../../assets/011.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faTwitter,
//   faLinkedinIn,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div className="header-top">
        <div className="header-info">
          <a href="mailto:info@domain.com">info@domain.com</a>
          <span>250 Main Street, 2nd Floor, USA</span>
          <span>+89(0) 1256 2156</span>
        </div>
        {/* <div className="header-social">
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div> */}
      </div>
      <div className="header-bottom">
        <div className="logo">
          <img style={{ height: "200px" }} src={logo} alt="Xinterio Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
        <div className="header-buttons">
          <a href="#" className="book-consult">
            Book Consultation
          </a>
        </div>
        <div className="header-buttons">
          <a href="#" className="book-consult">
            Book Consultation
          </a>
        </div>
      </div>
    </header>
  );
};

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  return (
    <Slider {...settings} className="slick-slider">
      <div>
        <img src={img1} alt="Background 1" />
      </div>
      <div>
        <img src={img2} alt="Background 2" />
      </div>
      <div>
        <img src={img3} alt="Background 3" />
      </div>
    </Slider>
  );
};

const Hero = () => {
  return (
    <div className="app">
      <Header />
      <SliderComponent />
      <main>
        <section className="hero-text"></section>
      </main>
    </div>
  );
};

export default Hero;
