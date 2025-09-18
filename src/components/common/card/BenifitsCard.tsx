import { motion } from 'framer-motion'
import React from 'react'

interface BenifitsCardProps {
    b: {
        icon: React.ReactNode;
        title: string;
        description: string;
    };
    idx: number;
}

const BenifitsCard: React.FC<BenifitsCardProps> = ({ b, idx }) => {
    
    return (
        <motion.div
            key={idx}
            className="relative bg-white  backdrop-blur-xl border border-gray-100 
                   rounded-lg p-6  hover:shadow-2xl transition-all duration-300
                   hover:-translate-y-3 group"
            variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 }
            }}
        >
            {/* Floating Icon */}
            <div className="w-12 h-12 flex items-center justify-center 
                        rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 
                        text-white text-3xl mb-6 shadow-md group-hover:scale-110 transition">
                {b.icon}
            </div>

            {/* Title */}
            <h3 className="font-bold text-md mb-3 text-gray-800 group-hover:text-indigo-600 transition">
                {b.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-xs leading-relaxed">
                {b.description}
            </p>

            {/* Decorative Icon in Background */}
            {/* <span className="absolute top-4 right-4 text-gray-300/20 text-xl rotate-12 pointer-events-none select-none">
          {b.icon}
        </span> */}
        </motion.div>
    )
}

export default BenifitsCard