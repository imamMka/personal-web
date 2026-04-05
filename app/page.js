"use client";

import React from "react";
import "./globals.css";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import {
  NeumorphismButton,
  NeumorphismButton2,
} from "@/app/components/button.jsx";
<<<<<<< HEAD
import WhatsAppButton from "@/app/components/WhatsAppButton.jsx";
=======
>>>>>>> 3ce8412d288051ea8ac9240c8eb7748cfb23ba96

export default function Home() {
  return (
    <main className="bg-[#ffffff] h-fit pb-[90px]">
      <section className="flex flex-col justify-center items-center pt-[80px] lg:pt-10 px-4">
        <div className=" flex flex-col lg:flex-row justify-between items-center lg:w-[1179px]">
          <div className="flex flex-1 flex-col gap-[20px] order-2 lg:order-none drop-shadow-[#FFA520]">
            <motion.div
              initial={{
                opacity: 0,
                translateY: 50,
                transition: { duration: 0.5 },
              }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              className="flex flex-col gap-[20px] mb-[30px] max-w-[500px]"
            >
              <h1 className="lg:text-[62px] md:text-[48px] text-[32px] lg:text-start text-center font-[700] leading-none">
                Hello I’m <br /> Imam Muttaqin
              </h1>
              <p className=" lg:text-[15px] lg:text-start text-center text-[15px] w-full min-w-[268px] leading-7">
                A UI/UX Designer & Front-End Developer focused on building
                seamless experiences that not only look good, but feel right.
              </p>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                translateY: 50,
                transition: { duration: 0.5 },
              }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              className="h-[2px] w-100% bg-[#213448]"
            ></motion.div>

            <motion.div
              initial={{
                opacity: 0,
                translateY: 50,
                transition: { duration: 0.5 },
              }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              className="flex lg:flex-row flex-col justify-center items-center gap-4 lg:gap-6"
            >
              <a href="/contact" className="flex-1 w-full">
                <NeumorphismButton>Work With Me</NeumorphismButton>
              </a>
              <a href="/project" className="flex-1 w-full">
                <NeumorphismButton2>See My Project</NeumorphismButton2>
              </a>
            </motion.div>
          </div>

          <div className="order-1 lg:order-none flex-1">
            <img
              src="/hero-img.svg"
              alt="Hero Image"
              className="lg:w-[650px] lg:h-[650px] md:w-[400px] md:h-[400px] w-[300px] h-[300px] order-2"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between items-center lg:items-start mt-[50px] w-full max-w-[1200px]">
          <motion.div
            initial={{
              opacity: 0,
              translateX: -50,
              transition: { duration: 0.5 },
            }}
            transition={{ duration: 1, delay: 0.3 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            className="flex flex-row gap-1.5 my-10 items-start"
          >
            <div className="w-[8px] h-[30px] bg-[#FFA520] rounded-full"></div>
            <div className="fle flex-col justify-center items-start">
              <p className="text-[#213448] text-[15px] md:text-[18px] font-[500]">
                Let’s up your business
              </p>
              <h1 className="text-[#213448] text-[24px] md:text-[32px] font-[700]">
                Services
              </h1>
            </div>
          </motion.div>

          <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-30 items-center w-full mx-[50px]">
            <motion.div
              initial={{
                opacity: 0,
                translateY: 50,
                transition: { duration: 0.5 },
              }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              className="flex flex-col justify-center items-center lg:items-start"
            >
              <img src="/uiux.svg" alt="" />
              <h1 className="text-[#213448] text-[24px] md:text-[28px] lg:text-[34px] font-[700] text-center lg:text-start">
                UI&UX Designer
              </h1>
              <p className="text-[#213448] text-[15px] lg:text-[18px] font-[400] text-center lg:text-start max-w-[438px]">
                I craft intuitive and user-centered interfaces that blend
                functionality with clean, modern aesthetics. My design process
                focuses on solving real user problems through research,
                wireframing, prototyping, and testing — turning ideas into
                seamless digital experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                translateY: 50,
                transition: { duration: 0.5 },
              }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              className="flex flex-col justify-center items-center lg:items-start"
            >
              <img src="/frontend.svg" alt="" />
              <h1 className="text-[#213448] text-[24px] md:text-[28px] lg:text-[34px] font-[700] text-center lg:text-start">
                Frontend Developer
              </h1>
              <p className="text-[#213448] text-[15px] lg:text-[18px] font-[400] text-center lg:text-start max-w-[438px]">
                I’m a Frontend Developer focused on building clean, responsive,
                and accessible user interfaces using HTML, CSS, Tailwind CSS,
                JavaScript, React, and Next.js. I love turning design concepts
                into interactive web experiences with smooth performance and
                polished visuals.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-[1200px] mt-[50px] ">
          <motion.div
            initial={{
              opacity: 0,
              translateX: -50,
              transition: { duration: 0.5 },
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            className="flex flex-row items-center justify-center lg:items-start lg:justify-start gap-2 mb-10"
          >
            <div className="w-[8px] h-[30px] bg-[#FFA520] rounded-full"></div>
            <h1 className="text-[#213448] text-[24px] md:text-[32px] font-[700]">
              My Tools
            </h1>
          </motion.div>
          <Marquee
            speed={50}
            gradient={false}
            className="gap-[50px] max-w-screen w-full [mask:linear-gradient(90deg,transparent,white_20%,white_80%,transparent)]"
          >
            <div className="flex flex-row gap-[50px] items-center">
              <div className="flex flex-row gap-2 items-center">
                <img
                  src="/figma.svg"
                  alt="Figma"
                  width={60}
                  height={60}
                  className="mx-0"
                />
                <p className="text-[#231448] text-2xl font-[500]">Figma</p>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <img
                  src="/css.svg"
                  alt="css"
                  width={60}
                  height={60}
                  className="mx-0"
                />
                <p className="text-[#231448] text-2xl font-[500]">CSS</p>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <img
                  src="/js.svg"
                  alt="js"
                  width={60}
                  height={60}
                  className="mx-0"
                />
                <p className="text-[#231448] text-2xl font-[500]">Javascript</p>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <img
                  src="/react.svg"
                  alt="React"
                  width={60}
                  height={60}
                  className="mx-0"
                />
                <p className="text-[#231448] text-2xl font-[500]">React.js</p>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <img
                  src="/nextjs.svg"
                  alt="Next.js"
                  width={60}
                  height={60}
                  className="mx-0"
                />
                <p className="text-[#231448] text-2xl font-[500]">Next.js</p>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <img
                  src="/tailwind.svg"
                  alt="Tailwind CSS"
                  width={60}
                  height={60}
                  className="mx-0"
                />
                <p className="text-[#231448] text-2xl font-[500]">
                  Tailwind CSS
                </p>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <img
                  src="/html.svg"
                  alt="html"
                  width={60}
                  height={60}
                  className="mx-0"
                />
                <p className="text-[#231448] text-2xl font-[500]">HTML</p>
              </div>
            </div>
          </Marquee>
        </div>
      </section>
<<<<<<< HEAD
      <WhatsAppButton />
=======
>>>>>>> 3ce8412d288051ea8ac9240c8eb7748cfb23ba96
    </main>
  );
}
