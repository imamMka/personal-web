"use client";

import { motion } from "framer-motion";
import { NeumorphismButton3 } from "@/app/components/button.jsx";
import { toast } from "react-toastify";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

const handleClick = () => {
  toast.success("Notification success!");
  toast.error("Something went wrong!");
  toast.info("Here is some info");
};
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
    console.log(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
    console.log(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
        },
      );
  };
  return (
    <section className="bg-background text-foreground transition-colors duration-300 h-fit pt-30 pb-[90px]">
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
              <p className="text-primary text-[16px] font-[400] z-[1] text-start">
                Contact
              </p>
              <h1 className="text-primary text-[32px] font-[700] z-[1] text-center lg:text-start">
                Let’s Build Something Exceptional
              </h1>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, translateX: -50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            className="text-primary text-[16px] font-[400] text-center lg:text-start lg:w-[500px] leading-relaxed"
          >
            Have a vision for a complex web application or a brand-new digital product? I specialize in bridging the gap between ambitious ideas and high-performing, scalable reality. Describe your needs, and let’s strategize the perfect roadmap for your project.
            <br /><br />
            <strong>Let's connect and scale together.</strong>
          </motion.p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          action=""
          className="flex flex-col w-full"
        >
          <label htmlFor="">Name</label>
          <input
            name="name"
            type="text"
            required
            placeholder="Your Name"
            className="w-full mb-1 rounded-md border-primary border-1 px-3 py-2 text-foreground bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            required
            placeholder="Your Email"
            className="w-full mb-1 rounded-md border-primary border-1 px-3 py-2 text-foreground bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <label htmlFor="">WhatsApp number</label>
          <input
            name="number"
            type="tel"
            required
            placeholder="Your WhatsApp Number"
            className="w-full mb-1 rounded-md border-primary border-1 px-3 py-2 text-foreground bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <label htmlFor="">Messages</label>
          <textarea
            name="message"
            id=""
            required
            placeholder="Insert your messages"
            className="w-full mb-5 h-[200px] rounded-md resize-none border-primary border-1 px-3 py-2 text-foreground bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
          <NeumorphismButton3 />
        </form>
      </div>
    </section>
  );
}
