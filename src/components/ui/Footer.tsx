import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="pt-5 py-4 bg-black">
      <div>
        <div className="text-center text-white md:px-40">
          <div className="flex lg:flex-row flex-col lg:items-start items-center justify-between">
           <div className=""><Logo color={"white"} /></div> 
            <div className=" mb-5 lg:mb-0">
              <h2 className="font-bold text-xl">ARTISTIC ELEMENTS</h2>
              <p className=" mt-2">400 E.Palmetto Park Rd.,</p>
              <p className=" mt-1">Boca Raton, FL 33432</p>
              <p className="  mt-2">+1 6237 7382</p>
              <p className="  mt-1">info@theartisticel.com</p>
            </div>
            <div >
              <h2 className="font-bold text-xl mb-2">SHOWROOM HOURS</h2>
              <p className="  ">Monday - Friday 10:00 -5:00</p>
              <p className=" ">Saturday - by apppointment</p>
            </div>
            {/* <div>
              <h2 className="font-bold text-xl mt-8">ONLINE SHOP</h2>
              <p className="  ">
                Now you can place ordr from our showroom online.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
