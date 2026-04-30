"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MotionConfig, motion } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "@/app/context/LanguageContext";

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
        className="relative h-16 w-16 rounded-full bg-foreground/5 transition-colors hover:bg-foreground/10 flex md:hidden cursor-pointer z-9999 items-center justify-center"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-8 bg-black dark:bg-white left-1/2 -translate-x-1/2 top-[35%] -translate-y-1/2"
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-8 bg-black dark:bg-white left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-4 bg-black dark:bg-white bottom-[35%] translate-y-1/2 left-[calc(50%+8px)] -translate-x-1/2"
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: "45deg",
      top: "50%",
    },
    closed: {
      rotate: "0deg",
      top: "35%",
    },
  },
  middle: {
    open: {
      opacity: 0,
      left: "0%",
    },
    closed: {
      opacity: 1,
      left: "50%",
    },
  },
  bottom: {
    open: {
      rotate: "-45deg",
      bottom: "50%",
      left: "50%",
      width: "32px",
    },
    closed: {
      rotate: "0deg",
      bottom: "35%",
      left: "calc(50% + 8px)",
      width: "16px",
    },
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-background text-foreground px-10 py-2 fixed z-3 h-fit w-full transition-colors duration-300">
      <section className="flex flex-row justify-between items-center mx-auto relative">
        <div>
          <div className="flex flex-row items-center justify-between gap-2 text-[16px] font-semibold hidden lg:flex">
            <img src="/logo-nav.svg" alt="" className="hidden lg:flex w-16" />
            <h2 className="text-2xl font-[700]">Imam Muttaqin</h2>
          </div>
          <img src="/logo-nav.svg" alt="" className="flex lg:hidden w-14" />
        </div>

        <div className="flex flex-row items-center gap-5">
          <ul
            className={`flex gap-10 text-foreground font-[500] text-[16px] bg-background/30 backdrop-blur-2xl h-fit transition-all duration-300 ease-in-out max-[48rem]:hidden`}
          >
            <li
              className={pathname === "/" ? "border-b-3 border-[#213448]" : ""}
            >
              <Link href="/">{t("nav.home")}</Link>
            </li>
            <li
              className={
                pathname === "/about" ? "border-b-3 border-[#213448]" : ""
              }
            >
              <Link href="/about">{t("nav.about")}</Link>
            </li>
            <li
              className={
                pathname === "/project" ? "border-b-3 border-[#213448]" : ""
              }
            >
              <Link href="/project">{t("nav.project")}</Link>
            </li>
          </ul>

          <a
            href="/contact"
            className="hidden md:block cursor-pointer bg-[#FFA520] text-white font-[500] px-5 py-2 rounded-[8px] shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)] hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] hover:scale-105 transition-all duration-300 ease-in-out"
          >
            {t("nav.contact")}
          </a>

          <div className="max-[48rem]:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          <div className="flex min-[48rem]:hidden items-center">
            <AnimatedHamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
        <ul
          className={`gap-10 justify-start pt-30 text-foreground font-[500] text-[16px] top-0 right-0 bg-background/80 backdrop-blur-2xl h-fit p-5 transition-all duration-300 ease-in-out max-[48rem]:flex hidden fixed flex-col min-h-screen w-[300px]`}
          style={{
            transform: `translateX(${isOpen ? "0%" : "100%"})`,
          }}
        >
          <motion.li
            initial={{ opacity: 0, x: 20 }}
            animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.1 }}
            className={pathname === "/" ? "border-r-3 border-[#213448]" : ""}
          >
            <Link href="/" onClick={closeMenu}>
              {t("nav.home")}
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: 20 }}
            animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.2 }}
            className={
              pathname === "/about" ? "border-r-3 border-[#213448]" : ""
            }
          >
            <Link href="/about" onClick={closeMenu}>
              {t("nav.about")}
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: 20 }}
            animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.3 }}
            className={
              pathname === "/project" ? "border-r-3 border-[#213448]" : ""
            }
          >
            <Link href="/project" onClick={closeMenu}>
              {t("nav.project")}
            </Link>
          </motion.li>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block bg-[#FFA520] px-5 py-2 text-[#ffffff] cursor-pointer rounded-[8px] shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)] hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] hover:scale-105 transition-all duration-300 ease-in-out text-center"
            >
              {t("nav.contact")}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.5 }}
            className="mt-2 flex items-center gap-4"
          >
            <LanguageSwitcher />
            <ThemeToggle />
          </motion.div>
        </ul>
      </section>
    </nav>
  );
}
