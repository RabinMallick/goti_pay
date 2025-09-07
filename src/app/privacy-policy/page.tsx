// pages/privacy.tsx
'use client';
import React from "react";
import Image from "next/image";
import { HiShieldCheck, HiOutlineUserGroup, HiOutlineDeviceTablet, HiOutlineLink, HiOutlineRefresh, HiOutlineMail } from "react-icons/hi";
import { MdPrivacyTip } from "react-icons/md";
import { FaLock, FaUserShield, FaDatabase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Footer from "@/components/Footer/Fotter";
import HeroSection from "@/components/Hero/HeroSection";
interface SectionProps {
    title: string;
    content: React.ReactNode;
    color?: string;
    icon: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, content, color = "blue", icon }) => {
    return (
        <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
                <span className={`text-1xl text-${color}-500`}>{icon}</span>
                <h2 className="text-1xl font-bold text-gray-900">{title}</h2>
            </div>
            <div className="text-gray-700 text-[14px]">{content}</div>
        </div>
    );
};

const PrivacyPolicy: React.FC = () => {

    const icons = [FaLock, FaUserShield, FaDatabase, MdPrivacyTip, HiOutlineUserGroup, HiOutlineLink, HiOutlineRefresh, HiOutlineMail];

    return (
        <>
            <div className="min-h-screen bg-gray-50 text-gray-800">
                {/* Hero Section */}
                <HeroSection icons={icons} title=" Your Privacy, Our Commitment" description=" Learn how we collect, use, and protect your personal information responsibly." />

                {/* Privacy Content Section */}
                <section className="max-w-5xl mx-auto px-6 py-16 space-y-10">
                    <Section
                        title="Introduction"
                        color="blue"
                        icon={<MdPrivacyTip />}
                        content={
                            <p>
                                GOTIPAY is committed to protecting your privacy. This policy explains how we collect, use, and store your information securely.
                            </p>
                        }
                    />

                    <Section
                        title="Information We Collect"
                        color="indigo"
                        icon={<HiOutlineUserGroup />}
                        content={
                            <>
                                <p>We may collect the following types of information:</p>
                                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                                    <li><strong>Personal Data:</strong> Name, email, phone, registration info.</li>
                                    <li><strong>Usage Data:</strong> Pages visited, time spent, clicks.</li>
                                    <li><strong>Device Information:</strong> IP address, browser type, OS.</li>
                                    <li><strong>Contacts & Permissions:</strong> Only accessed with your consent.</li>
                                </ul>
                            </>
                        }
                    />

                    <Section
                        title="Security"
                        color="green"
                        icon={<HiShieldCheck />}
                        content={
                            <p>
                                Your data is stored on secure servers with limited access. We use encryption and monitoring to prevent unauthorized access or disclosure.
                            </p>
                        }
                    />

                    <Section
                        title="Cookies & Tracking"
                        color="purple"
                        icon={<HiOutlineDeviceTablet />}
                        content={
                            <p>
                                Cookies help improve your experience and analyze traffic. They do not collect personal information.
                            </p>
                        }
                    />

                    <Section
                        title="Third-Party Links"
                        color="yellow"
                        icon={<HiOutlineLink />}
                        content={
                            <p>
                                Our site may include external links. GOTIPAY is not responsible for the privacy practices of these websites.
                            </p>
                        }
                    />

                    <Section
                        title="Updating Information"
                        color="pink"
                        icon={<HiOutlineRefresh />}
                        content={
                            <p>
                                You can update or delete your personal info by contacting <a href="mailto:support@gotipay.com" className="text-blue-600 underline">support@gotipay.com</a>.
                            </p>
                        }
                    />

                    <Section
                        title="Contact Us"
                        color="gray"
                        icon={<HiOutlineMail />}
                        content={
                            <p>
                                For questions, email <a href="mailto:support@gotipay.com" className="text-blue-600 underline">support@gotipay.com</a> or visit our office in Dhaka, Bangladesh.
                            </p>
                        }
                    />
                </section>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;
