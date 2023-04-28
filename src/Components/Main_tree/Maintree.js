import React from "react";
import Twitter from "../../Img/Vector (3).png";
import Layers from "../../Img/layers.png";
import Icon from "../../Img/Icon (6).png"
import Cloud from "../../Img/cloud-lightning.png"
function Maintree() {
  return (
    <div className="mt-[96px] border-2 w-full h-[618px] flex">
      <div className="ml-[200px] w-[434px] mt-[89px]">
        <h1
          className="font-bold text-[40px]
        "
        >
          Share the features that help your customers
        </h1>
        <p className="text-[16px] mt-[24px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
          consectetur egestas mauris adipiscing dui. Cursus facilisis diam
          turpis leo netus consequat phasellus. Netus ipsum sed faucibus enim.
        </p>
        <button className="mt-[40px] w-[160px] h-[48px] bg-[#2241CF] text-white text-[16px] rounded-xl">
          Explore Section
        </button>
      </div>
      <div className="w-[498px] h-[586px] mr-[200px] ml-[106px] mt-[16px] rounded-xl bg-[#f9f5f2]">
        <div className=" flex">
          <div className="w-[210px] h-[257px] ml-[24px] mt-[24px] bg-[#fff] flex items-center flex-col">
            <div className="w-[67px] h-[67px]  mt-[16px] rounded-full bg-[#f9f5f2] flex items-center justify-center">
              <img src={Twitter} alt="" className="w-[25px] h-[27px]" />
            </div>
            <p className="text-[24px] font-bold">Blog</p>
            <p className="text-[16px] w-[178px] h-[74px] text-center mt-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div className="w-[210px] h-[257px] ml-[24px] mt-[24px] bg-[#fff] flex items-center flex-col">
            <div className="w-[67px] h-[67px]  mt-[16px] rounded-full bg-[#f9f5f2] flex items-center justify-center">
              <img src={Layers} alt="" className="w-[25px] h-[27px]" />
            </div>
            <p className="text-[24px] font-bold">Documentation</p>
            <p className="text-[16px] w-[178px] h-[74px] text-center mt-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
        </div>

        <div className=" flex">
          <div className="w-[210px] h-[257px] ml-[24px] mt-[24px] bg-[#fff] flex items-center flex-col">
            <div className="w-[67px] h-[67px]  mt-[16px] rounded-full bg-[#f9f5f2] flex items-center justify-center">
              <img src={Icon} alt="" className="w-[25px] h-[27px]" />
            </div>
            <p className="text-[24px] font-bold">Intergrations</p>
            <p className="text-[16px] w-[178px] h-[74px] text-center mt-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div className="w-[210px] h-[257px] ml-[24px] mt-[24px] bg-[#fff] flex items-center flex-col">
            <div className="w-[67px] h-[67px]  mt-[16px] rounded-full bg-[#f9f5f2] flex items-center justify-center">
              <img src={Cloud} alt="" className="w-[25px] h-[27px]" />
            </div>
            <p className="text-[24px] font-bold">Customers</p>
            <p className="text-[16px] w-[178px] h-[74px] text-center mt-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Maintree;
