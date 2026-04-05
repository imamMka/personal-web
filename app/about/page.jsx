"use client";

import { motion } from "framer-motion";
import { NeumorphismButton3 } from "@/app/components/button.jsx";
import WhatsAppButton from "../components/WhatsAppButton";

export default function About() {
  return (
    <main className="bg-[#ffffff] h-full pb-[90px]">
      <section>
        <div className=" flex flex-col lg:flex-row m-auto items-center pt-[80px] lg:pt-10 lg:w-[1179px]">
          <div className="flex flex-1 flex-col gap-[20px] order-2 lg:order-none drop-shadow-amber-500 pb-[40px]">
            <div className="flex flex-col gap-[20px] mb-[30px] max-w-[500px]">
              <motion.h1
                initial={{
                  opacity: 0,
                  translateY: 50,
                  transition: { duration: 0.5 },
                }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                className="lg:text-[64px] md:text-[48px] text-[32px] lg:text-start text-center font-[700] leading-4"
              >
                About Me
              </motion.h1>
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
              <motion.p
                initial={{
                  opacity: 0,
                  translateY: 50,
                  transition: { duration: 0.5 },
                }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                className=" lg:text-[15px] lg:text-start text-center text-[15px] w-full leading-none"
              >
                Let's know each others
              </motion.p>
            </div>
          </div>

          <div className="order-1 lg:order-none flex-1">
            <img
              src="/hero-img.svg"
              alt="Hero Image"
              className="lg:w-[650px] lg:h-[650px] md:w-[400px] md:h-[400px] w-[300px] h-[300px] order-2"
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
                <p className="text-[#213448] text-[15px] md:text-[18px] font-[500]">
                  What drives me
                </p>
                <h1 className="text-[#213448] text-[24px] md:text-[32px] font-[700]">
                  My mission
                </h1>
              </div>
            </motion.div>

            <motion.p
              initial={{
                opacity: 0,
                translateX: -50,
                transition: { duration: 0.5 },
              }}
              transition={{ duration: 1, delay: 0.3 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              className="text-[#213448] text-[18px] font-[400] text-center lg:text-start lg:w-[500px] mb-10"
            >
              Hi, I’m Imam Muttaqin — a passionate UI/UX Designer and Front-End
              Developer. I love turning ideas into interactive and meaningful
              digital experiences. My journey started with a curiosity for how
              things work on the web, which grew into a drive to not only make
              websites functional, but also intuitive and visually engaging.
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
              className="text-[#213448] text-[18px] font-[400] text-center lg:text-start lg:w-[500px] w-full mt-5 lg:mt-0"
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
