// pages/terms.tsx
'use client';
import React from "react";
import Footer from "@/components/Footer/Fotter";
import {
    HiOutlineLink,
    HiOutlineRefresh,
    HiOutlineMail,
    HiOutlineDocumentText,
    HiOutlineCreditCard,
    HiOutlineShieldCheck
} from "react-icons/hi";
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

const TermsConditions: React.FC = () => {

    // Updated icons
    const icons = [
        HiOutlineDocumentText,
        HiOutlineCreditCard,
        HiOutlineShieldCheck,
        HiOutlineLink,
        HiOutlineRefresh,
        HiOutlineMail
    ];

    return (
        <>
            <div className="min-h-screen bg-gray-50 text-gray-800">
                {/* Hero Section */}

                {/* Hero Section */}
                <HeroSection icons={icons} title="
                Terms & Conditions" description=" By using GOTIPAY services, you agree to comply with these Terms & Conditions. These terms govern your access and use of our payment gateway." />



                {/* Terms Content Section */}
                <section className="max-w-5xl mx-auto px-6 py-16 space-y-10">
                    <Section
                        title="Acceptance of Terms"
                        color="blue"
                        icon={<HiOutlineDocumentText />}
                        content={
                            <p>
                                By using GOTIPAY services, you agree to comply with these Terms & Conditions. These terms govern your access and use of our payment gateway.
                            </p>
                        }
                    />

                    <Section
                        title="User Responsibilities"
                        color="indigo"
                        icon={<HiOutlineShieldCheck />}
                        content={
                            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                                <li>Maintain the confidentiality of your account credentials.</li>
                                <li>Ensure accurate and lawful use of payment services.</li>
                                <li>Report any unauthorized transactions immediately.</li>
                                <li>Comply with all local and international payment regulations.</li>
                            </ul>
                        }
                    />

                    <Section
                        title="Payment Transactions"
                        color="green"
                        icon={<HiOutlineCreditCard />}
                        content={
                            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                                <li>All transactions are subject to verification and security checks.</li>
                                <li>GOTIPAY is not responsible for delays caused by banks or third-party processors.</li>
                                <li>Refunds and cancellations follow our internal policies and may require approval.</li>
                                <li>Users must not attempt fraudulent or unauthorized transactions.</li>
                            </ul>
                        }
                    />

                    <Section
                        title="Third-Party Services"
                        color="yellow"
                        icon={<HiOutlineLink />}
                        content={
                            <p>
                                GOTIPAY may integrate with third-party banks or service providers. We are not responsible for their terms or privacy practices.
                            </p>
                        }
                    />

                    <Section
                        title="Modifications to Terms"
                        color="pink"
                        icon={<HiOutlineRefresh />}
                        content={
                            <p>
                                GOTIPAY may update these terms at any time. Users will be notified of significant changes, and continued use of services indicates acceptance of updated terms.
                            </p>
                        }
                    />

                    <Section
                        title="Contact"
                        color="gray"
                        icon={<HiOutlineMail />}
                        content={
                            <p>
                                For questions regarding these terms, please email <a href="mailto:support@gotipay.com" className="text-blue-600 underline">support@gotipay.com</a>.
                            </p>
                        }
                    />
                </section>
            </div>
            <Footer />
        </>
    );
};

export default TermsConditions;
