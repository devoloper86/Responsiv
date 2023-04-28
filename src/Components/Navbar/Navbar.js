import React from "react";
import Logo from "../../Img/logo.png";

function Navbar() {
  return (
    <div className=" pl-[200px] pr-[200px] w-[1440px] h-[94px] bg-black flex justify-between">
      <div className="flex items-center h-full">
        <img src={Logo} alt="" className="w-[45px] h-[45px] mt-[18px] " />
        <span className="text-[#fff] font-bold text-xl">Nisa</span>
      </div>
      <div className="w-[50%]  my-auto">
        <ul className="flex justify-between items-center">
          <li className="">
            <a href="a" className="text-[#FF3C78] font-bold ">
              Home
            </a>
          </li>
          <li>
            <a href="a" className="text-[#FFf] font-bold">
              Pricing
            </a>
          </li>
          <li>
            <a href="a" className="text-[#FFF] font-bold">
              About
            </a>
          </li>
          <li>
            <a href="a" className="text-[#FFF] font-bold ">
              Blog
            </a>
          </li>
          <li>
            <a href="a" className="text-[#FFF] font-bold ">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="w-[20%] flex justify-between my-auto">
        <span>
          <a href="a" className="text-[#FFF] font-bold ">
            Login
          </a>
        </span>
        <button className="w-[116px] h-[38px] bg-[#FF3C78] rounded-md text-white font-semibold">
          Buy Nesa
        </button>
      </div>
    </div>
  );
}

export default Navbar;
