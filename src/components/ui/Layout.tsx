import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import SocialButtons from "./Social";
import NavTop from "./Topfooter";

const Layout = () => {
  return (
    <>
     
      <div className="overflow-x-hidden">
        
        
        
        <div className="min-h-screen">
          <SocialButtons />
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
