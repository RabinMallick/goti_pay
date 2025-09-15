// app/components/PaymentGateway.tsx
'use client';

import Image from 'next/image';
import React from 'react';
import { motion, Variants } from 'framer-motion';

const images = [
  '/avif/payment-linkd.avif',
  '/images/freelancing.jpg',
  '/images/education.jpg',
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textVariant: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 70, damping: 15 },
  },
};

const imageVariant: Variants = {
  hidden: { opacity: 0, x: 50, y: 20, rotate: -2, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 80, damping: 14 },
  },
  hover: {
    scale: 1.07,
    rotate: [0, 2, -2, 0],
    transition: { type: 'spring', stiffness: 150, damping: 10 },
  },
};

const PaymentGateway: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-16 mt-12">
      <motion.div
        className="grid md:grid-cols-2 gap-12 items-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Content */}
        <motion.div variants={textVariant}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            For Global Software Platforms
          </h2>
          <p className="mb-4 text-gray-700 font-medium">
            White-labelled global payments for your software platform
          </p>
          <p className="mb-6 text-gray-600">
            Create more value for your customers. Monetise your own branded global payments acceptance solution that facilitates one-time or recurring payments and doesn’t redirect buyers away from their checkout flows.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            Process in 180+ countries and 130+ currencies
          </h3>
          <p className="mb-4 text-gray-600">
            Allow your customers to sell internationally and boost their sales by accepting payments in local currency. Improve checkout rates by supporting 160+ payment methods.
          </p>

          <h3 className="text-xl font-semibold mb-2">Save with like-for-like settlement</h3>
          <p className="text-gray-600">
            Let your customers collect and settle proceeds in the same currency to avoid unnecessary conversion fees. Convert currency at interbank rates when needed.
          </p>
        </motion.div>

        {/* Right Image Grid */}
        <motion.div className="grid grid-cols-2 grid-rows-2 gap-4" variants={container}>
          {images.map((src, index) => (
            <motion.div
              key={index}
              className={`relative ${index === 2 ? 'col-span-2' : ''} h-48 md:h-60 cursor-pointer`}
              variants={imageVariant}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image
                src={src}
                alt={`Payment ${index + 1}`}
                fill
                className="object-cover rounded-lg shadow-lg"
              />
              {/* Optional subtle overlay glow */}
              <motion.div
                className="absolute inset-0 rounded-lg pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.15, backgroundColor: 'rgba(255,255,255,0.3)' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PaymentGateway;
