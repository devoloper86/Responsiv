import React from "react";
import Img from "../../Img/Iamge.png";
import Img1 from "./img/Profil.png";
import Img2 from "./img/Ellipse 1517.png";
import Img3 from "./img/Ellipse 1517 (1).png";
import Img4 from "./img/Card line.png";
import Img5 from "./img/image 13.png";

function Main_5() {
  return (
    <div className="w-[1440px] h-[530px] border-2 mt-[56px] flex items-center">
      <div className="w-[448px] ml-[200px]">
        <p className="text-[40px] text-[#1e1e1e] font-bold mt-[100px]">
          Discover the power of creative freedom with Nisa.
        </p>
        <p className="mt-[24px] text-[16px] text-[#172327]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
          consectetur egestas mauris adipiscing dui.{" "}
        </p>
        <button className="w-[160px] h-[48px] rounded-xl mt-[40px] font-bold bg-[#2241CF] cursor-pointer mr-[48px] text-[#fff]">
          Explore Section
        </button>
      </div>
      <div className="w-[385px] h-[435px] bg-[#f9f5f2] ml-[186px] mt-[77px] rounded-xl relative">
        <img
          src={Img}
          alt=""
          className="w-[342px] h-[384px] ml-[21px] mt-[23px]"
        />
        <div className="w-[280px] h-[248px] rounded-xl border-2 ml-[52px] mt-[-282px] absolute bg-[#fff]">
          <p className="text-[32px] text-[#1e1e1e] font-bold ml-[34px] ">
            All Designers
          </p>
          <p className="text-[18px] text-[#172327] ml-[34px] font-bold mt-[6px]">
            TOTAL BALANCE
          </p>
          <div className="h-[2px] w-[211px] ml-[34px] bg-[#dde4e4] mt-[17px]"></div>
          <div className="ml-[34px] flex items-center mt-[16px]">
            <img src={Img1} alt="" />
            <img src={Img2} alt="" className="ml-[-9px]" />
            <img src={Img3} alt="" className="ml-[-9px]" />
            <p className="text-[13px] font-bold ml-[12px]">3 Assignces</p>
          </div>
          <div className="flex justify-between ml-[34px] mr-[34px] text-[12px] font-bold mt-[24px]">
            <p>24%</p>
            <p>2M</p>
          </div>
          <img src={Img4} alt="" className="ml-[34px] mt-[10px] w-[212px]" />
        </div>
      </div>
      <img src={Img5} alt="" className="w-[77px] h-[75px] mt-[-380px] ml-[-35px]" />
    </div>
  );
}

export default Main_5;
