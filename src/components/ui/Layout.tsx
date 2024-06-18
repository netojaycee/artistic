import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import SocialButtons from "./Social";

const Layout = () => {
  return (
    <>
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
