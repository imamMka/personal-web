"use client";

import { motion } from "framer-motion";
import { NeumorphismButton3 } from "@/app/components/button.jsx";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const handleClick = () => {
    toast.success('Notification success!');
    toast.error('Something went wrong!');
    toast.info('Here is some info');
  };
export default function Contact() {
  return (
    <section className="bg-[#ffffff] h-fit pt-30 pb-[90px]">
      <div className="flex flex-col lg:flex-row justify-evenly items-start px-5 lg:px-[140px] gap-10">
        <div className="flex flex-col gap-5 justify-center items-center lg:items-start">
          <motion.div
            initial={{
              opacity: 0,
              translateX: -50,
              transition: { duration: 0.5 },
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            className="flex flex-row items-start gap-1.5"
          >
            <div className="w-[8px] h-[30px] bg-[#FFA520] rounded-full"></div>
            <div className="relative w-fit flex flex-col">
              <p className="text-[#213448] text-[16px] font-[400] z-[1] text-start">
                Contact
              </p>
              <h1 className="text-[#213448] text-[32px] font-[700] z-[1] text-center lg:text-start">
                Let's up your business
              </h1>
            </div>
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              translateX: -50,
              transition: { duration: 0.5 },
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            className="text-[#213448] text-[16px] font-[400] text-center lg:text-start lg:w-[500px]"
          >
            Describe your challenges and needs. Within 24 hours I will contact
            you to book a call and plan the entire strategy together on how to
            start improving your app or website. <br />
            Let's connect!
          </motion.p>
        </div>

        <form action="" className="flex flex-col w-full">
          <label htmlFor="">Name</label>
          <input
            type="text"
            required
            placeholder="Your Name"
            className="w-full mb-1 rounded-md border-[#213448] border-1 px-3 py-2 text-[#213448] focus:outline-none focus:ring-2 focus:ring-[#213448]"
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            required
            placeholder="Your Email"
            className="w-full mb-1 rounded-md border-[#213448] border-1 px-3 py-2 text-[#213448] focus:outline-none focus:ring-2 focus:ring-[#213448]"
          />
          <label htmlFor="">Messages</label>
          <textarea
            name="text"
            id=""
            required
            placeholder="Insert your messages"
            className="w-full mb-5 h-[200px] rounded-md resize-none border-[#213448] border-1 px-3 py-2 text-[#213448] focus:outline-none focus:ring-2 focus:ring-[#213448]"
          ></textarea>
          <NeumorphismButton3 />
        </form>
      </div>
    </section>
  );
}
