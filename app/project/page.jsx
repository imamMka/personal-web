"use client";

import projects from "@/app/components/BahanProject.jsx";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";
<<<<<<< HEAD
import WhatsAppButton from "../components/WhatsAppButton";
=======
>>>>>>> 3ce8412d288051ea8ac9240c8eb7748cfb23ba96

export default function Project() {
  return (
    <section className="bg-[#ffffff] pt-30 pb-[90px] md:px-20 px-10 ">
      <motion.div initial={{
            opacity: 0,
            translateX: -50,
            transition: { duration: 0.5 },
          }}
          transition={{ duration: 1, delay: 0.3 }}
          whileInView={{ opacity: 1, translateX: 0 }} className="flex flex-row items-center justify-center lg:items-start lg:justify-start gap-2 mb-10">
        <div className="w-[8px] h-[30px] bg-[#FFA520] rounded-full"></div>
        <h1 className="text-[#213448] text-[24px] md:text-[32px] font-[700]">
          My Project
        </h1>
      </motion.div>

      <motion.div initial={{
            opacity: 0,
            translateY: 50,
            transition: { duration: 0.5 },
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileInView={{ opacity: 1, translateY: 0 }} className=" grid md:grid-cols-2 grid-cols-1 gap-10">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="w-fit h-fit border-2 border-[#213448] rounded-[8px] p-5 group transition-all duration-1000 ease-in-out hover:scale-105"
          >
            <a href={project.link}>
              <img
                src={project.image}
                alt=""
                className="lg:h-[400px] h-[200px] object-cover w-full border-1 border-[#213448]"
              />

              <div className="py-3">
                <div className="text-[#213448]">
                  <h1 className="text-[#213448] text-[24px] md:text-[28px] lg:text-[34px] font-[700] text-center lg:text-start">
                    {project.name}
                  </h1>
                  <p className="text-[#213448] text-[15px] lg:text-[18px] font-[400] text-center lg:text-start">
                    {project.desription}
                  </p>
                </div>
                <div className="flex flex-row justify-end items-center gap-2 w-full">
                  <p className="font-[700] underline text-[#213448] text-[15px] lg:text-[18px]">Live Preview</p>
                  <FaArrowRight className="w-fit h-[40px] group-hover:-rotate-45 transition-all duration-300 ease-in-out" />
                </div>
              </div>
            </a>
          </div>
        ))}
      </motion.div>
<<<<<<< HEAD
      <WhatsAppButton />
=======
>>>>>>> 3ce8412d288051ea8ac9240c8eb7748cfb23ba96
    </section>
  );
}
