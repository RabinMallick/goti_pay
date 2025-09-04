'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import {  fadeUp, staggerContainer, zoomIn } from '@/utils/VariantsFade'

// Dynamically import Earth for client-side only
const Earth = dynamic(() => import('./Earth'), {
  ssr: false,
  loading: () => <p>Loading 3D Earth...</p>,
})


// Type for stat items
interface StatItem {
  value: string
  text: string
  color: string
}

const stats: StatItem[] = [
  { value: '60+', text: 'countries where you can collect funds like a local', color: 'text-orange-500' },
  { value: '120+', text: 'countries to which you can make local transfers', color: 'text-pink-500' },
  { value: '$200B+', text: 'global payments processed annually', color: 'text-cyan-500' },
  { value: '180+', text: 'countries from which you can accept payments', color: 'text-teal-500' },
]

const EarthMain: React.FC = () => {
  return (
    <div className="bg-gradient-to-tr from-blue-500 via-indigo-700 to-purple-600 flex items-center py-4">
      <motion.main
        className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Left Text Section */}
        <motion.div className="md:w-1/2 space-y-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white"
            variants={fadeUp}
            custom={0}
          >
            Tap into the world’s local payments network
          </motion.h2>
          <motion.p
            className="text-white"
            variants={fadeUp}
            custom={0.1}
          >
            Airwallex’s proprietary local payments network offers you a faster, more
            cost-effective, and transparent alternative to legacy banking...
          </motion.p>

          <div className="grid grid-cols-2 gap-6 pt-6">
            {stats.map((item, index) => (
              <motion.div key={index} variants={fadeUp} custom={index + 1}>
                <h3 className={`text-2xl font-bold ${item.color}`}>{item.value}</h3>
                <p className="text-white text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Earth Section */}
        <motion.div
          className="md:w-1/2 flex justify-center mt-10 md:mt-0"
          variants={zoomIn}
        >
          <Earth />
        </motion.div>
      </motion.main>
    </div>
  )
}

export default EarthMain
