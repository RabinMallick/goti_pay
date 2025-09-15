'use client'

import React, { FC } from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import { div } from 'framer-motion/client';

interface IndustryCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    imgSrc: string;
}

const industries: IndustryCardProps[] = [
    {
        title: "E-commerce",
        description: "Offer flexible payment choices for deliveries, advance deposits, and unfinished purchases.",
        icon: <span className="text-white text-2xl">🛒</span>,
        imgSrc: "/images/ecommerce.webp",
    },
    {
        title: "In-Store",
        description: "Automatic Link Sharing, Partial Payments, Reminder Setting",
        icon: <span className="text-white text-2xl">🏪</span>,
        imgSrc: "/images/instore.jpeg",
    },
    {
        title: "Freelancing",
        description: "Simplify payments for projects, retainers, and ongoing work.",
        icon: <span className="text-white text-2xl">🎧</span>,
        imgSrc: "/images/freelancing.jpg",
    },
    {
        title: "Hospitality",
        description: "Enable quick and easy payments for bookings, events, and on-site services.",
        icon: <span className="text-white text-2xl">🏨</span>,
        imgSrc: "/images/hospitality.jpg",
    },
    {
        title: "Education",
        description: "Offer a seamless way to collect payments for tuition, fundraisers, and activities.",
        icon: <span className="text-white text-2xl">🎓</span>,
        imgSrc: "/images/education.jpg",
    },
    {
        title: "Healthcare",
        description: "Enable patients to book consultations, settle bills, and pay instantly at clinics.",
        icon: <span className="text-white text-2xl">🏥</span>,
        imgSrc: "/images/healthcare.jpg",
    },
];

const SimplifyingPayments: FC = () => {
    return (
       <div className="py-16 ">
         <div className="max-w-7xl mx-auto  ">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                Simplifying payments for every <span className="text-blue-600">industry</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((industry, idx) => (<motion.div
                    className="relative w-full h-64 rounded-xl shadow-xl cursor-pointer perspective"
                    whileHover={{ rotateY: 15, rotateX: 5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    key={idx}
                >
                    {/* Front */}
                    <div className="absolute inset-0 w-full h-full rounded-xl overflow-hidden backface-hidden">
                        <Image
                            src={industry.imgSrc}
                            alt={industry.title}
                            width={400}
                            height={300}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                            <div className="flex items-center space-x-3 mb-2">
                                {industry.icon}
                                <h3 className="text-md font-bold text-white">{industry.title}</h3>
                            </div>
                            <p className="text-xs text-[#d1c5c5]">{industry.description}</p>
                        </div>
                    </div>
                </motion.div>))}
            </div>
        </div>
       </div>
    )
}

export default SimplifyingPayments