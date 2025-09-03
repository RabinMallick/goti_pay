import React, { FC } from 'react'

import { motion, Variants } from 'framer-motion';
import { fadeDown, fadeUp } from '@/utils/VariantsFade';



const Fotter: FC = () => {
    return (
        <>
            {/* Call to Action Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="py-12 sm:py-16 px-4 md:px-20 bg-[var(--primary)] text-white text-center"
            >
                <motion.h3
                    className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4"
                    variants={fadeDown}
                    custom={0}
                >
                    Ready to get started?
                </motion.h3>
                <motion.p
                    className="mb-4 sm:mb-6 text-gray-100 text-sm sm:text-base max-w-2xl mx-auto"
                    variants={fadeDown}
                    custom={1}
                >
                    Join thousands of businesses in Bangladesh already using GotiPay to
                    grow and scale online.
                </motion.p>
                <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                    className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-[var(--primary)] rounded-lg font-semibold hover:bg-gray-100 text-sm sm:text-base"
                    variants={fadeUp}
                    custom={2}
                >
                    Register Now ↗
                </motion.button>
            </motion.section>

        </>
    )
}

export default Fotter