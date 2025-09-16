'use client';

import React, { useState } from 'react';
import { FiFileText, FiLayers, FiSmartphone } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: 'Simple to integrate',
        answer:
            'SSLCOMMERZ is a cross-platform payment gateway that can be embedded using a few lines of JavaScript. No more week-long integration woes.',
    },
    {
        question: 'Responsive, works everywhere',
        answer:
            'Your payment gateway works seamlessly on all devices, ensuring smooth checkout experience for your users.',
    },
];

const PaymentIntegration: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // initially open first item

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index); // only one can be open
    };

    return (
        <section className="bg-white">
            {/* Header */}
            <div className="max-w-5xl mx-auto text-center px-6 py-8 md:py-16">
                <h2 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px]  font-bold mb-4">
                    Easy integration with videos <br /> to help guide you
                </h2>
                <p className="text-[11px] sm:text-[12px] md:text-[13px] text-gray-600 max-w-2xl mx-auto mb-10">
                    Integrating SSLCOMMERZ is as simple as clicking on checkout, with well-documented
                    SDKs, APIs, plugins, and a video tutorial available for all the major platforms and
                    languages.
                </p>

                {/* Icons */}
                <div className="grid grid-cols-3 gap-2 md:gap-6">
                    <div className="bg-gray-50 p-6 rounded border border-indigo-50 text-center">
                        <FiFileText className="text-3xl mx-auto mb-3 text-gray-400" />
                        <h3 className="text-[10px] md:text-sm">View Documentation</h3>
                    </div>
                    <div className="bg-gray-50 p-6 rounded border border-indigo-50 text-center">
                        <FiLayers className="text-3xl mx-auto mb-3 text-gray-400" />
                        <h3 className="text-[10px] md:text-sm">View Integrations</h3>
                    </div>
                    <div className="bg-gray-50 p-6 rounded border border-indigo-50 text-center">
                        <FiSmartphone className="text-3xl mx-auto mb-3 text-gray-400" />
                        <h3 className="text-[10px] md:text-sm">View Demo</h3>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-50 py-8 pb-10 md:py-16">
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-6 md:gap-12">
                    {/* Left */}
                    <div>
                        <span className="text-xs text-gray-500 uppercase">Easy Checkout</span>
                        <h3 className="text-[16px] sm:text-[22px] md:text-[24px]  font-semibold mt-2 mb-4">
                            Simple way to integrate payments on web and mobile.
                        </h3>
                        <p className="text-[11px] sm:text-[12px] md:text-[13px] text-gray-600">
                            Use Easy Checkout and leave the complexities of payment validations, error handling,
                            and retry processes to us.
                        </p>
                    </div>

                    {/* Right - FAQ */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b  border-gray-200">
                                <button
                                    onClick={() => toggle(index)}
                                    className="text-[13px] md:text-sm w-full   text-left py-2 flex justify-between items-center"
                                >
                                    {faq.question}

                                    <span>{openIndex === index ? '−' : '+'}</span>

                                </button>

                                <AnimatePresence initial={false}>
                                    {openIndex === index && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-gray-600 pb-3 text-[11px] md:text-xs ">{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PaymentIntegration;
