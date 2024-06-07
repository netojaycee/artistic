// import logoblack from "../../assets/logo-header.svg";
import logo from "../../assets/logo.png";
// import logowhite from "../../assets/logo-header-white.svg";
import { Link } from "react-router-dom";

// export default function Logo({ color }: { color: "white" | "black" }) {
  export default function Logo() {

  return (
    <>
      <Link to="/">
        <img
          // src={color === "white" ? logowhite : logoblack}
          src={logo}
          alt="logo"
          className="w-full h-30 md:size-[200px] md:mt-1"
        />
      </Link>
    </>
  );
}
