// @ts-nocheck
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/16/solid";

import PhoneInput from "react-phone-number-input";
import "../../../node_modules/react-phone-number-input/style.css";

export function BookingModal({ open, setOpen, handleOpen }: any) {
  const [formData, setFormData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [active, setActive] = React.useState(null);

  const handleInputChange = (valu: any, name: any) => {
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: undefined }); // Clear error on input change
  };

  const handleClick = (index): any => {
    setActive((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <div className="flex lg:flex-row flex-col w-full justify-center">
          <div className=" w-full block md:hidden relative">
            <div className="justify-end pr-2 pt-2 md:hidden flex absolute top-0 right-0 ">
              <XMarkIcon
                className="h-6 w-6 cursor-pointer"
                strokeWidth={2}
                onClick={handleOpen}
              />
            </div>
            <h2 className="text-xl text-center py-2 font-semibold leading-5 text-primary">
              Get a free design consultation
            </h2>
          </div>
          <div className="bg-secondary  lg:w-full w-full">
            <div className="justify-end md:flex pr-2 pt-2  hidden">
              <XMarkIcon
                className="h-6 w-6 cursor-pointer"
                strokeWidth={2}
                onClick={handleOpen}
              />
            </div>
            <div className="w-[95%] mx-auto flex flex-col gap-2">
              <h2 className="text-2xl font-semibold leading-5 mb-4 lg:block hidden">
                Get a free design consultation
              </h2>

              <div className="flex flex-col mt-4 items-start">
                <input
                  type="text"
                  name="name"
                  value={formData.name || ""}
                  onChange={(e) => handleInputChange(e.target.value, "name")}
                  className="w-full  outline-none border-b border-b-brown-600 py-1 border-gray-300 px-2 text-black mb-5"
                  placeholder="FULL NAME"
                  required
                />

                <input
                  type="email"
                  name="email"
                  value={formData.name || ""}
                  onChange={(e) => handleInputChange(e.target.value, "email")}
                  className="w-full border-b  outline-none border-b-brown-600 py-1 border-gray-300 px-2 text-black  mb-14"
                  placeholder="E - MAIL"
                  required
                />
                <div className="relative w-full">
                  <input
                    type="name"
                    name="name"
                    value={formData.name || ""}
                    onChange={(e) => handleInputChange(e.target.value, "time")}
                    className="w-full  py-1 outline-none border-brown-600 px-2 text-black border-b pt-6 border-t mb-5"
                    placeholder="TIME"
                    required
                  />
                  <ChevronDownIcon className="size-5 absolute bottom-5 right-0" />
                </div>
                <textarea
                  name="message"
                  placeholder="MESSAGE"
                  id=""
                  cols="30"
                  rows="2"
                  className="resize-none border-b p-2 outline-none border-b-brown-600 w-full"
                ></textarea>
              </div>
              <button className="bg-brown-300 border-white  text-white text-center py-2 ">
                CONTACT
              </button>
              <p className="text-xs text-center mb-2">
                By submitting, you consent to{" "}
                <span className="text-primary">privacy policy</span> and{" "}
                <span className="text-primary">terms of use</span>
              </p>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
