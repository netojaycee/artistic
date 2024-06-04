import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <NavBar />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
