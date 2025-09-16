// components/Footer.tsx
'use client';

import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { path } from "@/utils/baseurl";
import ScrollTop from "../Button/ScrollTop";

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
      items: ["Platform APIs and Embedded Finance Overview", "Connected Accounts", "Accounts", "Payments", "Transactional FX", "Payouts", "Issuing"],
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
      items: ["Who we are", "Operating principles", "Terms & Conditions", "Privacy & Policy", "Cookie Preference Centre", "Careers", "Partnership program"],
    },
    { title: "Resources", items: ["Blog", "Newsroom", "FAQ", "Support"] },
  ];

  // Simple fade-up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Helper to generate URLs
  const generateLink = (item: string) => {
    const exceptions: Record<string, string> = {
      "Privacy & Policy": "/privacy-policy",
      "Terms & Conditions": "/terms-conditions",
      "Cookie Preference Centre": "/cookie-preference",
    };
    return exceptions[item] || `/${item.replace(/\s+/g, "-").toLowerCase()}`;
  };

  return (
    <footer className="bg-gray-100 text-gray-700 pt-3">
      {/* Top logo and store buttons */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      > 
        <motion.div variants={fadeUp}>
          <Image src="/logo.svg" alt="Gotipay Logo" width={150} height={50} className="object-contain" />
        </motion.div>
        <motion.div className="flex gap-3" variants={fadeUp}>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <Image src={`${path}EmailTemplateLogo/applestore.png`} alt="Download on Apple Store" width={140} height={40} />
          </a>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <Image src={`${path}EmailTemplateLogo/playstore.png`} alt="Get it on Google Play" width={140} height={40} />
          </a>
        </motion.div>
      </motion.div>

      {/* Top row */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 md:grid-cols-5 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {topCols.map((col, idx) => (
          <motion.div key={idx} variants={fadeUp}>
            <h4 className="font-bold mb-4">{col.title}</h4>
            <ul className="space-y-2 text-sm">
              {col.items.map((item, i) => (
                <motion.li key={i} variants={fadeUp}>
                  <Link href={generateLink(item)} className="hover:underline">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Second row */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-300 text-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {secondCols.map((col, idx) => (
          <motion.div key={idx} variants={fadeUp}>
            <h4 className="font-bold mb-2">{col.title}</h4>
            {col.items.map((item, i) => (
              <motion.p key={i} variants={fadeUp}>
                <Link href={generateLink(item)} className="hover:underline">
                  {item}
                </Link>
              </motion.p>
            ))}
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom row */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-4 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <span>🌐 Global</span>
          <span>▼</span>
        </div>
        <div className="flex items-center gap-4">
          <span>© Gotipay 2025. All rights reserved.</span>
          <span>Sitemap</span>
          <motion.div className="flex gap-2" variants={fadeUp}>
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
          </motion.div>
        </div>
      </motion.div>

      <ScrollTop/>
    </footer>
  );
};

export default Footer;
