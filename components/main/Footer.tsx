import React from "react";
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { IoMdMail } from "react-icons/io";


const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    <IoMdMail />
                        <span className="text-[15px] ml-[6px]">1kishankr11@gmail.com</span>    
                    </p>
                    <a href=":https://github.com/Kishan-kumar-24">
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </p>
                    </a>

                    <a href="https://www.linkedin.com/in/kishan-kumar-23b56022b/">
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxLinkedinLogo />
                        <span className="text-[15px] ml-[6px]">Linkedin</span> 
                    </p>
                    </a>
                    
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; made with 🤍 By Kishan
            </div>
        </div>
    </div>
  )
}

export default Footer