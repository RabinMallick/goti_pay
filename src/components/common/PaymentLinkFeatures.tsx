'use client'

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, zoomIn } from "@/utils/VariantsFade";
import { FiEdit, FiBell, FiCreditCard, FiLink, FiBox, FiCpu } from "react-icons/fi";

const features = [
    {
        icon: <FiEdit className="w-8 h-8 text-[var(--primary)]" />,
        title: "Personalize",
        description: "Customise your payment page to match your brand, right from your dashboard."
    },
    {
        icon: <FiBox className="w-8 h-8 text-green-600" />,
        title: "Partial Payments",
        description: "Let customers pay in installments, upfront, or as an advance with ease."
    },
    {
        icon: <FiLink className="w-8 h-8 text-purple-600" />,
        title: "Bulk Link Creation",
        description: "Generate and share hundreds of payment links at once by uploading a .csv or .xlsx file."
    },
    {
        icon: <FiBell className="w-8 h-8 text-pink-600" />,
        title: "Real-time Tracking",
        description: "Get instant webhook notifications for every transaction."
    },
    {
        icon: <FiCreditCard className="w-8 h-8 text-indigo-600" />,
        title: "100+ Payment Methods",
        description: "Accept payments via cards, UPI, wallets, and more—never miss a sale."
    },
    {
        icon: <FiCpu className="w-8 h-8 text-orange-600" />,
        title: "Automation",
        description: "Seamlessly automate payment link creation and collection with powerful APIs."
    }
];



const PaymentLinkFeatures = () => {
    return (
        <motion.section className="py-10 md:py-20  " initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}>
            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Heading */}
                <motion.h2
                    variants={fadeUp}
                    custom={1}
                    className="text-lg md:text-4xl font-bold mb-4"
                >
                    Make <span className="text-[var(--primary)]">payments</span> easier than ever
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    custom={2}
                    className="text-gray-600 mb-8 max-w-2xl mx-auto text-xs md:text-sm"
                >
                    Collect payments instantly, automate workflows, and delight your customers
                    with the simplest payment link integration.
                </motion.p>


                {/* Features */}
                <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            variants={zoomIn}
                            custom={3}
                            className="p-6 rounded-lg backdrop-blur-md bg-white/40 border border-gray-100 md:border-white/20 md:shadow-md hover:shadow-xl hover:-translate-y-2 transition"
                        >
                            <div className="flex items-center justify-center text-xs md:text-md w-14 h-14 mx-auto mb-4 rounded-full bg-white shadow">
                                {feature.icon}
                            </div>
                            <h3 className="text-sm md:text-lg font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-xs md:text-sm">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default PaymentLinkFeatures;
