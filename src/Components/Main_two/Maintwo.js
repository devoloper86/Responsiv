import React from "react";
import Img1 from "../../Img/Iamge2.jpg";
import Img2 from "../../Img/image_16.png";
import vector from "../../Img/Vector 2.png";
import profile from "../../Img/Ellipse 1517.png";

function Main_two() {
  return (
    <div className="max-2xl:block max-sm:hidden">
      <div className="w-[1440px] h-[590px] bg-[#f9f5f2] pl-[200px] pr-[200px] flex justify-between">
        <div className="pt-[89px] relative">
          <img
            src={Img2}
            alt=""
            className="w-[129px] h-[120px] absolute -mt-[80px] -ml-[80px]"
          />
          <img src={Img1} alt="" className="w-[384px] h-[432px]" />
          <img
            src={vector}
            alt=""
            className="absolute w-[191px] h-[131px] -mt-[80px] ml-[225px]"
          />
        </div>

        <div className="pt-[89px] text-[#1E1E1E]">
          <div className="w-[518px] font-bold text-[40px] mb-[16px]">
            <h1>Discover the power of creative freedom with Nisa.</h1>
          </div>

          <div className="text-[16px] font-normal text-[#172327] mb-[30px] w-[494px]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tincidunt finibus tortor. Donec lobortis augue sed ante molestie,
              vitae maximus nunc semper.
            </p>
          </div>

          <div className="bg-[#2241CF] rounded-[16px] w-[160px] flex items-center justify-center py-[12px] px-[24px] text-[16px] font-medium text-white mb-[46px]">
            <button>Explore Section</button>
          </div>

          <div className="text-[16px] font-bold text-[#172327] mb-[24px]">
            <p>Add some additional details about your product</p>
          </div>

          <div className="flex items-center w-[202px] justify-between">
            <div className="w-[60px] h-[60px]">
              <img src={profile} alt="" />
            </div>
            <div className="text-[16px] font-bold text-[#1E1E1E]">
              <p>Motiur Leeman</p>
              <p className="mt-[4px] text-[14px] font-normal">Markating  Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main_two;
