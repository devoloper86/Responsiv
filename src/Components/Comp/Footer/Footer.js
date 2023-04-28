import React from 'react'
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaPinterestP, FaTwitter } from 'react-icons/fa'

function Footer() {
    return (
        <div>
            <div className="bg-[#1E1E1E] text-white">
                <div className="px-[20px] text-white">
                    <div className="w-[272px] text-[24px] font-bold pt-[40px] mb-[16px]">
                        <h1>Build a beautiful product with align</h1>
                    </div>
                    <div className="text-[14px] w-[328px] mb-[24px]">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus euismod fusce pulvinar amet. Sollicitudin nullam mauris tellus accumsan, phasellus. Ut ac consequat arcu non aliquam. </p>
                    </div>
                    <div className="w-[176px] flex justify-between items-center mb-[33px]">
                        <FaTwitter className='text-[#10ADED]' />
                        <FaFacebookF className='text-[#3F7BF8]' />
                        <FaGooglePlusG className='text-[#F04D3F]' />
                        <FaPinterestP className='text-[#CB2056]' />
                        <FaLinkedinIn className='text-[#007BB6]' />
                    </div>
                    <div className="flex w-full">
                        <div className="">
                            <div className="text-[14px] font-bold mb-[27px]">
                                <h1>Overview</h1>
                            </div>
                            <div className="text-[12px] font-normal">
                                <p>Home</p>
                                <p className='my-[15px]'>About</p>
                                <p>Blog</p>
                                <p className='my-[15px]'>Blog Post</p>
                                <p>Team Mambar</p>
                            </div>
                        </div>
                        <div className="mx-[42px]">
                            <div className="text-[14px] font-bold mb-[27px]">
                                <h1>Pages</h1>
                            </div>
                            <div className="text-[12px] font-normal">
                                <p>Contact</p>
                                <p className='my-[15px]'>Customer Story </p>
                                <p>Login</p>
                                <p className='my-[15px]'>Register</p>
                                <p>Styke Guide</p>
                                <p className='my-[15px]'>Changelog</p>
                                <p>Licance</p>
                                <p className='my-[15px]'>404</p>
                                <p>Password</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="text-[14px] font-bold mb-[27px]">
                                <h1>Connect:</h1>
                            </div>
                            <div className="text-[12px] font-normal">
                                <p>+001 234 567 89</p>
                                <p className='my-[15px]'>hellow@nesa.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[32px] bg-[#696969] border-[1px] w-[375px] h-[5px] mb-[8px]"></div>
                <div className="text-[12px] text-[#E1E1E1]">
                    <p className='text-center mb-[13px]'>@ template by Flowbass- Powered by ui8</p>
                    <div className="flex w-[375px] justify-around pb-[22px]">
                        <p>Term of services privacy policy</p>
                        <p>Overview</p>
                        <p>Pages</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer