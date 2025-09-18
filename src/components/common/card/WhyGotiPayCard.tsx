import { motion } from 'framer-motion';
import React from 'react';

interface WhyGotiPayCardProps {
  feature: {
    icon: React.ReactNode;
    title: string;
    desc: string;
  };
  i: number;
  rotateIn: any;
}

const WhyGotiPayCard: React.FC<WhyGotiPayCardProps> = ({
  feature,
  i,
  rotateIn,
}) => {
  return (
    <motion.div
      key={feature.title}
      variants={rotateIn}
      custom={i}
      whileHover={{
        scale: 1.04,
        rotateX: 3,
        rotateY: -3,
        y: -6,
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      className="relative group flex items-center gap-6 p-3 md:p-4 rounded-lg cursor-pointer
     bg-white/70 dark:bg-gray-900/50 backdrop-blur-xl
     border border-gray-200/60 dark:border-gray-700/60
     hover:shadow-xl transition-all duration-500 overflow-hidden"
    >
      {/* Soft Gradient Glow Border */}
      <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 blur-lg transition duration-500" />

      {/* Floating Particles (very subtle) */}
      <span className="absolute -top-5 -left-5 w-20 h-20 bg-pink-500/10 rounded-full blur-xl group-hover:scale-110 transition-transform duration-700" />
      <span className="absolute -bottom-6 right-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl group-hover:scale-110 transition-transform duration-700 delay-150" />

      {/* Icon */}
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.3 }}
        className="flex-shrink-0 h-10 md:w-16 w-10 md:h-16 flex items-center justify-center rounded-lg 
                   bg-gradient-to-br from-indigo-50 to-purple-50 
                   text-indigo-600 text-3xl 
                   group-hover:from-indigo-600 group-hover:to-purple-600 
                   group-hover:text-white 
                   transition-all duration-500 shadow relative z-20"
      >
        {feature.icon}
      </motion.div>

      {/* Text Section */}
      <div className="relative z-20 text-start">
        <h4 className="font-bold text-xs md:text-[15px] mb-2 text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 transition-colors duration-300">
          {feature.title}
        </h4>
        <p className="text-gray-600 text-[10px] md:text-xs leading-relaxed">
          {feature.desc}
        </p>
      </div>

      {/* Shine Effect (lighter & transparent) */}
      <span
        className="absolute -top-1/2 left-1/4 w-2/3 h-[200%] 
                       bg-gradient-to-t from-transparent via-white/10 to-transparent 
                       rotate-45 group-hover:translate-y-12 
                       transition-transform duration-700 ease-out z-10"
      />
    </motion.div>
  );
};

export default WhyGotiPayCard;
