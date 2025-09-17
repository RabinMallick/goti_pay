// pages/terms.tsx
'use client';
import React from 'react';
import * as Icons from 'react-icons/hi';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import termsData from '@/utils/json/terms.json';
import Navbar from '@/components/include/Navbar';
import Footer from '@/components/include/Footer';
import { renderContent } from '@/utils/renderContent';
import HeroSection from '@/components/Hero/HeroSection';

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
