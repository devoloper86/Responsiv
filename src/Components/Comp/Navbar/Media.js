import React from 'react'
import Logo from "../Image/Logo.png"
import { FaBars } from "react-icons/fa";

function Media() {
    return (
        <div>
            <div className="">
                <div className="bg-[#1E1E1E]">
                    <div className="text-white flex justify-between px-[20px] items-center  h-[42px]">
                        <div className="">
                            <img src={Logo} alt="" className='w-[67px]'/>
                        </div>
                        <div className="">
                            <FaBars />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Media