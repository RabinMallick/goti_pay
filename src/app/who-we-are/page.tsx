// pages/about.tsx
'use client';
import clsx from 'clsx';
import React from "react";
import * as Icons from 'react-icons/hi';
import HeroSection from "@/components/Hero/HeroSection";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Navbar from "@/components/include/Navbar";
import Footer from "@/components/include/Footer";
import aboutusData from '@/utils/json/aboutus.json';
import { renderContent } from '@/utils/renderContent';

/**
 * Render content text with:
 * - Highlighted company name ("GotiPay Ltd.")
 * - Clickable emails
 * - Clickable URLs
 */

 
const AboutUs: React.FC = () => {
  const language = useSelector((state: RootState) => state.language.value);

  const icons = [
    Icons.HiOutlineUserGroup,
    Icons.HiOutlineLink,
    Icons.HiOutlineRefresh,
    Icons.HiOutlineLockClosed,
    Icons.HiOutlineLightBulb,
    Icons.HiOutlineGlobeAlt,
    Icons.HiOutlineHeart
  ];

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
        <HeroSection
          icons={icons}
          title={language === 'en' ? "About Us" : "আমাদের সম্পর্কে"}
          description={language === 'en'
            ? "Welcome to GotiPay, your trusted partner in seamless and secure digital payments. Learn about our vision, mission, and how we empower Bangladeshis digitally."
            : "GotiPay তে আপনাকে স্বাগতম, আপনার নির্ভরযোগ্য ডিজিটাল পেমেন্ট পার্টনার। আমাদের ভিশন, মিশন এবং কিভাবে আমরা বাংলাদেশীদের ডিজিটালি ক্ষমতায়ন করি তা জানুন।"}
        />

        {/* About Sections */}
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-10">
          {aboutusData.map((section, idx) => {
            const IconComponent = (Icons[section.icon as keyof typeof Icons] || Icons.HiOutlineUserGroup) as React.ComponentType<{ className?: string }>;
            return (
              <div key={idx} className="mb-10">
                <div className="flex items-center gap-3 mb-3">
                  <IconComponent className={clsx(colorMap[section.color] || 'text-gray-500', 'text-xl')} />
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
    </>
  );
};

export default AboutUs;
