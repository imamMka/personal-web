"use client";

import { FiSend } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

export const NeumorphismButton = () => {
  return (
    <button
      className={`
        px-4 py-2 rounded-[8px]
        flex items-center justify-center gap-2 
        text-[#FFA520]
        dark:text-white
        w-full
        cursor-pointer
        group
        ease-in-out
        duration-700
        hover:scale-105
        border-[1px] border-[#FFA520]
        
        transition-all
    `}
    >
      <FiSend />
      <span>Works With Me</span>
    </button>
  );
};

export const NeumorphismButton2 = () => {
  return (
    <button
      className={`
        px-4 py-2 rounded-[8px]
        flex items-center justify-center gap-2 
        bg-[#FFA520]
        text-[#ffffff]
        w-full
        cursor-pointer
        group
        ease-in-out
        duration-700
        hover:scale-105

        
        transition-all

        hover:text-[#ffffff]
    `}
    >
      <FaBookmark />
      <span>View Case Studies</span>
    </button>
  );
};

export const NeumorphismButton3 = () => {
  return (
    <button href="https://mail.google.com/mail/?view=cm&fs=1&to=alifattallahbasya@gmail.com"
      className={`
        px-4 py-2 rounded-[8px]
        flex items-center justify-center gap-2 
        bg-[#FFA520]
        text-[#ffffff]
        w-full
        cursor-pointer
        group
        ease-in-out
        duration-700
        hover:scale-105
        
        
        transition-all

        hover:text-[#ffffff]
    `}
    >
      <span>SUBMIT</span>
      <FaArrowRight className="group-hover:-rotate-45 transition-all duration-700" />
    </button>
  );
};
