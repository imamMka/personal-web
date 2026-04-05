"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/6281219118993"
      target="_blank"
      className="fixed bottom-25 right-5 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
    >
        <FaWhatsapp className="w-6 h-6" />
    </Link>
  );
}
