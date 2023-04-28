import React from "react";
import Img1 from "./Img/Iamge (1).png"
import Img2 from "./Img/Iamge (2).png"
import Img3 from "./Img/Iamge (3).png"
import Img4 from "./Img/Iamge (4).png"
import Img5 from "./Img/Iamge (5).png"
import Img6 from "./Img/Iamge (6).png"

function Main_7() {
  return (
    <div className="w-[1440px] h-[950px]  mt-[96px]">
      <div className="w-[155px] h-[46px]  rounded-4xl mx-auto">
        <p className="  bg-[#f9f5f2] mx-auto mt-[27px] text-center font-medium text-[16px]">
          BLOG & ARTICLE
        </p>
      </div>
      <div className="flex w-[510px] mx-auto">
        <p className="text-[40px] text-[#1e1e1e] font-bold mx-auto text-center">
          Take a look at the lastest aricles
        </p>
      </div>
      <div className="flex ml-[200px] justify-between mr-[200px]">
        <div className="w-[327px] h-[325px] ">
          <img src={Img1} alt="" />
          <p className="text-[16px] mt-[24px]">May 5. 2022 | 4 MIN READ</p>
          <p className="text-[20px] font-bold mt-[10px]">How marketing can help your business more than anything.</p>
        </div>

        <div className="w-[327px] h-[325px] ">
          <img src={Img2} alt="" />
          <p className="text-[16px] mt-[24px]">May 5. 2022 | 4 MIN READ</p>
          <p className="text-[20px] font-bold mt-[10px]">How marketing can help your business more than anything.</p>
        </div>

        <div className="w-[327px] h-[325px] ">
          <img src={Img3} alt="" />
          <p className="text-[16px] mt-[24px]">May 5. 2022 | 4 MIN READ</p>
          <p className="text-[20px] font-bold mt-[10px]">How marketing can help your business more than anything.</p>
        </div>
      </div>



      <div className="flex ml-[200px] justify-between mt-[40px] mr-[200px]">
        <div className="w-[327px] h-[325px] ">
          <img src={Img1} alt="" />
          <p className="text-[16px] mt-[24px]">May 5. 2022 | 4 MIN READ</p>
          <p className="text-[20px] font-bold mt-[10px]">How marketing can help your business more than anything.</p>
        </div>

        <div className="w-[327px] h-[325px] ">
          <img src={Img2} alt="" />
          <p className="text-[16px] mt-[24px]">May 5. 2022 | 4 MIN READ</p>
          <p className="text-[20px] font-bold mt-[10px]">How marketing can help your business more than anything.</p>
        </div>

        <div className="w-[327px] h-[325px] ">
          <img src={Img3} alt="" />
          <p className="text-[16px] mt-[24px]">May 5. 2022 | 4 MIN READ</p>
          <p className="text-[20px] font-bold mt-[10px]">How marketing can help your business more than anything.</p>
        </div>
      </div>
    </div>
  );
}

export default Main_7;
