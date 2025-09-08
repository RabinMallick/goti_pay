'use client';

import Image from 'next/image';
import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { CiCircleCheck } from 'react-icons/ci';

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

                <p className="text-[11px] mt-4 text-gray-500 p-2 rounded-md bg-gray-50 leading-4 border border-gray-200">
                    By proceeding with this payment, you agree to our{' '}
                    <span className="text-[var(--primary)] underline cursor-pointer">
                        Terms and Conditions
                    </span>
                    , which are limited to facilitating your payment to &quot;Company
                    Name&quot;.
                </p>

                <div className="text-[11px] mt-4 text-blue-800 rounded-md bg-gray-50 leading-4 border border-gray-200">
                    <div className="grid grid-cols-2 border-b border-gray-200">
                        <div className="px-2 py-1 border-r border-gray-200">Amount</div>
                        <div className="px-2 py-1 text-right">10000.00 BDT</div>
                    </div>
                    <div className="grid grid-cols-2 ">
                        <div className="px-2 py-1 border-r border-gray-200">
                            Gateway Charge
                        </div>
                        <div className="px-2 py-1 text-right">150.00 BDT</div>
                    </div>
                </div>
                <p className="text-[8px] text-red-500 mt-1">
                    Merchant choose Gateway Charge paid by Customer
                </p>

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
