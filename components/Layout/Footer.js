import React from "react";
import LogoVPN from "../../public/assets/eksologo.svg";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <LogoVPN className="h-20 w-auto mb-6" />
          <p className="mb-4">
            <strong className="font-black text-2xl">Bize Ulaşın</strong> 
          </p>
          <div className=" mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500  items-center justify-center flex p-2 shadow-md">
              <p>Organize Sanayi Bölgesi 07190 ANTALYA / TÜRKİYE</p>
            </div>
            <div className="mx-2 bg-white-500  items-center justify-center flex p-2 shadow-md">
              <p>+90 242 258 13 96 (Pabx)</p>
            </div>
            <div className="mx-2 bg-white-500  items-center justify-center flex p-2 shadow-md">
              <p>+90 242 258 13 95</p>
            </div>
            <div className="mx-2 bg-white-500  items-center justify-center flex p-2 shadow-md">
              <p>info@eksosut.com</p>
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - EKSO</p>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
