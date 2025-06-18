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
        text-[#ffa520]
        w-full
        cursor-pointer
        group
        ease-in-out
        duration-700
        hover:scale-105
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        
        transition-all

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-[#ffa520]
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

        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        
        transition-all

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-[#ffffff]
    `}
    >
      <FaBookmark />
      <span>See My Project</span>
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
        
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        
        transition-all

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-[#ffffff]
    `}
    >
      <span>SUBMIT</span>
      <FaArrowRight className="group-hover:-rotate-45 transition-all duration-700" />
    </button>
  );
};
