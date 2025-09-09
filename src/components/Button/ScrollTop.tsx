"use client";

import React, { FC, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ScrollState {
  scrolled: boolean;
  percent: number;
}

const ScrollTop: FC = () => {
  const [scroll, setScroll] = useState<ScrollState>({
    scrolled: false,
    percent: 0,
  });
  const [mounted, setMounted] = useState(false); // new

  useEffect(() => {
    setMounted(true); // mark as mounted

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScroll({ scrolled: scrollTop > 50, percent });
    };

    handleScroll(); 
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scroll.percent / 100) * circumference;

  return (
    <AnimatePresence>
      {mounted && scroll.scrolled && ( // only render after mounted
        <motion.button
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-10 md:bottom-5 right-5 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[var(--primary)] text-white shadow-lg hover:bg-indigo-700 z-50 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 56 56">
            <circle
              cx="28"
              cy="28"
              r={radius}
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="4"
              fill="transparent"
            />
            <circle
              cx="28"
              cy="28"
              r={radius}
              stroke="white"
              strokeWidth="4"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              transform="rotate(-90 28 28)"
            />
          </svg>
          <span className="relative text-lg font-bold">↑</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollTop;
