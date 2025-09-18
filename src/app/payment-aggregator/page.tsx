// app/payment-aggregator/page.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FiCreditCard,
    FiSmartphone,
    FiShield,
    FiCheckCircle,
    FiChevronDown,
} from 'react-icons/fi';
import Tooltip from '@/components/Tooltip/Tooltip';
import Image from 'next/image';
import Slider from 'react-slick';
import { imagePath } from '@/utils/baseurl';

const features = [
    { icon: <FiCreditCard />, title: 'Multiple Payment Methods', description: 'Accept cards, UPI, wallets & net banking seamlessly.' },
    { icon: <FiSmartphone />, title: 'Mobile Friendly', description: 'Smooth experience across mobile & tablets.' },
    { icon: <FiShield />, title: 'Secure Transactions', description: 'End-to-end encryption keeps payments safe.' },
    { icon: <FiCheckCircle />, title: 'Reliable Service', description: 'High uptime & dependable support.' },
];

const supportedGateways = [
    { merchant: 'bKash', img: `${imagePath}svg/bkash.svg` },
    { merchant: 'Nagad', img: `${imagePath}svg/nagad.svg` },
    { merchant: 'Rocket', img: `${imagePath}svg/rocket.svg` },
    { merchant: 'Upay', img: `${imagePath}svg/upay.svg` },
    { merchant: 'ST Pay', img: `${imagePath}svg/stpay.svg` },
    { merchant: 'Pathao', img: `${imagePath}svg/pathao.svg` },
    { merchant: 'Mcash', img: `${imagePath}svg/mcash.svg` },
    { merchant: 'Cellfin', img: `${imagePath}svg/cellfin.svg` },
    { merchant: 'Pocket', img: `${imagePath}svg/pocket.svg` },
    { merchant: 'Visa', img: `${imagePath}svg/visa.svg` },
    { merchant: 'MasterCard', img: `${imagePath}svg/master.svg` },
    { merchant: 'UnionPay', img: `${imagePath}svg/unionpay.svg` },
    { merchant: 'Amex', img: `${imagePath}svg/amex.svg` },
];

const benefits = [
    { title: 'Increase Conversions', icon: <FiCheckCircle /> },
    { title: 'All-in-One Dashboard', icon: <FiSmartphone /> },
    { title: '24/7 Support', icon: <FiShield /> },
    { title: 'Fast Payouts', icon: <FiCreditCard /> },
];

const steps = [
    { icon: <FiCreditCard />, title: 'Sign Up', description: 'Create your account in minutes.' },
    { icon: <FiSmartphone />, title: 'Integrate API', description: 'Easily connect with our unified API.' },
    { icon: <FiShield />, title: 'Accept Payments', description: 'Start receiving payments instantly.' },
];

const testimonials = [
    { name: 'Uzzal Hossain', role: 'CEO, FinTech Co.', quote: 'Integration was seamless & support top-notch!' },
    { name: 'Zahidul Akram', role: 'CTO, E-commerce', quote: 'We consolidated all gateways with ease.' },
    { name: 'Rumana Akter', role: 'Product Manager', quote: 'The team was professional and responsive.' },
    { name: 'Sajib Khan', role: 'Developer', quote: 'Integration saved us days of work!' },
];;

const faqs = [
    { question: 'How do I integrate multiple gateways?', answer: 'Use a single API endpoint for all gateways. No multiple integrations required.' },
    { question: 'Is it secure for mobile apps?', answer: 'Yes, all transactions are PCI-DSS compliant & encrypted.' },
    { question: 'How fast is settlement?', answer: 'Settlements are processed daily or instantly based on your gateway.' },
];

const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 768, // Mobile
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};


