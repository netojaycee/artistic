import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const SocialButtons = () => {
  return (
    <div className="fixed top-1/2 left-5 transform -translate-y-1/2 flex flex-col pl-2 items-center z-50">
      <div className="w-1 h-[100px] mt-20 bg-white mb-2"></div>
      <div className="absolute top-[25%] flex flex-col gap-3">
        <a
          href="tel:+918496847337"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 text-primary  hover:text-blue-800 p-3 bg-white rounded-full"
        >
          {/* <i className="fab fa-facebook-f text-xl"></i> */}
          <FaPhoneAlt  style={{width:'20px',height:'20px'}}/>
        </a>
        <a
          href="mailto:info.innov8@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 text-primary hover:text-blue-400 p-3 bg-white rounded-full"
        >
          {/* <i className="fab fa-twitter text-xl"></i> */}
          <MdEmail style={{width:'20px',height:'20px'}}/>
        </a>
        <a
          href="https://wa.me/+918496847337"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 text-primary hover:text-blue-800 p-3 bg-white rounded-full"
        >
          {/* <i className="fab fa-linkedin-in text-xl"></i> */}
          <FaWhatsapp style={{width:'20px',height:'20px'}}/>
        </a>
      </div>
    </div>
  );
};

export default SocialButtons;
