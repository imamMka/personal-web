"use client";

import React from "react";
import "./globals.css";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import {
  NeumorphismButton,
  NeumorphismButton2,
} from "@/app/components/button.jsx";
import WhatsAppButton from "@/app/components/WhatsAppButton.jsx";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#ffffff] h-fit pb-[90px]">
      <section className="flex flex-col justify-center items-center pt-[120px] lg:pt-[160px] px-4">
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
              <h1 className="lg:text-[62px] md:text-[48px] text-[32px] lg:text-start text-center font-[700] leading-tight">
                I Build Fullstack <br /> Products End-to-End
              </h1>
              <p className=" lg:text-[18px] lg:text-start text-center text-[15px] w-full min-w-[268px] leading-7 text-gray-700">
                From pixel-perfect UI/UX and responsive frontends to robust backends and database architecture — I deliver complete web solutions that scale.
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
              className="flex flex-col justify-center items-center gap-3 lg:items-start lg:justify-start mb-6"
            >
              <p className="text-[#213448] font-[500] text-[14px]">✓ 20+ Projects Delivered | ✓ Fullstack Developer | ✓ Database Architect</p>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                translateY: 50,
                transition: { duration: 0.5 },
              }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              className="flex lg:flex-row flex-col justify-center items-center gap-4 lg:gap-6 lg:justify-start"
            >
              <a href="/contact" className="flex-1 w-full">
                <NeumorphismButton>Get Started Today</NeumorphismButton>
              </a>
              <a href="/project" className="flex-1 w-full">
                <NeumorphismButton2>View Case Studies</NeumorphismButton2>
              </a>
            </motion.div>
          </div>

          <div className="order-1 lg:order-none flex-1">
            <Image
              src="/hero.png"
              alt="Hero Image"
              width={650}
              height={650}
              priority
              className="lg:w-[650px] lg:h-[650px] md:w-[400px] md:h-[400px] w-[300px] h-[300px] order-2 object-contain"
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
                What I Provide
              </p>
              <h1 className="text-[#213448] text-[24px] md:text-[32px] font-[700]">
                Services & Expertise
              </h1>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full">
            {/* UI/UX Design */}
            <motion.div
              initial={{ opacity: 0, translateY: 50, transition: { duration: 0.5 } }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              className="flex flex-col justify-center items-center lg:items-start"
            >
              <img src="/uiux.svg" alt="UI/UX Design" />
              <h1 className="text-[#213448] text-[24px] md:text-[28px] lg:text-[34px] font-[700] text-center lg:text-start">
                UI/UX Design
              </h1>
              <p className="text-[#213448] text-[15px] lg:text-[18px] font-[400] text-center lg:text-start max-w-[438px]">
                I craft intuitive, user-centered interfaces that increase engagement and conversions. From research & wireframes to high-fidelity prototypes — every design decision is grounded in user insights.
              </p>
            </motion.div>

            {/* Web App Development */}
            <motion.div
              initial={{ opacity: 0, translateY: 50, transition: { duration: 0.5 } }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              className="flex flex-col justify-center items-center lg:items-start"
            >
              <img src="/frontend.svg" alt="Web App Development" />
              <h1 className="text-[#213448] text-[24px] md:text-[28px] lg:text-[34px] font-[700] text-center lg:text-start">
                Web App Development
              </h1>
              <p className="text-[#213448] text-[15px] lg:text-[18px] font-[400] text-center lg:text-start max-w-[438px]">
                I build complete, production-ready web applications using React and Next.js — from responsive UI to server-side rendering, authentication, and deployment. Fast, scalable, and built to last.
              </p>
            </motion.div>

            {/* Backend & API Development */}
            <motion.div
              initial={{ opacity: 0, translateY: 50, transition: { duration: 0.5 } }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              className="flex flex-col justify-center items-center lg:items-start"
            >
              <img src="/frontend.svg" alt="Backend & API" />
              <h1 className="text-[#213448] text-[24px] md:text-[28px] lg:text-[34px] font-[700] text-center lg:text-start">
                Backend & API Development
              </h1>
              <p className="text-[#213448] text-[15px] lg:text-[18px] font-[400] text-center lg:text-start max-w-[438px]">
                I design and build robust REST APIs and server-side logic using Node.js and Express. From authentication flows to third-party integrations — your backend will be secure, clean, and well-documented.
              </p>
            </motion.div>

            {/* Database Architecture */}
            <motion.div
              initial={{ opacity: 0, translateY: 50, transition: { duration: 0.5 } }}
              transition={{ duration: 0.5, delay: 1.1 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              className="flex flex-col justify-center items-center lg:items-start"
            >
              <img src="/uiux.svg" alt="Database Architecture" />
              <h1 className="text-[#213448] text-[24px] md:text-[28px] lg:text-[34px] font-[700] text-center lg:text-start">
                Database Architecture
              </h1>
              <p className="text-[#213448] text-[15px] lg:text-[18px] font-[400] text-center lg:text-start max-w-[438px]">
                I design and manage efficient, scalable databases using PostgreSQL, MySQL, and Prisma ORM. From schema modeling to query optimization — your data is structured for performance and growth.
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
                <img src="/figma.svg" alt="Figma" width={60} height={60} className="mx-0" />
                <p className="text-[#231448] text-2xl font-[500]">Figma</p>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <img src="/html.svg" alt="HTML" width={60} height={60} className="mx-0" />
                <p className="text-[#231448] text-2xl font-[500]">HTML</p>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <img src="/css.svg" alt="CSS" width={60} height={60} className="mx-0" />
                <p className="text-[#231448] text-2xl font-[500]">CSS</p>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <img src="/js.svg" alt="JavaScript" width={60} height={60} className="mx-0" />
                <p className="text-[#231448] text-2xl font-[500]">Javascript</p>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <img src="/react.svg" alt="React" width={60} height={60} className="mx-0" />
                <p className="text-[#231448] text-2xl font-[500]">React.js</p>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <img src="/nextjs.svg" alt="Next.js" width={60} height={60} className="mx-0" />
                <p className="text-[#231448] text-2xl font-[500]">Next.js</p>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <img src="/tailwind.svg" alt="Tailwind CSS" width={60} height={60} className="mx-0" />
                <p className="text-[#231448] text-2xl font-[500]">Tailwind CSS</p>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <img src="/js.svg" alt="Node.js" width={60} height={60} className="mx-0" />
                <p className="text-[#231448] text-2xl font-[500]">Node.js</p>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <img src="/js.svg" alt="Express.js" width={60} height={60} className="mx-0" />
                <p className="text-[#231448] text-2xl font-[500]">Express.js</p>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <img src="/js.svg" alt="PostgreSQL" width={60} height={60} className="mx-0" />
                <p className="text-[#231448] text-2xl font-[500]">PostgreSQL</p>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <img src="/js.svg" alt="MySQL" width={60} height={60} className="mx-0" />
                <p className="text-[#231448] text-2xl font-[500]">MySQL</p>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <img src="/js.svg" alt="Prisma" width={60} height={60} className="mx-0" />
                <p className="text-[#231448] text-2xl font-[500]">Prisma ORM</p>
              </div>
            </div>
          </Marquee>
        </div>
      </section>
      <WhatsAppButton />
    </main>
  );
}
