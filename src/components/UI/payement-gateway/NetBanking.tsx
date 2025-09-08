'use client';

import Image from 'next/image';
import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { CiCircleCheck } from 'react-icons/ci';
import MerchantNoticeCard from '@/components/common/card/MerchantNoticeCard';
import ProceedingCard from '@/components/common/card/ProceedingCard';

const logos = [
    '/bkash.svg',
    '/rocket.svg',
    '/upay.svg',
    '/stpay.svg',
    '/pathao.svg',
    '/mcash.svg',
    '/cellfin.svg',
    '/pocket.svg',
    '/nagad.svg',
];

const NetBanking: FC = () => {
    const [selected, setSelected] = useState<number | null>(null);

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
                    {logos.map((logo, index: number) => (
                        <div
                            key={index}
                            onClick={() => setSelected(index)}
                            className={`flex justify-center items-center h-16 relative rounded-md cursor-pointer
      ${selected === index
                                    ? 'border-[var(--primary)] ring-1 ring-[var(--primary)]'
                                    : ''
                                }`}
                        >
                            <div className=" w-full h-full relative">
                                <Image
                                    src={logo}
                                    alt={`logo-${index}`}
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                            {selected === index && (
                                <div className="absolute right-1 top-1 text-sm text-green-800">
                                    <CiCircleCheck />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

               <ProceedingCard/>


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
