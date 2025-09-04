// components/Footer.tsx
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  bottomItemVariants,
  fadeUp,
  secondItemVariants,
  staggerContainer,
  topItemVariants,
} from "@/utils/VariantsFade";
import Image from "next/image"; // For logo and store images

const Footer: React.FC = () => {
  const topCols = [
    {
      title: "Business Accounts",
      items: ["Business Accounts Overview", "Global Accounts", "FX & Transfers"],
    },
    {
      title: "Spend",
      items: ["Spend Overview", "Corporate Cards", "Expense Management", "Bill Pay"],
    },
    {
      title: "Payments",
      items: ["Payments Overview", "Checkout", "Payment Plugins", "Payment Links"],
    },
    {
      title: "Platform APIs",
      items: [
        "Platform APIs and Embedded Finance Overview",
        "Connected Accounts",
        "Accounts",
        "Payments",
        "Transactional FX",
        "Payouts",
        "Issuing",
      ],
    },
    {
      title: "Embedded Finance Use Cases",
      items: ["Banking as a Service", "Global Treasury", "Payments for Platforms"],
    },
  ];

  const secondCols = [
    { title: "Plans", items: ["Pricing"] },
    { title: "Developers", items: ["Product Documentation", "API Reference"] },
    {
      title: "Company",
      items: [
        "Who we are",
        "Operating principles",
        "Terms & policies",
        "Cookie Preference Centre",
        "Careers",
        "Partnership program",
      ],
    },
    { title: "Resources", items: ["Blog", "Newsroom", "FAQ", "Support"] },
  ];

  return (
    <footer className="bg-gray-100 text-gray-700 mt-10">
      {/* Top logo and store buttons */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Logo */}
        <motion.div variants={fadeUp}>
          <Image
            src="/logo.svg" // replace with your logo path
            alt="Gotipay Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </motion.div>

        {/* App Store Buttons */}
        <motion.div className="flex gap-3" variants={fadeUp}>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/apple-store.png" // replace with your Apple store image
              alt="Download on Apple Store"
              width={140}
              height={40}
            />
          </a>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <Image
              src="/play-store.png" // replace with your Play store image
              alt="Get it on Google Play"
              width={140}
              height={40}
            />
          </a>
        </motion.div>
      </motion.div>

      {/* Top row */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {topCols.map((col, idx) => (
          <motion.div key={idx} variants={topItemVariants}>
            <h4 className="font-bold mb-4">{col.title}</h4>
            <ul className="space-y-2 text-sm">
              {col.items.map((item, i) => (
                <motion.li key={i} variants={fadeUp} custom={i}>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Second row */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-300 text-sm"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {secondCols.map((col, idx) => (
          <motion.div key={idx} variants={secondItemVariants}>
            <h4 className="font-bold mb-2">{col.title}</h4>
            {col.items.map((item, i) => (
              <motion.p key={i} variants={fadeUp} custom={i}>
                {item}
              </motion.p>
            ))}
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom row */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-4 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500"
        variants={bottomItemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <span>🌐 Global</span>
          <span>▼</span>
        </div>
        <div className="flex items-center gap-4">
          <span>© Gotipay 2025. All rights reserved.</span>
          <span>Sitemap</span>
          <motion.div className="flex gap-2" variants={fadeUp} custom={2}>
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
