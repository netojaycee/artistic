import NavBar from "../../components/ui/NavBar";
import { ImQuotesLeft } from "react-icons/im";
import HeroImg from "../../assets/011-219PalmTrail-DelrayBeach-FL-33483-FULL-scaled.jpg";
import heroImg1 from "../../assets/Ritchey_Kitchen-1.02.jpg";
import heroImg2 from "../../assets/RhmNRrXw.jpeg";
import heroImg3 from "../../assets/Y5ZHqsXh.jpeg";
import heroImg4 from "../../assets/Pn2hSreZ-scaled.jpeg";
import Footer from "../../components/ui/Footer";

export default function Project() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="pt-40 text-center mx-auto w-2/3">
        <h2 className="text-6xl text-center font-semibold italic font-nicky">
          Projects
        </h2>
        <ImQuotesLeft className="size-8 mx-auto mt-8 text-[#B39CAB]" />
        <p className="italic text-2xl font-semibold font-playfair">
          You love your home. We help make thus love endless.
        </p>
      </div>

      <div className="pt-28 ">
        <h2 className="mx-auto w-2/3  font-playfairsc font-medium text-[#B39CAB] text-center text-4xl mb-8">
          INTRACOASTAL REMODEL
        </h2>
        <img src={HeroImg} alt="hero_Img" className="size-80 w-full" />
      </div>

      <div className="pt-28 ">
        <h2 className="mx-auto w-2/3  font-playfairsc font-medium text-[#B39CAB] text-center text-3xl mb-8">
          BOCA BLUE DOOR
        </h2>
        <img src={heroImg1} alt="hero_Img" className="size-80 w-full" />
      </div>

      <div className="pt-28 ">
        <h2 className="mx-auto w-2/3 font-playfairsc font-medium text-[#B39CAB] text-center text-3xl mb-8">
          RITZ CARLTON RESIDENCES
        </h2>
        <img src={heroImg2} alt="hero_Img" className="size-80 w-full" />
      </div>

      <div className="pt-28 ">
        <h2 className="mx-auto w-2/3  font-playfairsc font-medium text-[#B39CAB] text-center text-3xl mb-8">
          CAKE HOUSE
        </h2>
        <img src={heroImg3} alt="hero_Img" className="size-80 w-full" />
      </div>

      <div className="pt-28 ">
        <h2 className="mx-auto w-2/3 font-playfairsc font-medium text-[#B39CAB] text-center text-3xl mb-8">
          ZEN RESIDENCE
        </h2>
        <img src={heroImg4} alt="hero_Img" className="size-80 w-full" />
      </div>
      <div className="text-center mx-auto w-3/4 pt-28 pb-9">
        <h2 className="text-xl font-semibold">
          SEE HOW WE MAKE YOUR DREAMS REALITY
        </h2>
      </div>
      <Footer />
    </div>
  );
}
