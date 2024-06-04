import logoblack from "../../assets/logo-header.svg";
import logowhite from "../../assets/logo-header-white.svg";

export default function Logo({ color }: { color: 'white' | 'black' }) {
  return (
    <>
      <img src={color === "white" ? logowhite : logoblack} alt="logo" className="size-40 -mt-14 md:h-20 md:mt-1" />
    </>
  );
}
