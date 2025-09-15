'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PaymentCarousel from "@/components/Carousel/PaymentCarousel";
import SimplifyingPayments from "@/components/common/SimplifyingPayments";

const HeroSection: React.FC = () => {
    const logos = Array(8).fill("logo.svg");

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15, duration: 0.6 }
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="my-10">
            <div className="max-w-6xl mx-auto px-4">
                {/* Hero Section */}
                <motion.section
                    className="flex flex-col md:flex-row items-center justify-between gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div className="md:w-1/2" variants={itemVariants}>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Create a <span className="text-blue-600">payment link</span> & accept payments in seconds
                        </h1>
                        <p className="text-gray-700 mb-6">
                            Share Payment Links via SMS, email or WhatsApp and receive payments through 180+ methods.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Sign up →
                        </motion.button>
                    </motion.div>
                    <motion.div className="md:w-1/2 relative" variants={itemVariants}>
                        <Image
                            src="/avif/payment-linkd.avif"
                            alt="Payment illustration"
                            width={500}
                            height={400}
                            className="w-full rounded-xl shadow-lg"
                        />
                    </motion.div>
                </motion.section>

                {/* Carousel */}
                <div className="mt-12">
                    <PaymentCarousel logos={logos} />
                </div>

                <SimplifyingPayments
                    title="Industry Leading Payments"
                    description="Accept payments easily with our secure and fast payment solutions."
                    icon="/icons/payment.svg"
                    imgSrc="/images/payment-industry.jpg"
                />
            </div>
        </div>
    );
};

export default HeroSection;
