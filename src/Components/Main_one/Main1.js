import React from "react";
import { BiDownArrowAlt } from "react-icons/bi";
import Bg from "../../Img/Image1.png";
import TopBgImg from "../../Img/Group 162914.png";

function Main1() {
  return (
    <div className="">
      <div className="bg-[#1E1E1E] w-[1440px] flex justify-between">
        <div className="pl-[200px] text-white">
          <div className="text-[48px] font-bold w-[306px] pt-[80px] mb-[24px]">
            <h1>Nisa boosts team product excellence</h1>
          </div>

          <div className="w-[323px] text-[14px] font-normal mb-[24px]">
            <p>
              Nisa is constantly improving to move forward through dashboard,
              statistics, data and verify and superior human resources.
            </p>
          </div>

          <div className="bg-[#FF3C78] rounded-[14px] py-[12px] pr-[16px] pl-[32px] w-[193px] flex items-center justify-center cursor-pointer">
            <button className="text-[16px]">Get Startted</button>
            <BiDownArrowAlt className="rotate-[270deg] ml-[36px] w-[24px] h-[24px]" />
          </div>

          <div className="pb-[125px]"></div>
        </div>

        <div className="pr-[200px] pt-[80px]">
          <div className="relative w-[399px] h-[395px]">
            <img src={Bg} alt="" />
            <div className="-mt-[216px] ml-[152px] w-[266px] h-[287px]">
              <img src={TopBgImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main1;
