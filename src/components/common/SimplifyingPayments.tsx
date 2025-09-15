'use client'

import React, { FC } from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';

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
    <div className="py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center mb-10">
          Simplifying payments for every <span className="text-blue-600">industry</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              className="group relative w-full h-64 rounded-2xl shadow-2xl cursor-pointer overflow-hidden backdrop-blur-md bg-white/10 border border-white/20"
              whileHover={{ rotateY: 12, rotateX: 6, scale: 1.07 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {/* Background image */}
              <Image
                src={industry.imgSrc}
                alt={industry.title}
                width={400}
                height={300}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Overlay glass effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 p-5">
                <div className="flex items-center space-x-3 mb-1">
                  <div className="">
                    {industry.icon}
                  </div>
                  <h3 className="text-md font-semibold text-white">{industry.title}</h3>
                </div>
                <p className="text-xs text-gray-200 leading-snug">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SimplifyingPayments
