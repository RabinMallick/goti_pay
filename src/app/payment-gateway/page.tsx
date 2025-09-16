// app/components/PaymentGateway.tsx
'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import PaymentIntegration from '@/components/UI/payments/PaymentIntegration';

const IMAGES = [
  '/avif/payment-linkd.avif',
  '/images/freelancing.jpg',
  '/images/education.jpg',
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const fadeIn = (direction: 'up' | 'down'): Variants => ({
  hidden: { opacity: 0, y: direction === 'up' ? 20 : -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
});

const textVariant: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 60, damping: 12 } },
};

const imageVariant: Variants = {
  hidden: { opacity: 0, scale: 0.95, rotate: -2 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 80, damping: 14 } },
  hover: { scale: 1.06, rotate: [0, 1, -1, 0], boxShadow: '0 15px 35px rgba(79, 70, 229, 0.2)', transition: { type: 'spring', stiffness: 160, damping: 10 } },
  float: { y: [0, -5, 0], transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' } },
};

const PaymentGateway: React.FC = () => {
  const [direction, setDirection] = useState<'up' | 'down'>('up');

  useEffect(() => {
    let lastScroll = window.scrollY;
    const handleScroll = () => {
      const current = window.scrollY;
      setDirection(current > lastScroll ? 'up' : 'down');
      lastScroll = current;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <>
      <section className="relative overflow-hidden pb-16 pt-24  md:py-24">
        {/* Backgrounds */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-pink-50" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-300 opacity-30 blur-[140px] rounded-full -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300 opacity-30 blur-[140px] rounded-full -z-10" />

        <motion.div
          className="container mx-auto px-4 sm:px-6 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-center max-w-6xl"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Left Content */}
          <motion.div variants={textVariant} className="space-y-4 sm:space-y-5">
            <h2 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              For Global Software Platforms
            </h2>
            <motion.p
              variants={fadeIn(direction)}
              className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-gray-700 font-medium"
            >
              White-labelled global payments for your software platform
            </motion.p>
            <motion.p
              variants={fadeIn(direction)}
              className="text-[11px] sm:text-[12px] md:text-[13px]  text-gray-600 leading-relaxed"
            >
              Create more value for your customers. Monetise your own branded payments acceptance solution with one-time or recurring payments that keep buyers in your checkout flow.
            </motion.p>

            <div className="space-y-2 sm:space-y-3">
              <motion.div variants={fadeIn(direction)}>
                <h3 className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-semibold text-indigo-700 leading-8" >
                  🌍 Process in 180+ countries & 130+ currencies
                </h3>
                <p className="text-[11px] sm:text-[12px] md:text-[13px]  text-gray-600">
                  Help customers sell globally, accept payments locally, and support 160+ methods worldwide.
                </p>
              </motion.div>
              <motion.div variants={fadeIn(direction)}>
                <h3 className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-semibold text-pink-700 leading-8">
                  💸 Save with like-for-like settlement
                </h3>
                <p className="text-[11px] sm:text-[12px] md:text-[13px] text-gray-600 ">
                  Settle in the same currency to avoid fees. Convert at interbank rates only when necessary.
                </p>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div variants={fadeIn(direction)} className="flex gap-3 sm:gap-4 pt-5 sm:pt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-5 sm:px-6 py-2 sm:py-2 rounded-md bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-[10px] sm:text-[13px] md:text-[14px] lg:text-[15px]  shadow transition-transform cursor-pointer"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-5 sm:px-6 py-2 sm:py-2 rounded-md border border-indigo-200 bg-white text-indigo-700 text-[10px] sm:text-[13px] md:text-[14px] lg:text-[15px]  shadow transition cursor-pointer"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image Grid */}
          <motion.div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-5" variants={container}>
            {IMAGES.map((src, i) => (
              <motion.div
                key={i}
                variants={imageVariant}
                whileHover="hover"
                animate="float"
                className={`relative overflow-hidden rounded-md h-40 sm:h-48 md:h-56 lg:h-64 p-[2px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 backdrop-blur-sm ${i === 2 ? 'col-span-2' : ''}`}
              >
                <div className="relative w-full h-full rounded-md overflow-hidden">
                  <Image
                    src={src}
                    alt={`Payment ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      <PaymentIntegration />

    </>
  );
};

export default PaymentGateway;
