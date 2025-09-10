// pages/privacy.tsx
'use client';
import React from "react"; 
import * as Icons from 'react-icons/hi';
import HeroSection from "@/components/Hero/HeroSection";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Navbar from "@/components/Navber/Navbar";
import ScrollTop from "@/components/Button/ScrollTop";
import Footer from "@/components/Footer/Footer";
import privacyData from '@/data/privacy.json';
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

const PrivacyPolicy: React.FC = () => {
  const language = useSelector((state: RootState) => state.language.value);
  const icons = [ Icons.HiOutlineDocumentText,Icons.HiOutlineCreditCard, Icons.HiOutlineUserGroup, Icons.HiOutlineLink, Icons.HiOutlineRefresh, Icons.HiOutlineMail, Icons.HiOutlineShieldCheck];

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
          title={language === 'en' ? "Your Privacy, Our Commitment" : "আপনার গোপনীয়তা, আমাদের প্রতিশ্রুতি"}
          description={language === 'en'
            ? "Learn how we collect, use, and protect your personal information responsibly."
            : "কিভাবে আমরা আপনার ব্যক্তিগত তথ্য সংগ্রহ, ব্যবহার এবং সুরক্ষিত রাখি তা জানুন।"}
        />

        {/* Privacy Content Section */}
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-10">
          {privacyData.map((section, idx) => {
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

export default PrivacyPolicy;
