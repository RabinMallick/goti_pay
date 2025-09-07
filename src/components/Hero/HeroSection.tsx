
'use client';
import { motion } from 'framer-motion'
import React from 'react'

interface HeroSectionProps {
    icons: React.ComponentType[];
    title: string;
    description: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ icons, title, description }) => {
    return (
        <>
            <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                {/* Animated Background Icons */}
                <div className="absolute inset-0 z-0">
                    {icons.map((Icon, index) => (
                        <motion.div
                            key={index}
                            className="absolute text-white text-4xl"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0.5, 1.3, 0.5],
                                rotate: [0, 360, 0],
                            }}
                            transition={{
                                duration: 5 + Math.random() * 3,
                                repeat: Infinity,
                                repeatType: 'loop',
                                ease: 'easeInOut',
                                delay: Math.random() * 2,
                            }}
                            whileHover={{ scale: 1.5, rotate: 45 }}
                        >
                            <Icon />
                        </motion.div>
                    ))}
                </div>

                {/* Hero Main Content with Staggered Animation */}
                <div className="relative z-10 max-w-6xl mx-auto px-3 py-6 md:flex md:items-center md:justify-between">
                    <motion.div
                        className="md:w-1/2 text-center md:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.h1
                            className="text-3xl md:text-3xl font-extrabold text-white mb-4 drop-shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 1 }}
                        >
                            {title}
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-md text-gray-200 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 1 }}
                        >
                            {description}
                        </motion.p>
                    </motion.div>
                </div>

                {/* Floating Blinking Circles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-3 h-3 bg-white rounded-full opacity-70"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                            animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                            transition={{
                                duration: 2 + Math.random() * 5,
                                repeat: Infinity,
                                repeatType: 'loop',
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default HeroSection