const PaymentAggregator: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <>

            {/* Hero */}
            <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="px-4 max-w-2xl mx-auto"
                >
                    <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-3">
                        Payment Aggregator Solutions
                    </h1>
                    <p className="text-xs sm:text-sm mb-5">
                        Simplify online payments with a single integration. Fast, secure & reliable.
                    </p>
                    <button className="bg-white text-indigo-600 px-6 py-2 rounded-full shadow hover:scale-105 transition text-xs sm:text-sm">
                        Get Started
                    </button>
                </motion.div>
            </section>


            {/* Features Section with Glass Effect */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center mb-10">Why Choose Us</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            className="relative bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 overflow-hidden"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                        >
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-indigo-100/20 rounded-full pointer-events-none"></div>
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xl mb-3">
                                {feature.icon}
                            </div>
                            <h3 className="font-semibold text-sm">{feature.title}</h3>
                            <p className="text-gray-600 text-xs mt-1">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>


            {/* Supported Gateways */}
            <section className="py-12 px-4 bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center mb-12">
                        Supported Gateways
                    </h2>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center">
                        {supportedGateways.map((g, idx) => (
                            <Tooltip key={idx} text={g.merchant}>
                                <div className="w-24 h-12 sm:w-28 sm:h-14 bg-white rounded shadow flex items-center justify-center p-2 hover:scale-105 transition-transform duration-200">
                                    <Image
                                        src={g.img}
                                        alt={g.merchant}
                                        width={112}   // proportional to container
                                        height={56}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                            </Tooltip>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 px-6 max-w-6xl mx-auto text-center">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-12">Benefits for Your Business</h2>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                    {benefits.map((b, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl p-5 shadow flex flex-col items-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <div className="text-2xl mb-2">{b.icon}</div>
                            <h3 className="font-semibold text-xs sm:text-sm">{b.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Steps */}
            <section className="py-16 px-4 max-w-7xl mx-auto text-center">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-12">
                    How It Works
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((s, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-md p-6 border border-gray-200 transform hover:-translate-y-2 transition-all duration-300 text-center"
                        >
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-indigo-50 rounded-full text-indigo-600 text-2xl md:text-3xl">
                                {s.icon}
                            </div>
                            <h3 className="font-semibold text-sm md:text-base lg:text-lg mb-2">
                                {s.title}
                            </h3>
                            <p className="text-xs md:text-sm text-gray-600">{s.description}</p>
                        </div>
                    ))}
                </div>
            </section>


            <section className="py-14 bg-indigo-50 px-4 text-center">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-12">
                    What Our Clients Say
                </h2>
                <div className="max-w-6xl mx-auto">
                    <Slider {...settings}>
                        {testimonials.map((t, idx) => (
                            <div key={idx} className="p-2 sm:p-4">
                                <div className="bg-white p-6 sm:p-8 rounded-lg shadow text-xs sm:text-sm md:text-base">
                                    <p className="italic mb-2">“{t.quote}”</p>
                                    <h4 className="font-semibold">{t.name}</h4>
                                    <span className="text-gray-500 text-sm">{t.role}</span>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>



            {/* FAQ */}
            <section className="py-14 px-4 max-w-4xl mx-auto">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center mb-8">FAQs</h2>
                <div className="space-y-3">
                    {faqs.map((f, idx) => (
                        <div key={idx} className="bg-white rounded-lg shadow p-4">
                            <button
                                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                className="flex justify-between w-full text-left text-xs font-medium text-indigo-600"
                            >
                                {f.question}
                                <FiChevronDown
                                    className={`transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            {/* Smooth open/close */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96 mt-2' : 'max-h-0'
                                    }`}
                            >
                                <p className="text-xs text-gray-600">{f.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* CTA Footer */}
            <section className="py-16 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">Get Started Today</h2>
                <p className="text-xs sm:text-sm mb-6">Integrate multiple payment gateways with a single API.</p>
                <button className="bg-white text-indigo-600 px-6 py-2 rounded-full shadow hover:scale-105 transition text-xs sm:text-sm">
                    Contact Sales
                </button>
            </section>
        </>
    );
};

export default PaymentAggregator;
