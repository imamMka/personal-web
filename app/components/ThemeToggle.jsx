"use client";

import { useTheme } from "@/app/context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg cursor-pointer hover:bg-white/20 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {theme === "light" ? (
            <motion.div
              key="sun"
              initial={{ y: -20, opacity: 0, rotate: -90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 20, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <FiSun className="w-5 h-5 text-yellow-500" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ y: -20, opacity: 0, rotate: -90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 20, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <FiMoon className="w-5 h-5 text-blue-400" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </button>
  );
}
