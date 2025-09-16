// pages/terms.tsx
'use client';
import React from 'react';
import termsData from '@/utils/json/terms.json';
import * as Icons from 'react-icons/hi';
import HeroSection from '@/components/Hero/HeroSection';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import Navbar from '@/components/include/Navbar';
import Footer from '@/components/include/Footer';

const TermsConditions: React.FC = () => {
  const language = useSelector((state: RootState) => state.language.value);

  const icons = [
    Icons.HiOutlineDocumentText,
    Icons.HiOutlineCreditCard,
    Icons.HiOutlineShieldCheck,
    Icons.HiOutlineLink,
    Icons.HiOutlineRefresh,
    Icons.HiOutlineMail,
    Icons.HiOutlineXCircle,
    Icons.HiOutlineShieldExclamation,
    Icons.HiOutlineExclamationCircle,
    Icons.HiOutlineInformationCircle,
    Icons.HiOutlineBan,
    Icons.HiOutlineGlobeAlt,
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

  const renderContent = (text: string) => {
    const highlightText = "GotiPay Ltd.";
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    let parts: (string | React.ReactElement)[] = [];
    let lastIndex = 0;

    // Highlight GotiPay Ltd.
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

    // Handle emails and URLs inside each part
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

  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Navbar />

        {/* Hero Section */}
        <HeroSection
          icons={icons}
          title={language === 'en' ? 'Terms & Conditions' : 'শর্তাবলী'}
          description={
            language === 'en'
              ? 'By using GOTIPAY services, you agree to comply with these Terms & Conditions. These terms govern your access and use of our payment gateway.'
              : 'GOTIPAY সেবা ব্যবহার করার মাধ্যমে আপনি এই শর্তাবলীর সাথে সম্মতি জানাচ্ছেন। এই শর্তাবলী আমাদের পেমেন্ট গেটওয়ে ব্যবহারের নিয়মাবলী নির্ধারণ করে।'
          }
        />

        {/* Terms Content Section */}
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-10">
          {termsData.map((section, idx) => {
            const Icon = Icons[section.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
            return (
              <div key={idx} className="mb-10">
                <div className="flex items-center gap-3 mb-3">
                  <Icon className={`${colorMap[section.color] || 'text-gray-500'} text-xl`} />
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

export default TermsConditions;
