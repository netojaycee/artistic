import heroImg2 from "../../assets/RhmNRrXw.jpeg";
import { Link } from "react-router-dom";
import img1 from "../../assets/011-219PalmTrail-DelrayBeach-FL-33483-FULL-scaled.jpg";
import img2 from "../../assets/011.jpg";
import img3 from "../../assets/13-1.jpg";
import img4 from "../../assets/13-4.jpg";
import img5 from "../../assets/Ritchey_Kitchen-1.02.jpg";
import img6 from "../../assets/5.jpg";
import img7 from "../../assets/TAB_LivingRoom_08.22.23_1-1.jpg";
import { useEffect } from "react";

export default function Design() {
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
        className="py-[150px] bg-neutral-400 w-full h-60 relative"
      >
        <h2 className="text-center font-normal text-[92px] fonts-nicky absolute bottom-1/3 left-0 right-0  ">
          Our Services
        </h2>
      </div>

      <div className="mt-16">
        <img src={heroImg2} alt="hero_Img" className="size-80 w-full" />
        <h2 className="text-center font-semibold font-nicky italic  text-4xl">
          01
        </h2>
        <h2 className="text-3xl mt-2 mb-3 text-[#B39CAB]  text-center font-playfairsc ">
          RESIDENTIAL INTERIORS
        </h2>
        <p className="px-5">
          Tailored solutions for homes, apartments, villas, and villaments,
          including space planning, modular furniture, and lighting design. We
          prioritize comfort and aesthetics, crafting spaces that reflect
          individual lifestyles.
        </p>
      </div>

      <div className="mt-16">
        <img src={img1} alt="hero_Img" className="size-80 w-full" />
        <h2 className="text-center font-semibold font-nicky italic  text-4xl">
          02
        </h2>
        <h2 className="text-3xl mt-2 mb-3 text-[#B39CAB]  text-center font-playfairsc ">
          COMMERCIAL INTERIORS
        </h2>
        <p className="px-5">
          Innovative designs for offices, retails spaces, and hospitality
          venues, optimizing functionality and brand identity. We create
          memorable experiences that resonate with customers and employees
          alike.
        </p>
      </div>

      <div className="mt-16">
        <img src={img2} alt="hero_Img" className="size-80 w-full" />
        <h2 className="text-center font-semibold font-nicky italic  text-4xl">
          03
        </h2>
        <h2 className="text-3xl mt-2 mb-3 text-[#B39CAB]  text-center font-playfairsc ">
          HOSPITALITY INTERIORS
        </h2>
        <p className="px-5">
          Comprehensive services for hotels, resorts, and spas, focusing on
          guest comfort and ambiance. Our designs enhance the guest experience,
          creating inviting environments that leave a lasting impression.
        </p>
      </div>

      <div className="mt-16">
        <img src={img3} alt="hero_Img" className="size-80 w-full" />
        <h2 className="text-center font-semibold font-nicky italic  text-4xl">
          04
        </h2>
        <h2 className="text-3xl mt-2 mb-3 text-[#B39CAB]  text-center font-playfairsc ">
          OFFICE INTERIORS
        </h2>
        <p className="px-5">
          Customized workspace solutions for corporate offices, coworking
          spaces, and business centers, promoting productivity and employee
          well-being. We prioritize functionality and brand representation,
          designing offices that inspire success.
        </p>
      </div>

      <div className="mt-16">
        <img src={img4} alt="hero_Img" className="size-80 w-full" />
        <h2 className="text-center font-semibold font-nicky italic  text-4xl">
          05
        </h2>
        <h2 className="text-3xl mt-2 mb-3 text-[#B39CAB]  text-center font-playfairsc ">
          RETAIL INTERIORS
        </h2>
        <p className="px-5">
          Strategic design solutions for retail stores and boutiques, maximizing
          sales potential through effective layout and merchandising. We create
          dynamic spaces that captivate shoppers and reflect brand identity
        </p>
      </div>

      <div className="mt-16">
        <img src={img5} alt="hero_Img" className="size-80 w-full" />
        <h2 className="text-center font-semibold font-nicky italic  text-4xl">
          06
        </h2>
        <h2 className="text-3xl mt-2 mb-3 text-[#B39CAB]  text-center font-playfairsc ">
          HEALTHCARE INTERIORS
        </h2>
        <p className="px-5">
          Specialized in hospitals and clinics, we prioritize patient comfort
          and safety, integrating infection control measures and calming
          aesthetics. Our designs ensure efficient workflow optimization,
          enhancing the healing environment for both patients and staff.
        </p>
      </div>

      <div className="mt-16">
        <img src={img6} alt="hero_Img" className="size-80 w-full" />
        <h2 className="text-center font-semibold font-nicky italic  text-4xl">
          07
        </h2>
        <h2 className="text-3xl mt-2 mb-3 text-[#B39CAB]  text-center font-playfairsc ">
          EDUCATIONAL INTERIORS
        </h2>
        <p className="px-5">
          Our innovative designs for schools and universities foster creativity,
          engagement, and academic success through flexible and technology-rich
          environments. We prioritize safety, accessibility, and aesthetics to
          support lifelong learning and growth.
        </p>
      </div>

      <div className="mt-16">
        <img src={img7} alt="hero_Img" className="size-80 w-full" />
        <h2 className="text-center font-semibold font-nicky italic  text-4xl">
          08
        </h2>
        <h2 className="text-3xl mt-2 mb-3 text-[#B39CAB]  text-center font-playfairsc ">
          CONSULTATION AND ADVISORY SERVICES
        </h2>
        <p className="px-5">
          Providing professional guidance on interior design trends, space
          optimization, and budget planning, we empower clients to realize their
          vision. With a collaborative approach, we ensure informed decisions
          and successful outcomes.
        </p>
      </div>

      <div className="my-20 text-center mx-auto w-2/3">
        <button className="p-2 border-2 border-[#B39CAB] ">
          <Link to="/contact">GET CONSULTATION</Link>
        </button>
      </div>
    </div>
  );
}
