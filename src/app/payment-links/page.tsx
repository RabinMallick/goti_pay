'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PaymentCarousel from "@/components/Carousel/PaymentCarousel";
import SimplifyingPayments from "@/components/UI/payments/SimplifyingPayments";
import PaymentLinkFeatures from "@/components/UI/payments/PaymentLinkFeatures";

const HeroSection: React.FC = () => {
    const logos = Array(8).fill("logo.svg");

    const textVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    return (
        <div className="relative overflow-hidden my-5">
            {/* Animated Background Circles */}
            <motion.div
                className="absolute top-20 left-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-full opacity-30 -translate-x-1/2 -z-10"
                animate={{ y: [0, 20, 0], rotate: [0, 25, 0] }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: ["easeInOut"],
                }}
            />

            <motion.div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-green-200 via-green-300 to-green-400 rounded-full opacity-25 -z-10" {...{ animate: { y: [0, 20, 0], rotate: [0, 25, 0], transition: { duration: 12, repeat: Infinity, ease: ["easeInOut"] } } }} />


            {/* Floating micro shapes */}
            <motion.div className="absolute top-20 left-1/4 w-10 h-10 bg-pink-300 rounded-full opacity-50 animate-pulse -z-10" />

            {/* Hero Content */}
            <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8 relative z-10">
                {/* Text */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={textVariant}
                    className="md:w-1/2 space-y-6"
                >
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight tracking-wide">
                        Create a <span className="text-blue-600">payment link</span> & accept payments <span className="text-purple-600">in seconds</span>
                    </h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="text-gray-700 text-xs md:text-md"
                    >
                        Share Payment Links via SMS, email, or WhatsApp and accept payments through 180+ methods.
                    </motion.p>
                    <motion.button
                        whileHover={{ scale: 0.99, boxShadow: "0 0 5px rgba(99, 102, 241, 0.7)" }}
                        whileTap={{ scale: 0.95 }}
                        className="text-xs sm:text-md lg:text-[18px] px-6 py-2 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white  cursor-pointer shadow-lg"
                    >
                        Sign up →
                    </motion.button>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1 }}
                    className="md:w-1/2 relative"
                >
                    <motion.div whileHover={{ y: -10 }} className="relative">
                        <Image
                            src="/avif/payment-linkd.avif"
                            alt="Payment link illustration"
                            width={500}
                            height={400}
                            className="w-full  "
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Carousel & Simplifying Payments */}
            
            <PaymentCarousel logos={logos} />
            <SimplifyingPayments />
            <PaymentLinkFeatures/>
            
        </div>
    );
};

export default HeroSection;
