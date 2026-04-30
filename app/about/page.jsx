"use client";

import { motion } from "framer-motion";
import { NeumorphismButton3 } from "@/app/components/button.jsx";
import WhatsAppButton from "../components/WhatsAppButton";
import Image from "next/image";

export default function About() {
  return (
    <main className="bg-background text-foreground h-fit pb-[90px] transition-colors duration-300">
      <section className="flex flex-col justify-center items-center pt-[120px] lg:pt-[160px] px-4">
        <div className=" flex flex-col lg:flex-row justify-between items-center lg:w-[1179px]">
          <div className="flex flex-1 flex-col gap-[20px] order-2 lg:order-none drop-shadow-amber-500 pb-[40px]">
            <div className="flex flex-col gap-[20px] mb-[30px] max-w-[500px]">
                <motion.h1
                  initial={{ opacity: 0, translateY: 50 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  className="lg:text-[64px] md:text-[48px] text-[32px] lg:text-start text-center font-[700] leading-tight"
                >
                  Architecting <br /> Digital Excellence
                </motion.h1>
                <motion.div
                  initial={{
                    opacity: 0,
                    translateY: 50,
                    transition: { duration: 0.5 },
                  }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  className="h-[2px] w-100% bg-primary"
                ></motion.div>
                <motion.p
                  initial={{ opacity: 0, translateY: 50 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  className=" lg:text-[18px] lg:text-start text-center text-[15px] w-full text-gray-600 dark:text-gray-400"
                >
                  Bridging the gap between creative design and robust technical architecture.
                </motion.p>
            </div>
          </div>

          <div className="order-1 lg:order-none flex-1">
            <Image
              src="/hero.png"
              alt="Imam Muttaqin"
              width={650}
              height={650}
              priority
              className="lg:w-[650px] lg:h-[650px] md:w-[400px] md:h-[400px] w-[300px] h-[300px] order-2 object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:px-[100px] px-[20px] mt-10">
          <div className="flex flex-col items-center lg:items-start">
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
              <div className="flex flex-col justify-center items-start">
                <p className="text-primary text-[15px] md:text-[18px] font-[500]">
                  What drives me
                </p>
                <h1 className="text-primary text-[24px] md:text-[32px] font-[700]">
                  My mission
                </h1>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, translateX: -50 }}
              transition={{ duration: 1, delay: 0.3 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              className="text-primary text-[18px] font-[400] text-center lg:text-start lg:w-[500px] mb-10 leading-relaxed"
            >
              Hi, I’m Imam Muttaqin — a <strong>Fullstack Developer</strong> and <strong>UI/UX Designer</strong>. I specialize in building end-to-end digital solutions that don't just look stunning, but perform flawlessly under the hood. My expertise spans from crafting pixel-perfect interfaces to architecting scalable backend systems.
            </motion.p>
          </div>

          <div className="w-fit flex gap-2">
            <motion.img
              initial={{
                opacity: 0,
                translateX: 50,
                transition: { duration: 0.5 },
              }}
              transition={{ duration: 1, delay: 0.3 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              src="/imamm.jpg"
              alt=""
              className="w-[700px] h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:px-[100px] px-[20px] mt-10">
          <motion.img
            initial={{
              opacity: 0,
              translateX: -50,
              transition: { duration: 0.5 },
            }}
            transition={{ duration: 1, delay: 0.3 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            src="/coding2.jpg"
            alt=""
            className="w-[700px] h-[400px] object-cover"
          />
          <div className="flex flex-col items-center lg:items-start">
            <motion.p
              initial={{
                opacity: 0,
                translateX: 50,
                transition: { duration: 0.5 },
              }}
              transition={{ duration: 1, delay: 0.3 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              className="text-primary text-[18px] font-[400] text-center lg:text-start lg:w-[500px] w-full mt-5 lg:mt-0"
            >
              I design with purpose and code with precision, aiming to create
              solutions that are user-friendly, accessible, and aligned with
              modern web standards. For me, every project is a chance to learn,
              build, and bring value through thoughtful design and clean
              development.
              <br />
              <br />
              Let’s work together to build web experiences that are not only
              visually appealing but also truly meaningful.
            </motion.p>
          </div>
        </div>
      </section>
      <WhatsAppButton />
    </main>
  );
}
