// pages/privacy.tsx
'use client';
import React from "react";
import { FaLock, FaUserShield, FaDatabase } from 'react-icons/fa';
import { MdPrivacyTip } from "react-icons/md";
import { HiOutlineUserGroup, HiOutlineLink, HiOutlineRefresh, HiOutlineMail } from "react-icons/hi";
import * as Icons from 'react-icons/hi';
import HeroSection from "@/components/Hero/HeroSection";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Navbar from "@/components/Navber/Navbar";
import ScrollTop from "@/components/Button/ScrollTop";
import Footer from "@/components/Footer/Footer";
import aboutusData from '@/data/aboutus.json';
import clsx from 'clsx';

const renderContent = (text: string) => {
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  let parts: (string | React.ReactElement)[] = [];
  let lastIndex = 0;

  const combinedRegex = new RegExp(`${emailRegex.source}|${urlRegex.source}`, 'g');
  let match;
  while ((match = combinedRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const matchedText = match[0];
    if (emailRegex.test(matchedText)) {
      parts.push(
        <a
          key={match.index}
          href={`mailto:${matchedText}`}
          className="text-blue-600 underline hover:text-blue-800"
        >
          {matchedText}
        </a>
      );
    } else if (urlRegex.test(matchedText)) {
      parts.push(
        <a
          key={match.index}
          href={matchedText}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          {matchedText}
        </a>
      );
    }

    lastIndex = match.index + matchedText.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
};

const AboutUs: React.FC = () => {
  const language = useSelector((state: RootState) => state.language.value);
  const icons = [FaLock, FaUserShield, FaDatabase, MdPrivacyTip, HiOutlineUserGroup, HiOutlineLink, HiOutlineRefresh, HiOutlineMail];

  const colorMap: Record<string, string> = {
    gray: "text-gray-500",
    blue: "text-blue-500",
    indigo: "text-indigo-500",
    green: "text-green-500",
    yellow: "text-yellow-500",
    red: "text-red-500",
    purple: "text-purple-500",
    pink: "text-pink-500",
    teal: "text-teal-500"
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-800">

        <Navbar />

        {/* Hero Section */}
       {/* Hero Section for About Us */}
<HeroSection
  icons={icons} // আপনি চাইলে About page এর জন্য আলাদা icons রাখতে পারেন
  title={language === 'en' ? "About Us" : "আমাদের সম্পর্কে"}
  description={language === 'en'
    ? "Welcome to GotiPay, your trusted partner in seamless and secure digital payments. Learn about our vision, mission, and how we empower Bangladeshis digitally."
    : "GotiPay তে আপনাকে স্বাগতম, আপনার নির্ভরযোগ্য ডিজিটাল পেমেন্ট পার্টনার। আমাদের ভিশন, মিশন এবং কিভাবে আমরা বাংলাদেশীদের ডিজিটালি ক্ষমতায়ন করি তা জানুন।"}
/>


        {/* Privacy Content Section */}
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-10">
          {aboutusData.map((section, idx) => {
            const Icon = Icons[section.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
            return (
              <div key={idx} className="mb-10">
                <div className="flex items-center gap-3 mb-3">
                  <Icon className={clsx(colorMap[section.color] || 'text-gray-500', 'text-xl')} />
                  <h2 className="text-sm md:text-md font-bold">{section.title[language]}</h2>
                </div>
                <div className="space-y-2 text-gray-700 text-[12px] md:text-[14px]">
                  {section.content[language].map((p, i) => {
                    const bulletMatch = p.match(/^•\s*(.*)$/);
                    if (bulletMatch) {
                      return (
                        <p key={i} className="ml-4">
                          <span className="font-bold">• </span>
                          {renderContent(bulletMatch[1])}
                        </p>
                      );
                    }
                    return <p key={i}>{renderContent(p)}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </section>
      </div>

      <Footer />
      <ScrollTop />
    </>
  );
};

export default AboutUs;
