
import { FaWhatsapp } from "react-icons/fa";

const Social= () => {
  const handleWhatsApp = () => {
    // Replace the WhatsApp number with your own
    window.location.href = "https://wa.me/8496847337";
  };

  return (
    <button
      className="bg-green-500 hover:bg-opacity-60 md:hidden text-white py-3 px-3 rounded-full fixed bottom-8 right-1 z-10 shadow-lg  transition duration-300"
      onClick={handleWhatsApp}
    >
      <FaWhatsapp className="text-3xl" />
    </button>
  );
};

export default Social;
