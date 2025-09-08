// pages/terms.tsx
'use client';
import React, { useState } from 'react';
import Footer from '@/components/Footer/Fotter';
import {
  HiOutlineLink,
  HiOutlineRefresh,
  HiOutlineMail,
  HiOutlineDocumentText,
  HiOutlineCreditCard,
  HiOutlineShieldCheck,
} from 'react-icons/hi';
import HeroSection from '@/components/Hero/HeroSection';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import Navbar from '@/components/Navber/Navbar';

interface SectionProps {
  title: { en: string; bn: string };
  content: { en: React.ReactNode; bn: React.ReactNode };
  color?: string;
  icon: React.ReactNode;
  language: 'en' | 'bn';
}

const Section: React.FC<SectionProps> = ({
  title,
  content,
  color = 'blue',
  icon,
  language,
}) => {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-3">
        <span className={`text-1xl text-${color}-500`}>{icon}</span>
        <h2 className="text-1xl font-bold text-gray-900">
          {language === 'en' ? title.en : title.bn}
        </h2>
      </div>
      <div className="text-gray-700 text-[14px]">
        {language === 'en' ? content.en : content.bn}
      </div>
    </div>
  );
};

const TermsConditions: React.FC = () => {
  const language = useSelector((state: RootState) => state.language.value);

  const icons = [
    HiOutlineDocumentText,
    HiOutlineCreditCard,
    HiOutlineShieldCheck,
    HiOutlineLink,
    HiOutlineRefresh,
    HiOutlineMail,
  ];

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
          <Section
            title={{ en: 'Acceptance of Terms', bn: 'শর্তাবলীর গ্রহণ' }}
            color="blue"
            icon={<HiOutlineDocumentText />}
            content={{
              en: (
                <p>
                  By using GOTIPAY services, you agree to comply with these
                  Terms & Conditions. These terms govern your access and use of
                  our payment gateway.
                </p>
              ),
              bn: (
                <p>
                  GOTIPAY সেবা ব্যবহার করার মাধ্যমে আপনি এই শর্তাবলীর সাথে
                  সম্মতি জানাচ্ছেন। এই শর্তাবলী আমাদের পেমেন্ট গেটওয়ে ব্যবহারের
                  নিয়মাবলী নির্ধারণ করে।
                </p>
              ),
            }}
            language={language}
          />

          <Section
            title={{ en: 'User Responsibilities', bn: 'ব্যবহারকারীর দায়িত্ব' }}
            color="indigo"
            icon={<HiOutlineShieldCheck />}
            content={{
              en: (
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>
                    Maintain the confidentiality of your account credentials.
                  </li>
                  <li>Ensure accurate and lawful use of payment services.</li>
                  <li>Report any unauthorized transactions immediately.</li>
                  <li>
                    Comply with all local and international payment regulations.
                  </li>
                </ul>
              ),
              bn: (
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>আপনার অ্যাকাউন্টের তথ্য গোপন রাখুন।</li>
                  <li>পেমেন্ট সেবা সঠিক ও আইনসম্মতভাবে ব্যবহার করুন।</li>
                  <li>যে কোনো অননুমোদিত লেনদেন অবিলম্বে রিপোর্ট করুন।</li>
                  <li>সকল স্থানীয় ও আন্তর্জাতিক পেমেন্ট নিয়ম মেনে চলুন।</li>
                </ul>
              ),
            }}
            language={language}
          />

          <Section
            title={{ en: 'Payment Transactions', bn: 'পেমেন্ট লেনদেন' }}
            color="green"
            icon={<HiOutlineCreditCard />}
            content={{
              en: (
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>
                    All transactions are subject to verification and security
                    checks.
                  </li>
                  <li>
                    GOTIPAY is not responsible for delays caused by banks or
                    third-party processors.
                  </li>
                  <li>
                    Refunds and cancellations follow our internal policies and
                    may require approval.
                  </li>
                  <li>
                    Users must not attempt fraudulent or unauthorized
                    transactions.
                  </li>
                </ul>
              ),
              bn: (
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>সমস্ত লেনদেন যাচাই ও সুরক্ষা পরীক্ষার আওতায় পড়ে।</li>
                  <li>
                    ব্যাঙ্ক বা তৃতীয় পক্ষের কারণে বিলম্বের জন্য GOTIPAY দায়ী
                    নয়।
                  </li>
                  <li>
                    রিফান্ড ও বাতিলকরণ আমাদের অভ্যন্তরীণ নীতিমালা অনুযায়ী হয়
                    এবং অনুমোদন প্রয়োজন হতে পারে।
                  </li>
                  <li>
                    ব্যবহারকারীরা কোনো প্রতারণামূলক বা অননুমোদিত লেনদেন চেষ্টা
                    করতে পারবেন না।
                  </li>
                </ul>
              ),
            }}
            language={language}
          />

          <Section
            title={{ en: 'Third-Party Services', bn: 'তৃতীয় পক্ষের সেবা' }}
            color="yellow"
            icon={<HiOutlineLink />}
            content={{
              en: (
                <p>
                  GOTIPAY may integrate with third-party banks or service
                  providers. We are not responsible for their terms or privacy
                  practices.
                </p>
              ),
              bn: (
                <p>
                  GOTIPAY তৃতীয় পক্ষের ব্যাঙ্ক বা সেবা প্রদানকারীদের সাথে
                  ইন্টিগ্রেশন করতে পারে। তাদের শর্তাবলী বা গোপনীয়তা নীতির জন্য
                  আমরা দায়ী নয়।
                </p>
              ),
            }}
            language={language}
          />

          <Section
            title={{ en: 'Modifications to Terms', bn: 'শর্তাবলীর পরিবর্তন' }}
            color="pink"
            icon={<HiOutlineRefresh />}
            content={{
              en: (
                <p>
                  GOTIPAY may update these terms at any time. Users will be
                  notified of significant changes, and continued use of services
                  indicates acceptance of updated terms.
                </p>
              ),
              bn: (
                <p>
                  GOTIPAY যে কোনো সময় এই শর্তাবলী আপডেট করতে পারে। গুরুত্বপূর্ণ
                  পরিবর্তনের ক্ষেত্রে ব্যবহারকারীদের জানানো হবে, এবং সেবা
                  ব্যবহার অব্যাহত রাখলে এটি আপডেটকৃত শর্তাবলীর গ্রহণ বোঝায়।
                </p>
              ),
            }}
            language={language}
          />

          <Section
            title={{ en: 'Contact', bn: 'যোগাযোগ' }}
            color="gray"
            icon={<HiOutlineMail />}
            content={{
              en: (
                <p>
                  For questions regarding these terms, please email{' '}
                  <a
                    href="mailto:support@gotipay.com"
                    className="text-blue-600 underline"
                  >
                    support@gotipay.com
                  </a>
                  .
                </p>
              ),
              bn: (
                <p>
                  এই শর্তাবলী সম্পর্কিত প্রশ্নের জন্য, অনুগ্রহ করে ইমেইল করুন{' '}
                  <a
                    href="mailto:support@gotipay.com"
                    className="text-blue-600 underline"
                  >
                    support@gotipay.com
                  </a>
                  .
                </p>
              ),
            }}
            language={language}
          />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TermsConditions;
