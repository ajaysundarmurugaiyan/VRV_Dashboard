import React from "react";
// import logo from "/cleaningImages/logo.png";
import { BsTelephone } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { ImLocation } from "react-icons/im";

const Footer = () => {
  return (
    <div>
      <div className="md:py-10 py-5">
      <div className="md:px-10 px-5 pb-5 text-center text-red-500 md:text-3xl text-xl font-bold">
        GET IN TOUCH
        <div className="mx-auto mt-2 w-[120px] h-[2.5px] bg-red-500 rounded-full"></div>

        </div>
        <div className="flex flex-col md:flex-row md:justify-evenly items-center">
          <div className=" md:mx-0 mx-8 py-5">
            <img src="https://media.licdn.com/dms/image/v2/D4D0BAQFRhefH-vGhSg/company-logo_200_200/company-logo_200_200/0/1733288059707/vrv_security_logo?e=2147483647&v=beta&t=5ZpYyfUsqh6JWLSuzNnD7kyGoR94iJf72WjMnNGHN3k" alt="" className="w-32 md:w-40" />
          </div>
          <div className="flex flex-col px-10  lg:flex-row gap-y-5 gap-x-10 justify-center">
            <div className="flex  items-center gap-x-5">
              <div className="border p-2 rounded-full bg-red-500 hover:bg-customBlue duration-500">
                <BsTelephone className="w-5 h-auto text-white" />
              </div>
              <div className="md:text-base text-sm  font-semibold text-customGrey">012 345 6789</div>
            </div>
            <div className="flex  items-center gap-x-5">
              <div className="border p-2 rounded-full bg-red-500 hover:bg-customBlue duration-500">
                <TfiWorld className="w-5 h-auto text-white" />
              </div>
              <div>
                <div className="md:text-base text-sm  font-semibold text-customGrey">ivrvseccumman10@gmail.com</div>
                <div className="md:text-base text-sm  font-semibold text-customGrey">vrvseccumman10@gmail.com</div>
              </div>
            </div>
            <div className="flex  items-center gap-x-5">
              <div className="border p-2 rounded-full bg-red-500 hover:bg-customBlue duration-500">
                <ImLocation className="w-5 h-auto text-white" />
              </div>
              <div className="md:text-base text-sm  font-semibold text-customGrey">No 10, Jyothi Nagar ,1st Street, Mudichur Rd, West Tambaram, Chennai, Tamil Nadu 600045</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
