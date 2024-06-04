import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="pt-10 bg-black">
      <div>
        <div className="text-center text-white md:px-40">
          <div className="md:flex md:justify-center md:space-x-20">
            <Logo color={"white"} />
            <div>
              <h2 className="font-bold text-xl">ARTISTIC ELEMENTS</h2>
              <p className=" mt-2">400 E.Palmetto Park Rd.,</p>
              <p className=" mt-1">Boca Raton, FL 33432</p>
              <p className="  mt-4">+1 6237 7382</p>
              <p className="  mt-1">info@theartisticel.com</p>
            </div>
            <div>
              <h2 className="font-bold text-xl mt-8">SHOWROOM HOURS</h2>
              <p className="  ">Monday - Friday 10:00 -5:00</p>
              <p className=" ">Saturday - by apppointment</p>
            </div>
            <div>
              <h2 className="font-bold text-xl mt-8">ONLINE SHOP</h2>
              <p className="  ">
                Now you can place ordr from our showroom online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
