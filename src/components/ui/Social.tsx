import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";

const SocialButtons = () => {
  return (
    <div className="fixed top-1/2 left-5 transform -translate-y-1/2 flex flex-col items-center z-50">
      <div className="w-1 h-[100px] mt-20 bg-white mb-2"></div>
      <div className="absolute top-[25%] flex flex-col gap-3">
        <a
          href="tel:+918496847337"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 text-primary hover:text-blue-600 p-2 bg-white rounded-full"
        >
          {/* <i className="fab fa-facebook-f text-xl"></i> */}
          <FaPhoneAlt />
        </a>
        <a
          href="mailto:info.innov8@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 text-primary hover:text-blue-400 p-2 bg-white rounded-full"
        >
          {/* <i className="fab fa-twitter text-xl"></i> */}
          <MdEmail />
        </a>
        <a
          href="https://wa.me/+918496847337"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 text-primary hover:text-blue-800 p-2 bg-white rounded-full"
        >
          {/* <i className="fab fa-linkedin-in text-xl"></i> */}
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default SocialButtons;
