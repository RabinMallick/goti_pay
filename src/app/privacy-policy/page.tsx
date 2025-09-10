// pages/privacy.tsx
'use client';
import React from "react";
import * as Icons from 'react-icons/hi';
import HeroSection from "@/components/Hero/HeroSection";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Navbar from "@/components/include/Navbar";
import ScrollTop from "@/components/Button/ScrollTop";
import Footer from "@/components/include/Footer";
import privacyData from '@/data/privacy.json';
import clsx from 'clsx';

/**
 * Function to render text content with:
 * - Highlighting "GotiPay Ltd."
 * - Converting emails into mailto links
 * - Converting URLs into clickable links
 */
const renderContent = (text: string) => {
  const highlightText = "GotiPay Ltd.";
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  // Step 1: Highlight "GotiPay Ltd."
  let parts: (string | React.ReactElement)[] = [];
  let lastIndex = 0;
  const highlightRegex = new RegExp(highlightText, "g");
  let match;
  while ((match = highlightRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    parts.push(
      <span key={match.index} className="bg-yellow-50 font-semibold px-1">
        {highlightText}
      </span>
    );
    lastIndex = match.index + highlightText.length;
  }
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  // Step 2: Convert emails and URLs to clickable links
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

const PrivacyPolicy: React.FC = () => {
  // Get current language from Redux store
  const language = useSelector((state: RootState) => state.language.value);

  // List of icons used in Hero section
  const icons = [
    Icons.HiOutlineDocumentText,
    Icons.HiOutlineCreditCard,
    Icons.HiOutlineUserGroup,
    Icons.HiOutlineLink,
    Icons.HiOutlineRefresh,
    Icons.HiOutlineMail,
    Icons.HiOutlineShieldCheck
  ];

  // Map color names from JSON to Tailwind classes
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

        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <HeroSection
          icons={icons}
          title={language === 'en' ? "Your Privacy, Our Commitment" : "আপনার গোপনীয়তা, আমাদের প্রতিশ্রুতি"}
          description={language === 'en'
            ? "Learn how we collect, use, and protect your personal information responsibly."
            : "কিভাবে আমরা আপনার ব্যক্তিগত তথ্য সংগ্রহ, ব্যবহার এবং সুরক্ষিত রাখি তা জানুন।"}
        />

        {/* Privacy Policy Content Section */}
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-10">
          {privacyData.map((section, idx) => {
            const Icon = Icons[section.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
            return (
              <div key={idx} className="mb-10">
                {/* Section Header with Icon */}
                <div className="flex items-center gap-3 mb-3">
                  <Icon className={clsx(colorMap[section.color] || 'text-gray-500', 'text-xl')} />
                  <h2 className="text-sm md:text-md font-bold">{section.title[language]}</h2>
                </div>

                {/* Section Content */}
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

      {/* Footer and Scroll-to-Top Button */}
      <Footer />
      <ScrollTop />
    </>
  );
};

export default PrivacyPolicy;
