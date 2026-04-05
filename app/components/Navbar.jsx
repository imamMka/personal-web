"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation'

import { MotionConfig, motion } from "framer-motion";

const AnimatedHamburgerButton = ({ isOpen, setIsOpen }) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={isOpen ? "open" : "closed"}
        onClick={() => setIsOpen((pv) => !pv)}
        className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20 flex md:hidden cursor-pointer z-9999"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-10 bg-[#213448]"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-10 bg-[#213448]"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-5 bg-[#213448]"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname()
  const [currentPath, setCurrentPath] = useState('')

  useEffect(() => {
    setCurrentPath(pathname)
  })

  return (
    <nav className="bg-[#ffffff] px-10 py-2 fixed z-3 h-fit w-full ">
      <section className="flex flex-row justify-between items-center mx-auto relative">
        <div>
          <img src="/logo-nav.svg" alt="" className="hidden lg:flex" />
          <img src="/logo-md.svg" alt="" className="flex lg:hidden" />
        </div>

        <div>
          <ul
            className={`flex gap-10 text-[#213448] font-[500]  text-[16px] top-0 right-0 bg-white/30 backdrop-blur-2xl h-fit p-5 transition-all duration-300 ease-in-out max-[48rem]:hidden`}
          >
            <li className={pathname === "/" ? "border-b-3 border-[#213448]" : ""}>
              <Link href="/" >Home</Link>
            </li>
            <li className={pathname === "/about" ? "border-b-3 border-[#213448]" : ""}>
              <Link href="/about">About</Link>
            </li>
            <li className={pathname === "/project" ? "border-b-3 border-[#213448]" : ""}>
              <Link href="/project">Project</Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex flex-row gap-5 ">
          <a href="/contact"
            className="cursor-pointer bg-[#FFA520] text-white font-[500] px-5 py-2 rounded-[8px] shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)] hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] hover:scale-105
        transition-all duration-300 ease-in-out"
          >
            Contact
          </a>
        </div>

        <AnimatedHamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        <ul
          className={`gap-10 justify-start pt-30 text-[#213448] font-[500] text-[16px] top-0 right-0 bg-white/20 backdrop-blur-2xl h-fit p-5 transition-all duration-300 ease-in-out max-[48rem]:flex hidden fixed flex-col min-h-screen w-[300px]`}
          style={{
            transform: `translateX(${isOpen ? "0%" : "100%"})`,
          }}
        >
          <li className={pathname === "/" ? "border-r-3 border-[#213448]" : ""}>
            <Link href="/">Home</Link>
          </li>
          <li className={pathname === "/about" ? "border-r-3 border-[#213448]" : ""}>
            <Link href="/about">About</Link>
          </li>
          <li className={pathname === "/project" ? "border-r-3 border-[#213448]" : ""}>
            <Link href="/project">Project</Link>
          </li>

          <button className="bg-[#FFA520] px-5 py-2 text-[#ffffff] cursor-pointer rounded-[8px] shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)] hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] hover:scale-105
        transition-all duration-300 ease-in-out"><a href="/contact">Contact</a></button>
        </ul>
      </section>
    </nav>
  );
}
