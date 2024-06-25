import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import SocialButtons from "./Social";
import NavTop from "./Topfooter";

const Layout = () => {
  return (
    <>
      <NavTop/>
      <div className="overflow-x-hidden">
        
        
        <NavBar />
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
