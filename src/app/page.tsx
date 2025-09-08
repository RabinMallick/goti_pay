'use client';
import Image from 'next/image';
import React, { FC } from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer/Fotter';
import ScrollTop from '@/components/Button/ScrollTop';
import EarthMain from '@/components/Earth/EarthMain';
import { fadeDown, fadeUp, rotateIn, staggerContainer, zoomIn } from '@/utils/VariantsFade';
import Navbar from '@/components/Navber/Navbar';

interface Feature {
  title: string;
  desc: string;
  icon: string;
}

const features: Feature[] = [
  { title: 'Instant Setup', desc: 'Online onboarding. Live in minutes.', icon: '⚡' },
  { title: 'Multiple Payment Modes', desc: 'Credit/Debit cards, eWallets & PayNow covered.', icon: '💳' },
  { title: 'Effortless Integration', desc: 'API-first platform. Zero manual work. SDKs, plugins, full docs.', icon: '🔌' },
  { title: 'Competitive Pricing', desc: 'Save up to 30% on your processing fees.', icon: '💰' },
  { title: 'Local Support', desc: 'Singapore-based support team, ready to assist.', icon: '🤝' },
  { title: 'Fully Secure', desc: 'PCI DSS, ISO 27001 certified. Compliance handled for you.', icon: '🛡️' },
];


const Home: FC = () => {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>

      <Navbar />

      {/* Hero Section */}
      <main className="min-h-screen max-w-6xl mx-auto mt-0 md:mt-3">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="relative w-full flex items-center justify-start bg-gray-900 py-20 sm:py-28 md:py-32"
        >
          <div className="absolute inset-0 -z-10">
            <Image src="/hero-bg.jpg" alt="Hero Background" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
            <motion.div className="max-w-xl text-white space-y-4 sm:space-y-6">
              <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight" variants={zoomIn} custom={0}>
                Empower Your <span className="text-[var(--primary)]">Business</span>
              </motion.h1>
              <motion.p className="text-sm sm:text-base md:text-lg text-gray-200" variants={fadeUp} custom={1}>
                Seamless payment integration, powerful APIs, and instant onboarding to get you started in minutes.
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                className="px-5 py-2 sm:px-6 sm:py-3 bg-[var(--primary)] hover:bg-indigo-700 rounded-full text-sm sm:text-base font-medium shadow-md"
                variants={fadeUp}
                custom={2}
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section className="text-center py-12 sm:py-16 px-4 md:px-20 mx-auto" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
          <motion.p className="text-gray-500 mb-2 text-xs sm:text-sm uppercase tracking-wider" variants={fadeUp} custom={0}>Why GotiPay?</motion.p>
          <motion.h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6" variants={fadeDown} custom={1}>
            Smart solutions built to scale your online business success
          </motion.h3>
          <motion.p className="text-gray-500 mb-8 sm:mb-12 text-sm sm:text-base max-w-3xl mx-auto" variants={fadeUp} custom={2}>
            Whether you’re a growing business aiming to save time and money as you scale, or an ambitious platform ready to create your own payment and financial solutions, GotiPay’s trusted technology empowers you to get there.
          </motion.p>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-2">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={rotateIn}
                custom={i}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="text-left flex flex-col items-start p-3 sm:p-4 rounded-lg cursor-pointer sm:hover:bg-white sm:hover:shadow-md bg-gray-50 sm:bg-white"
              >
                <div className="text-3xl sm:text-4xl mb-2">{feature.icon}</div>
                <h4 className="font-semibold text-base sm:text-lg text-gray-700">{feature.title}</h4>
                <p className="text-xs sm:text-sm text-gray-500">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </main>


      <EarthMain />

      {/* Footer */}
      <Footer />


      <ScrollTop />
    </motion.div>
  );
};


export default Home;