// pages/about.tsx
'use client';
import React from "react";
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
  // Highlight "GotiPay Ltd. from Bangladesh"
  const highlightText = "GotiPay Ltd. from Bangladesh";
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  let parts: (string | React.ReactElement)[] = [];
  let lastIndex = 0;

  // Split for highlight
  const highlightRegex = new RegExp(highlightText, "g");
  let match;
  while ((match = highlightRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    parts.push(
      <span key={match.index} className="bg-yellow-200 font-semibold">
        {highlightText}
      </span>
    );
    lastIndex = match.index + highlightText.length;
  }
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  // Now handle emails/urls inside each part
  return parts.map((part, idx) => {
    if (typeof part === "string") {
      let subParts: (string | React.ReactElement)[] = [];
      let last = 0;
      const combinedRegex = new RegExp(`${emailRegex.source}|${urlRegex.source}`, 'g');
      let m;
      while ((m = combinedRegex.exec(part)) !== null) {
        if (m.index > last) subParts.push(part.substring(last, m.index));

        const matchedText = m[0];
        if (emailRegex.test(matchedText)) {
          subParts.push(
            <a key={idx + m.index} href={`mailto:${matchedText}`} className="text-blue-600 underline hover:text-blue-800">
              {matchedText}
            </a>
          );
        } else if (urlRegex.test(matchedText)) {
          subParts.push(
            <a key={idx + m.index} href={matchedText} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
              {matchedText}
            </a>
          );
        }
        last = m.index + matchedText.length;
      }
      if (last < part.length) subParts.push(part.substring(last));
      return <React.Fragment key={idx}>{subParts}</React.Fragment>;
    }
    return part;
  });
};

const AboutUs: React.FC = () => {
  const language = useSelector((state: RootState) => state.language.value);
  const icons = [Icons.HiOutlineUserGroup, Icons.HiOutlineLink, Icons.HiOutlineRefresh, Icons.HiOutlineLockClosed, Icons.HiOutlineLightBulb, Icons.HiOutlineGlobeAlt, Icons.HiOutlineHeart];

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
      <ScrollTop />
    </>
  );
};

export default AboutUs;
