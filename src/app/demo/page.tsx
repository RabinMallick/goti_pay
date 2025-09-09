'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import DebitOrCredit from '@/components/UI/payement-gateway/DebitOrCredit';
import MoblieBanking from '@/components/UI/payement-gateway/MoblieBanking';
import NetBanking from '@/components/UI/payement-gateway/NetBanking';
import { IoChevronBack } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { PaymentTab, setActiveTab } from '@/store/slice/paymentSlice';
import { useRouter } from 'next/navigation';

const tabs = [
  { id: 'card', label: 'Card', icon: '/card.svg', content: <DebitOrCredit /> },
  { id: 'mobile', label: 'Mobile Bank', icon: '/mfs.svg', content: <MoblieBanking /> },
  { id: 'net', label: 'Net Bank', icon: '/bank.svg', content: <NetBanking /> },
] as const;

const PaymentCardForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const activeTab = useSelector((state: RootState) => state.payment.activeTab);

  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [openIndex, setOpenIndex] = useState(0); // first accordion open by default

  // View mode: 'accordion' or 'tab'
  const view: string = 'accordion';

  // Timer
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Scroll to top on mount
  useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), []);

  const toggleAccordion = (index: number, tabId: PaymentTab) => {
    if (openIndex === index) return; // do nothing if clicked item is already open
    setOpenIndex(index);             // open the clicked item
    dispatch(setActiveTab(tabId));
  };

  const formatTime = (seconds: number) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <motion.div
      className="flex justify-center min-h-screen bg-gray-100 p-0 md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-white w-full sm:max-w-sm md:rounded-lg md:shadow-md overflow-hidden relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {/* Header */}
        <div className="text-center p-4 px-0 relative">
          <Image src="/logo.svg" alt="logo" width={100} height={20} className="mx-auto" />
          <p className="text-gray-600 text-xs mt-2 leading-4">
            GotiPay Limited <br />
            <small>4th Floor, 100/A Shukrabad, Dhanmondi, Dhaka-1216</small>
          </p>

          <motion.div
            className="absolute left-0 top-[10px] w-10 h-10 flex items-center justify-center cursor-pointer rounded-full"
            whileTap={{ scale: 0.85, rotate: -20 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => router.back()}
          >
            <IoChevronBack size={20} className='text-gray-700' />
          </motion.div>
        </div>

        {/* Countdown Timer */}
        <div className="flex bg-gray-200 justify-end px-4 mb-4 text-[12px] text-[var(--primary)]">
          {formatTime(timeLeft)}
        </div>

        {/* Accordion View */}
        {view === 'accordion' && (
          <div className="w-full max-w-md mx-auto mt-6 space-y-2 ">
            {tabs.map((tab, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={tab.id} className="overflow-hidden text-[11px] sm:text-[12px] md:text-[11px] mb-3 md:gap-2 mx-3">

                  <motion.button
                    whileTap={{ scale: 0.99 }}
                    className={`flex justify-between items-center w-full rounded-md px-4 border py-[10px] bg-gray-100 hover:bg-gray-200 focus:outline-none cursor-pointer ${isOpen ? 'text-black border-[var(--primary)]':'text-gray-400 border-gray-100'}`}
                    onClick={() => toggleAccordion(index, tab.id)}
                  >
                    <div className="flex items-center gap-2">
                      <Image src={tab.icon} alt={tab.label} width={40} height={40} className="w-4 h-4 object-contain" />
                      <span>{`${tab.label}${tab.label !== 'Card' ? 'ing' : ''}`}</span>
                    </div>
                    <FaRegCircleDot className={`w-3 h-3  transition-transform duration-300 ${isOpen ? 'text-[var(--primary)]' : 'text-gray-400'}`} />
                  </motion.button>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="border  p-2 px-3 md:px-4 rounded-lg border-gray-200 bg-white mt-3">
                      {tab.content}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab View */}
        {view === 'tab' && (
          <>
            <div className="flex text-[11px] sm:text-[12px] md:text-[11px] mb-3 mx-4 gap-1 md:gap-2">
              {tabs.map(tab => (
                <motion.label
                  key={tab.id}
                  whileTap={{ scale: 0.97 }}
                  className={`flex-1 flex items-center justify-between border rounded-sm ps-2 pe-1 py-1 cursor-pointer relative transition-colors duration-300
                    ${activeTab === tab.id ? 'text-black border-[var(--primary)]' : 'text-gray-400 border-gray-100'}`}
                  onClick={() => dispatch(setActiveTab(tab.id))}
                >
                  <div className="flex items-center gap-1 w-full">
                    <Image src={tab.icon} alt={tab.label} width={40} height={40} className="w-4 h-4 object-contain" />
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.input
                        type="radio"
                        name="paymentTab"
                        checked
                        readOnly
                        className="form-radio h-[9px] w-[9px] accent-[var(--primary)] absolute top-[6.5px] right-1"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                      />
                    )}
                  </div>
                </motion.label>
              ))}
            </div>
            <div className="border mx-4 p-2 px-3 md:px-4 rounded-lg border-gray-200 bg-white">
              {tabs.find(tab => tab.id === activeTab)?.content}
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default PaymentCardForm;
