import logoblack from "../../assets/logo-header.svg";
import logowhite from "../../assets/logo-header-white.svg";
import { Link } from "react-router-dom";

export default function Logo({ color }: { color: "white" | "black" }) {
  return (
    <>
      <Link to="/">
        <img
          src={color === "white" ? logowhite : logoblack}
          alt="logo"
          className="w-full md:size-40 md:h-20 md:mt-1"
        />
      </Link>
    </>
  );
}
