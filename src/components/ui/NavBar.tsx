//  @ts-nocheck
import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Logo from "./Logo";
import { Drawer, IconButton } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NavTop from "./Topfooter";

interface SidebarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Sidebar({ open, setOpen }: SidebarProps) {
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: open ? 0 : "-100%" }}
        transition={{ type: "tween", duration: 0.5 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          zIndex: 9999,
        }}
      >
        <Drawer open={open} onClose={closeDrawer} className="p-4 w-full">
          <div className="mb-6 flex items-center">
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <NavList close={closeDrawer} />
        </Drawer>
      </motion.div>
    </React.Fragment>
  );
}

function NavList({ close }) {
  const handleLink = () => {
    close();
  };
  return (
    <>
    
    <ul className=" flex flex-col gap-2 mx-5 lg:mx-0 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-white" >
      <br/>
      <li className="p-1 font-medium">
        
        <Link
          onClick={handleLink}
          to="/"
          className="flex text-black lg:text-white items-center hover:text-blue-500 transition-colors"
        >
          HOME{" "}
        </Link>
      </li>
      <hr className="border-primary lg:hidden" />
      <li className="p-1 font-medium">
        <Link
          onClick={handleLink}
          to="/portfolio"
          className="flex text-black lg:text-white items-center hover:text-blue-500 transition-colors"
        >
          PORTFOLIO
        </Link>
      </li>
      <hr className="border-primary lg:hidden" />
      <li className="p-1 font-medium">
        <Link
          onClick={handleLink}
          to="/design"
          className="flex text-black lg:text-white items-center hover:text-blue-500 transition-colors"
        >
          OUR SERVICES
        </Link>
      </li>
      <hr className="border-primary lg:hidden" />

      <li className="hidden lg:block">
        <Logo />
      </li>

      <li className="p-1 font-medium">
        <Link
          onClick={handleLink}
          to="/about"
          className="flex text-black lg:text-white items-center hover:text-blue-500 transition-colors"
        >
          ABOUT
        </Link>
      </li>
      <hr className="border-primary lg:hidden" />
      <li className="p-1 font-medium">
        <Link
          onClick={handleLink}
          to="/contact"
          className="flex text-black lg:text-white items-center hover:text-blue-500 transition-colors"
        >
          CONTACT US
        </Link>
      </li>
      <hr className="border-primary lg:hidden" />
    </ul>
    </>
  );
}

export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <div className="bg-[#5c4b3b] z-[9999] bg-opacity-30 w-full fixed top-0 h-20 ">
        <div className="px-5 py-2 flex lg:justify-evenly items-center w-full -mt-14 md:-mt-16">
          <div className="hidden lg:block ">
            <NavList />
          </div>
          <div
            className="w-1/3 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </div>
          <div className="lg:hidden w-1/2">
            <Logo color="white" />
          </div>
        </div>
      </div>
      <Sidebar open={openNav} setOpen={setOpenNav} />
    </>
  );
}
