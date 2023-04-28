import React from "react";
import Rasm from "../../Img/Iamge.jpg";
import Rasm1 from "../../Img/image 22.png";
import Rasm2 from "../../Img/info card.png";
import Rasm3 from "../../Img/Group 162918.png";

function Main_4() {
  return (
    <div className="w-[1440px] h-[652px] bg-[#f9f5f2] mt-[96px] flex">
      <div className="ml-[200px] pt-[88px] ">
        <img src={Rasm} alt="" />
        <img src={Rasm1} alt="" className="mt-[-550px] ml-[-50px]" />
        <img
          src={Rasm2}
          alt=""
          className="ml-[66px] mt-[140px] w-[250px] h-[270px]"
        />
      </div>
      <div className="w-[462px] ml-[144px] mt-[80px]">
        <p className="text-[40px] text-[#1e1e1e] font-bold">
          Discover the power of creative freedom with Nisa.
        </p>
        <p className="text-[#172327] text-[16px] mt-[24px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
          consectetur egestas mauris adipiscing dui.{" "}
        </p>
        <div className="flex mt-[52px]">
          <button className="w-[160px] h-[48px] rounded-xl bg-[#2241CF] cursor-pointer mr-[48px] text-[#fff] font-bold">
            Explore Section
          </button>
          <div className=" flex justify-center items-center w-[178px] h-[48px] rounded-xl bg-[#FF3C78] cursor-pointer mr-[48px] text-[#fff]">
            <p className="mr-[10px] font-bold">Get Started</p>
            <img src={Rasm3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main_4;
