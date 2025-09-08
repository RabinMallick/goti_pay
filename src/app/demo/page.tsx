'use client';

import Image from 'next/image';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DebitOrCredit from '@/components/UI/payement-gateway/DebitOrCredit';
import MoblieBanking from '@/components/UI/payement-gateway/MoblieBanking';
import NetBanking from '@/components/UI/payement-gateway/NetBanking';

import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { PaymentTab, setActiveTab } from '@/store/slice/paymentSlice';

const tabs = [
  { id: 'card', label: 'Card', icon: '/card.svg' },
  { id: 'mobile', label: 'Mobile Bank', icon: '/mfs.svg' },
  { id: 'net', label: 'Net Bank', icon: '/bank.svg' },
] as const;

const PaymentCardForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const activeTab = useSelector((state: RootState) => state.payment.activeTab);

  const handleTabClick = (tab: PaymentTab) => {
    dispatch(setActiveTab(tab));
  };

  return (
    <motion.div
      className="flex justify-center min-h-screen bg-gray-100 p-0 md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-white w-full sm:max-w-sm md:rounded-lg md:shadow-md overflow-hidden"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80 }}
      >
        {/* Header */}
        <div className="text-center p-4">
          <center>
            <Image src="/logo.svg" alt="logo" width={100} height={20} />
          </center>
          <p className="text-gray-600 text-xs mt-2 leading-4">
            GotiPay Limited <br />
            <small>4th Floor, 100/A Shukrabad, Dhanmondi, Dhaka-1216</small>
          </p>
        </div>

        {/* Tabs */}
        <div className="flex text-[11px] sm:text-[12px] md:text-[11px] mb-3 mx-4 gap-1 md:gap-2">
          {tabs.map((tab) => (
            <motion.label
              key={tab.id}
              whileTap={{ scale: 0.97 }}
              className={`flex-1 flex items-center justify-between border rounded-sm ps-2 pe-1 py-1 cursor-pointer relative transition-colors duration-300
                ${activeTab === tab.id ? 'text-black border-[var(--primary)]' : 'text-gray-400 border-gray-100'}`}
              onClick={() => handleTabClick(tab.id)}
            >
              <div className="flex items-center gap-1 w-full">
                <Image
                  src={tab.icon}
                  alt={tab.label}
                  width={40}
                  height={40}
                  className="w-4 h-4 object-contain"
                />
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

        {/* Tab Content */}
        <div className="border mx-4 p-2 px-3 md:px-4 rounded-lg border-gray-200 bg-white">
          <AnimatePresence mode="wait">
            {activeTab === 'card' && <DebitOrCredit />}
            {activeTab === 'mobile' && <MoblieBanking />}
            {activeTab === 'net' && <NetBanking />}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PaymentCardForm;
