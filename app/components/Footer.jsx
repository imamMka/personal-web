"use client";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#213448] text-white relative">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start">
        {/* Info */}
        <div>
          <div className="flex flex-row justify-start items-center gap-4 mb-6">
            <img src="/logo-footer.svg" alt="" className="w-16" />
            <h2 className="text-2xl font-[700]">Imam Muttaqin</h2>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-orange-400" />
              <span className="text-[16px]">Karawang, West Java, Indonesia</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-orange-400" />
              <span>
                <a
                  href="https://wa.me/+6281219118993"
                  className="text-[16px] hover:underline"
                >
                  (+62) 812-1911-8993
                </a>
              </span>
            </div>
            <div className="flex items-center gap-2 break-all">
              <FaEnvelope className="text-orange-400" />
              <span className="text-[16px]">imammka23@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mt-10 md:mt-0">
          <div className="flex flex-col items-start justify-between gap-2">
            <h2 className="text-2xl font-[700]">{t("footer.support")}</h2>

            <a href="/contact" className="text-[16px] hover:underline">
              {t("footer.contact")}
            </a>
            <a href="/" className="text-[16px] hover:underline">
              Home
            </a>
            <a href="/about" className="text-[16px] hover:underline">
              About
            </a>
            <a href="/project" className="text-[16px] hover:underline">
              Project
            </a>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-2xl font-[700] mb-4">{t("footer.social")}</h2>
            {/* <div className="">
          </div>  */}

            <div className="flex flex-col gap-2 text-[16px] uppercase font-semibold">
              <a
                href="https://x.com/amnanyaimam"
                className=" hover:text-[#1DA1F2] transition-all duration-500"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/amnasj/"
                className=" hover:text-[#0A66C2] transition-all duration-500"
              >
                Linkedin
              </a>
              <a
                href="https://wa.me/+6281219118993"
                className=" hover:text-[#25D366] transition-all duration-500"
              >
                Whatsapp
              </a>
              <a
                href="https://www.instagram.com/mtqin._/"
                className=" hover:text-[#E4405F] transition-all duration-500"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-700 flex flex-col md:flex-row justify-between items-center px-6 py-4 text-sm">
        <p className="mb-2 md:mb-0">{t("footer.copyright")}</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:underline">
            {t("footer.privacyPolicy")}
          </a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-orange-400 hover:bg-orange-700 text-white w-12 h-12 rounded-full shadow-md flex items-center justify-center z-50"
          aria-label="Scroll to top"
        >
          <IoIosArrowUp size={24} />
        </button>
      )}
    </footer>
  );
}
