// pages/privacy.tsx
'use client';
import React from "react";
import { HiShieldCheck, HiOutlineUserGroup, HiOutlineDeviceTablet, HiOutlineLink, HiOutlineRefresh, HiOutlineMail } from "react-icons/hi";
import { MdPrivacyTip } from "react-icons/md";
import { FaLock, FaUserShield, FaDatabase } from 'react-icons/fa';
import HeroSection from "@/components/Hero/HeroSection";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Navbar from "@/components/Navber/Navbar";
import ScrollTop from "@/components/Button/ScrollTop";
import Footer from "@/components/Footer/Footer";

interface SectionProps {
  title: { en: string; bn: string };
  content: { en: React.ReactNode; bn: React.ReactNode };
  color?: string;
  icon: React.ReactNode;
  language: 'en' | 'bn';
}

const Section: React.FC<SectionProps> = ({ title, content, color = "blue", icon, language }) => (
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

const PrivacyPolicy: React.FC = () => {
  const language = useSelector((state: RootState) => state.language.value);
  const icons = [FaLock, FaUserShield, FaDatabase, MdPrivacyTip, HiOutlineUserGroup, HiOutlineLink, HiOutlineRefresh, HiOutlineMail];

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
          <Section
            title={{ en: "Introduction", bn: "পরিচিতি" }}
            color="blue"
            icon={<MdPrivacyTip />}
            content={{
              en: <p>GOTIPAY is committed to protecting your privacy. This policy explains how we collect, use, and store your information securely.</p>,
              bn: <p>GOTIPAY আপনার গোপনীয়তা রক্ষায় প্রতিশ্রুতিবদ্ধ। এই নীতি ব্যাখ্যা করে আমরা কীভাবে আপনার তথ্য সংগ্রহ, ব্যবহার এবং সুরক্ষিত রাখি।</p>
            }}
            language={language}
          />

          <Section
            title={{ en: "Information We Collect", bn: "আমরা যে তথ্য সংগ্রহ করি" }}
            color="indigo"
            icon={<HiOutlineUserGroup />}
            content={{
              en: (
                <>
                  <p>We may collect the following types of information:</p>
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                    <li><strong>Personal Data:</strong> Name, email, phone, registration info.</li>
                    <li><strong>Usage Data:</strong> Pages visited, time spent, clicks.</li>
                    <li><strong>Device Information:</strong> IP address, browser type, OS.</li>
                    <li><strong>Contacts & Permissions:</strong> Only accessed with your consent.</li>
                  </ul>
                </>
              ),
              bn: (
                <>
                  <p>আমরা নিম্নলিখিত তথ্য সংগ্রহ করতে পারি:</p>
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                    <li><strong>ব্যক্তিগত তথ্য:</strong> নাম, ইমেল, ফোন, রেজিস্ট্রেশন তথ্য।</li>
                    <li><strong>ব্যবহার ডেটা:</strong> ভিজিট করা পেজ, সময়, ক্লিক।</li>
                    <li><strong>ডিভাইস তথ্য:</strong> IP ঠিকানা, ব্রাউজার টাইপ, OS।</li>
                    <li><strong>কন্টাক্ট ও অনুমতি:</strong> শুধুমাত্র আপনার সম্মতিতে অ্যাক্সেস করা হয়।</li>
                  </ul>
                </>
              ),
            }}
            language={language}
          />

          <Section
            title={{ en: "Security", bn: "নিরাপত্তা" }}
            color="green"
            icon={<HiShieldCheck />}
            content={{
              en: <p>Your data is stored on secure servers with limited access. We use encryption and monitoring to prevent unauthorized access or disclosure.</p>,
              bn: <p>আপনার তথ্য সীমিত অ্যাক্সেস সহ নিরাপদ সার্ভারে সংরক্ষণ করা হয়। আমরা অ-অনুমোদিত অ্যাক্সেস বা প্রকাশ রোধ করার জন্য এনক্রিপশন এবং মনিটরিং ব্যবহার করি।</p>
            }}
            language={language}
          />

          <Section
            title={{ en: "Cookies & Tracking", bn: "কুকিজ এবং ট্র্যাকিং" }}
            color="purple"
            icon={<HiOutlineDeviceTablet />}
            content={{
              en: <p>Cookies help improve your experience and analyze traffic. They do not collect personal information.</p>,
              bn: <p>কুকিজ আপনার অভিজ্ঞতা উন্নত করতে এবং ট্রাফিক বিশ্লেষণ করতে সাহায্য করে। এগুলো ব্যক্তিগত তথ্য সংগ্রহ করে না।</p>
            }}
            language={language}
          />

          <Section
            title={{ en: "Third-Party Links", bn: "তৃতীয় পক্ষের লিঙ্ক" }}
            color="yellow"
            icon={<HiOutlineLink />}
            content={{
              en: <p>Our site may include external links. GOTIPAY is not responsible for the privacy practices of these websites.</p>,
              bn: <p>আমাদের সাইটে বাইরের লিঙ্ক থাকতে পারে। GOTIPAY এই ওয়েবসাইটগুলোর গোপনীয়তা নীতির জন্য দায়ী নয়।</p>
            }}
            language={language}
          />

          <Section
            title={{ en: "Updating Information", bn: "তথ্য হালনাগাদ" }}
            color="pink"
            icon={<HiOutlineRefresh />}
            content={{
              en: <p>You can update or delete your personal info by contacting <a href="mailto:support@gotipay.com" className="text-blue-600 underline">support@gotipay.com</a>.</p>,
              bn: <p>আপনি আপনার ব্যক্তিগত তথ্য হালনাগাদ বা মুছতে <a href="mailto:support@gotipay.com" className="text-blue-600 underline">support@gotipay.com</a> এ যোগাযোগ করতে পারেন।</p>
            }}
            language={language}
          />

          <Section
            title={{ en: "Contact Us", bn: "যোগাযোগ" }}
            color="gray"
            icon={<HiOutlineMail />}
            content={{
              en: <p>For questions, email <a href="mailto:support@gotipay.com" className="text-blue-600 underline">support@gotipay.com</a> or visit our office in Dhaka, Bangladesh.</p>,
              bn: <p>প্রশ্নের জন্য ইমেল করুন <a href="mailto:support@gotipay.com" className="text-blue-600 underline">support@gotipay.com</a> অথবা আমাদের অফিসে আসুন, ঢাকা, বাংলাদেশ।</p>
            }}
            language={language}
          />
        </section>
      </div>
      <Footer />

      <ScrollTop />
    </>
  );
};

export default PrivacyPolicy;
