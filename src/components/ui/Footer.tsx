export default function Footer() {
  return (
    <div className=" py-8 bg-black mt-0">
      <div>
        <div className="text-center text-white md:px-40">
          <div className="flex lg:flex-row flex-col lg:items-start items-center justify-between md:space-x-20">
            <div className=" mb-5 lg:mb-0">
              <h2 className="font-bold text-xl">INNOV8</h2>
              <p className=" mt-2">38, Narayan Gowda Layout,</p>
              <p className=" mt-1">
                Vidaranyapura, Bengaluru, Karnataka 560097, India.
              </p>
              <p className="  mt-2">+91 84968 47337</p>
              <p className="  mt-1">gmail-info.innov8n@gmail.com</p>
            </div>
            <div>
              <h2 className="font-bold text-xl mb-2">OPENING HOURS</h2>
              <p className="  ">Monday - Sunday 9:00am - 6:00pm</p>
              <p className=" "> Except Monday 9:30am - 6:00pm</p>
            </div>
            <div className="mt-6 md:mt-0">
              <h2 className="text-xl font-bold">Useful Links</h2>
              <p className="mt-3">Home</p>
              <p>Hotels</p>
              <p>Water Rental</p>
              <p>About Us</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className="mt-8 -mb-7">
            <p>@ 2024 INNOV8 Trip Adviser. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
