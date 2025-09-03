"use client";
import Image from "next/image";
import React, { useState, useEffect, FC } from "react";
import { Menu, X } from "lucide-react";
import { motion, Variants } from "framer-motion";
import ScrollTop from "./components/Button/ScrollTop";

interface Feature {
  title: string;
  desc: string;
  icon: string;
}

const features: Feature[] = [
  { title: "Instant Setup", desc: "Online onboarding. Live in minutes.", icon: "⚡" },
  { title: "Multiple Payment Modes", desc: "Credit/Debit cards, eWallets & PayNow covered.", icon: "💳" },
  { title: "Effortless Integration", desc: "API-first platform. Zero manual work. SDKs, plugins, full docs.", icon: "🔌" },
  { title: "Competitive Pricing", desc: "Save up to 30% on your processing fees.", icon: "💰" },
  { title: "Local Support", desc: "Singapore-based support team, ready to assist.", icon: "🤝" },
  { title: "Fully Secure", desc: "PCI DSS, ISO 27001 certified. Compliance handled for you.", icon: "🛡️" },
];

interface State {
  mobileMenuOpen: boolean;
  scrolled: boolean;
}

// Animation variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const Home: FC = () => {
  const [state, setState] = useState<State>({ mobileMenuOpen: false, scrolled: false });

  useEffect(() => {
    const handleScroll = () => setState(prev => ({ ...prev, scrolled: window.scrollY > 10 }));
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setState(prev => ({ ...prev, mobileMenuOpen: !prev.mobileMenuOpen }));

  return (
    <>
      {/* Navbar */}
      <nav className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${state.scrolled ? "shadow-sm" : ""}`}>
        <div className="flex justify-between items-center py-2 px-4 md:px-0 max-w-6xl mx-auto">
          <div className="flex items-center">
            <Image src="/logo.svg" alt="GotiPay logo" width={140} height={32} priority />
          </div>

          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {["Products", "Solutions", "Developers", "Pricing"].map((item, i) => (
              <motion.button
                key={item}
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="text-gray-700 hover:text-purple-700 text-sm md:text-base transition duration-200"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
              >
                {item}
              </motion.button>
            ))}
            <select className="border border-gray-300 rounded px-2 py-1 text-sm">
              <option>🇧🇩</option>
            </select>
            <motion.button whileHover={{ scale: 1.05 }} className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 text-sm">
              Login
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-purple-700 text-white rounded hover:bg-purple-800 text-sm">
              Register ↗
            </motion.button>
          </div>

          <button className="md:hidden text-gray-700" onClick={toggleMobileMenu}>
            {state.mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {state.mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden w-full px-4 pb-4 bg-white shadow"
          >
            {["Products", "Solutions", "Developers", "Pricing"].map((item, i) => (
              <motion.button
                key={item}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 150 }}
                className="block w-full text-left text-gray-700 hover:text-purple-700 py-2 text-sm"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
              >
                {item}
              </motion.button>
            ))}
            <select className="w-full border border-gray-300 rounded px-2 py-2 mt-2 text-sm">
              <option>🇧🇩</option>
            </select>
            <motion.button whileHover={{ scale: 1.05 }} className="w-full mt-2 px-3 py-2 border border-gray-300 rounded hover:bg-gray-100 text-sm">
              Login
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} className="w-full mt-2 px-3 py-2 bg-purple-700 text-white rounded hover:bg-purple-800 text-sm">
              Register ↗
            </motion.button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="min-h-screen max-w-6xl mx-auto mt-0 md:mt-3">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full flex items-center justify-start bg-gray-900 py-20 sm:py-28 md:py-32"
        >
          <div className="absolute inset-0 -z-10">
            <Image src="/hero-bg.jpg" alt="Hero Background" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
            <motion.div className="max-w-xl text-white space-y-4 sm:space-y-6">
              <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight" variants={fadeUp} custom={0}>
                Empower Your <span className="text-blue-400">Business</span>
              </motion.h1>
              <motion.p className="text-sm sm:text-base md:text-lg text-gray-200" variants={fadeUp} custom={1}>
                Seamless payment integration, powerful APIs, and instant onboarding to get you started in minutes.
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="px-5 py-2 sm:px-6 sm:py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-sm sm:text-base font-medium shadow-md"
                variants={fadeUp}
                custom={2}
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center py-12 sm:py-16 px-4 md:px-20 mx-auto">
          <motion.p className="text-gray-500 mb-2 text-xs sm:text-sm uppercase tracking-wider" variants={fadeUp} custom={0}>
            Why GotiPay?
          </motion.p>
          <motion.h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6" variants={fadeUp} custom={1}>
            Smart solutions built to scale your online business success
          </motion.h3>
          <motion.p className="text-gray-500 mb-8 sm:mb-12 text-sm sm:text-base max-w-3xl mx-auto" variants={fadeUp} custom={2}>
            Whether you’re a growing business aiming to save time and money as you scale, or an ambitious platform ready to create your own payment and financial solutions, GotiPay’s trusted technology empowers you to get there.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-2">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                custom={i}
                whileHover={{ scale: 1, y: -3 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="text-left flex flex-col items-start p-3 sm:p-4 
                 rounded-lg cursor-pointer
                 sm:hover:bg-white sm:hover:shadow-md 
                 bg-gray-50 sm:bg-white"
              >
                <div className="text-3xl sm:text-4xl mb-2">{feature.icon}</div>
                <h4 className="font-semibold text-base sm:text-lg text-gray-700">{feature.title}</h4>
                <p className="text-xs sm:text-sm text-gray-500">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Call to Action Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-12 sm:py-16 px-4 md:px-20 bg-purple-700 text-white text-center"
      >
        <motion.h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4" variants={fadeUp} custom={0}>
          Ready to get started?
        </motion.h3>
        <motion.p className="mb-4 sm:mb-6 text-gray-100 text-sm sm:text-base max-w-2xl mx-auto" variants={fadeUp} custom={1}>
          Join thousands of businesses in Bangladesh already using GotiPay to grow and scale online.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-purple-700 rounded-lg font-semibold hover:bg-gray-100 text-sm sm:text-base"
          variants={fadeUp}
          custom={2}
        >
          Register Now ↗
        </motion.button>
      </motion.section>

      <ScrollTop state={state} />

    </>
  );
};

export default Home;
