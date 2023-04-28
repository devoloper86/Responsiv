import React from "react";
import img from "./Img/Mask group.png";
import img1 from "./Img/Image.png";
import img2 from "./Img/media Icon.png";
import img3 from "./Img/Group.png";
import img4 from "./Img/pendo-logo-svg-150px.png";
import img5 from "./Img/sendgrid-logo-svg-150px.png";
import img6 from "./Img/lattice-logo-svg-150px.png";
import img7 from "./Img/gitlab-logo-svg-150px (1).png";
import img8 from "./Img/Ellipse 1517 (2).png";
import Star from "./Img/Star 1.png";
import Vector from "./Img/Vector (1).png";
import User from "./Img/user.png";
import Mail from "./Img/mail.png";

function Main_6() {
  return (
    <div className="w-[1440px] mt-[130px] relative">
      <div className="w-full h-[420px] bg-black relative">
        <img src={img} alt="" className="w-[1440px]" />
        <p className="text-[#fff] w-[300px] ml-[570px] text-[25px] mt-[-300px] font-bold text-center">
          Put the spotlight on the main features
        </p>
      </div>
      <div className="absolute">
        <img src={img1} alt="" className="ml-[500px] mt-[-170px] " />
        <img
          src={img2}
          alt=""
          className="ml-[710px] mt-[-160px] cursor-pointer"
        />
      </div>
      <div className="flex mt-[200px] justify-between w-[70%px] ml-[200px] mr-[200px]">
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
      </div>
      <div className="bg-[#f9f5f2] w-[1440px] h-[750px] mt-[112px]">
        <p className="w-[462px] h-[100px] text-[40px] text-[#172327] font-bold mx-auto text-center pt-[48px]">
          Customers love the ease and simplicity
        </p>
        <div className="ml-[200px] flex justify-between mr-[200px]">
          <div className="w-[320px]  mt-[90px] h-[320px] bg-[#fff]">
            <div className="flex items-center  ml-[32px] pt-[32px]">
              <img src={img8} alt="" className="w-[64px] h-[64px]" />
              <div className="ml-[15px]">
                <p className="font-bold text-[18px] text-[#1e1e1e]">
                  Albart Flores
                </p>
                <p className="text-[14px] text-[#172327] mt-[2px]">
                  Graphic Desogner
                </p>
              </div>
            </div>
            <p className="w-[268px] ml-[32px] text-[16px] mt-[20px] text-[#172327]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              luctus venenatis mi aliquet cras interdum. Lectus cons ectetur
              fermentum lorem aliquam.
            </p>
            <div className="flex ml-[34px] mt-[20px]">
              <img src={Star} alt="" className="" />
              <img src={Star} alt="" className="ml-[20px]" />
              <img src={Star} alt="" className="ml-[20px]" />
              <img src={Star} alt="" className="ml-[20px]" />
              <img src={Star} alt="" className="ml-[20px]" />
            </div>
          </div>
          <div className="w-[320px]  mt-[90px] h-[320px] bg-[#fff]">
            <div className="flex items-center  ml-[32px] pt-[32px]">
              <img src={img8} alt="" className="w-[64px] h-[64px]" />
              <div className="ml-[15px]">
                <p className="font-bold text-[18px] text-[#1e1e1e]">
                  Albart Flores
                </p>
                <p className="text-[14px] text-[#172327] mt-[2px]">
                  Graphic Desogner
                </p>
              </div>
            </div>
            <p className="w-[268px] ml-[32px] text-[16px] mt-[20px] text-[#172327]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              luctus venenatis mi aliquet cras interdum. Lectus cons ectetur
              fermentum lorem aliquam.
            </p>
            <div className="flex ml-[34px] mt-[20px]">
              <img src={Star} alt="" className="" />
              <img src={Star} alt="" className="ml-[20px]" />
              <img src={Star} alt="" className="ml-[20px]" />
              <img src={Star} alt="" className="ml-[20px]" />
              <img src={Star} alt="" className="ml-[20px]" />
            </div>
          </div>
          <div className="w-[320px]  mt-[90px] h-[320px] bg-[#fff]">
            <div className="flex items-center  ml-[32px] pt-[32px]">
              <img src={img8} alt="" className="w-[64px] h-[64px]" />
              <div className="ml-[15px]">
                <p className="font-bold text-[18px] text-[#1e1e1e]">
                  Albart Flores
                </p>
                <p className="text-[14px] text-[#172327] mt-[2px]">
                  Graphic Desogner
                </p>
              </div>
            </div>
            <p className="w-[268px] ml-[32px] text-[16px] mt-[20px] text-[#172327]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              luctus venenatis mi aliquet cras interdum. Lectus cons ectetur
              fermentum lorem aliquam.
            </p>
            <div className="flex ml-[34px] mt-[20px]">
              <img src={Star} alt="" className="" />
              <img src={Star} alt="" className="ml-[20px]" />
              <img src={Star} alt="" className="ml-[20px]" />
              <img src={Star} alt="" className="ml-[20px]" />
              <img src={Star} alt="" className="ml-[20px]" />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-[65px]">
          <div className="bg-[#000] w-[64px] h-[64px] flex justify-center items-center rounded-full">
            <img src={Vector} alt="" className="w-[10px] h-[15px]" />
          </div>
          <div className="bg-[#000] w-[64px] h-[64px] flex justify-center items-center rounded-full ml-[32px]">
            <img src={Vector} alt="" className="w-[10px] h-[15px] rotate-180" />
          </div>
        </div>
      </div>
      <div className="w-[1040px] h-[270px] bg-[#000] mx-auto mt-[128px] rounded-xl flex items-center justify-between mr-32px">
        <div className="">
          <p className="ml-[32px] pt-[32px] w-[462px] text-[#fff] text-[32px]">
            Discover the power of creative freedom with Align.
          </p>
          <p className="ml-[32px] mt-[16px] w-[462px] text-[#fff] text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
            consectetur egestas mauris adipiscing dui.{" "}
          </p>
        </div>
        <div className="mr-[32px]">
          <div className="w-[410px] h-[50px] rounded-3xl border-4 flex pl-[20px]">
            <img src={User} alt="" className="text-[#fff]" />
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#000] ml-[10px]"
            />
          </div>
          <div className="w-[410px] h-[50px] rounded-3xl border-4  mt-[25px] flex pl-[20px]">
            <img src={Mail} alt="" className="text-[#fff]" />
            <input
              type="text"
              placeholder="Email Adress"
              className="bg-[#000] ml-[10px]"
            />
          </div>
          <button className="w-[130px] h-[48px] rounded-xl bg-[#ff3c78] mt-[32px] text-[16px] font-bold text-[#fff]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main_6;
