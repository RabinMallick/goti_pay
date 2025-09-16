'use client';

import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';
import MerchantNoticeCard from '@/components/common/card/MerchantNoticeCard';
import ProceedingCard from '@/components/common/card/ProceedingCard';
import LogoCard from './LogoCard';

const logos: string[] = [
  '/brac.svg',
  '/ebl.svg',
  '/dbbl.svg',
  '/ific.svg',
];

const NetBanking: FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelected(index);
  };

  return (
    <form>
      <motion.div
        key="cardForm"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.25 }}
      >
        <p className="text-[12px] mb-1 text-gray-600">
          Select your desired Payment method
        </p>

        <div className="grid grid-cols-3 gap-3 mt-3">
          {logos.map((logo, index) => (
            <LogoCard
              key={index}
              logo={logo}
              selected={selected === index}
              onClick={() => handleSelect(index)}
            />
          ))}
        </div>

        <ProceedingCard />

        <MerchantNoticeCard />

        <motion.button
          type="submit"
          className="w-full bg-[var(--primary)] text-white py-1 text-base md:text-[13px] rounded-md transition my-3 mt-6 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
        >
          Pay 1,000.00 BDT
        </motion.button>
      </motion.div>
    </form>
  );
};

export default NetBanking;
