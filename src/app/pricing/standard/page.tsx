'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Tooltip from '@/components/Tooltip/Tooltip';

interface BankCard {
  name: string;
  img: string;
}

interface Plan {
  name: string;
  color: string;
  buttonColor: string;
  debitCards: BankCard[];
  debitRate: string;
  debitRateAmex: string;
  mobileBanking: BankCard[];
  mobileRate: string;
  netBanking: BankCard[];
  netRate: string;
}


const plans: Plan[] = [
  {
    name: 'Goti Lite',
    color: 'bg-zinc-100 text-zinc-400',
    buttonColor: 'bg-zinc-400 hover:bg-zinc-400',
    debitCards: [
      { name: 'Visa Card', img: '/visa.svg' },
      { name: 'Master Card', img: '/master.svg' },
      { name: 'Amex', img: '/amex.svg' },
      { name: 'Union Pay', img: '/unionpay.svg' },
    ],
    debitRate: '2.49%',
    debitRateAmex: '3.49%',
    mobileBanking: [
      { name: 'bKash', img: '/bkash.svg' },
      { name: 'Nagad', img: '/nagad.svg' },
      { name: 'Rocket', img: '/rocket.svg' },
      { name: 'Upay', img: '/upay.svg' },
      { name: 'Cellfin', img: '/cellfin.svg' },
      { name: 'Pocket', img: '/pocket.svg' },
    ],
    mobileRate: '2.20%',
    netBanking: [
      { name: 'IFC Bank', img: '/ific.svg' },
      { name: 'BRAC Bank', img: '/brac.svg' },
      { name: 'Estern Bank Limited', img: '/ebl.svg' },
      { name: 'Dutch Bangla Bank', img: '/dbbl.svg' },
    ],
    netRate: '2.20%',
  },
  {
    name: 'Goti Premium',
    color: 'bg-violet-100 text-violet-500',
    buttonColor: 'bg-violet-500 hover:bg-violet-600',
    debitCards: [
      { name: 'Visa Card', img: '/visa.svg' },
      { name: 'Master Card', img: '/master.svg' },
      { name: 'Amex', img: '/amex.svg' },
      { name: 'Union Pay', img: '/unionpay.svg' },
    ],
    debitRate: '2.49%',
    debitRateAmex: '3.49%',
    mobileBanking: [
      { name: 'bKash', img: '/bkash.svg' },
      { name: 'Nagad', img: '/nagad.svg' },
      { name: 'Rocket', img: '/rocket.svg' },
      { name: 'Upay', img: '/upay.svg' },
      { name: 'Cellfin', img: '/cellfin.svg' },
      { name: 'Pocket', img: '/pocket.svg' },
    ],
    mobileRate: '2.00%',
    netBanking: [
      { name: 'IFC Bank', img: '/ific.svg' },
      { name: 'BRAC Bank', img: '/brac.svg' },
      { name: 'Dutch Bangla Bank', img: '/dbbl.svg' },
    ],
    netRate: '1.50%',
  },
  {
    name: 'Goti Enterprise',
    color: 'bg-orange-100 text-orange-500',
    buttonColor: 'bg-orange-500 hover:bg-orange-600',
    debitCards: [
      { name: 'Visa Card', img: '/visa.svg' },
      { name: 'Master Card', img: '/master.svg' },
      { name: 'Amex', img: '/amex.svg' },
      { name: 'Union Pay', img: '/unionpay.svg' },
    ],
    debitRate: '2.49%',
    debitRateAmex: '3.49%',
    mobileBanking: [
      { name: 'bKash', img: '/bkash.svg' },
      { name: 'Nagad', img: '/nagad.svg' },
      { name: 'Rocket', img: '/rocket.svg' },
      { name: 'Upay', img: '/upay.svg' },
      { name: 'Cellfin', img: '/cellfin.svg' },
      { name: 'Pocket', img: '/pocket.svg' },
    ],
    mobileRate: '2.00%',
    netBanking: [
      { name: 'IFC Bank', img: '/ific.svg' },
      { name: 'BRAC Bank', img: '/brac.svg' },
      { name: 'Dutch Bangla Bank', img: '/dbbl.svg' },
    ],
    netRate: '1.50%',
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2 } }),
};

const sectionVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const PaymentSection: React.FC<{
  title: string;
  items: BankCard[];
  rate: string;
  amexRate?: string;
}> = ({ title, items, rate, amexRate }) => (
  <motion.div variants={sectionVariant} className="mb-6">
    <h4 className="font-normal mb-2 text-xs md:text-[0.85rem] text-gray-600">{title}</h4>
    <div className="grid grid-cols-12 items-center">
      <div className="flex col-span-7 gap-1 flex-wrap ">{items.map(card => (
        <Tooltip key={card.name} text={card.name}  >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-10 h-6 relative cursor-pointer bg-gray-50 border border-gray-50"
          >
            <Image src={card.img} alt={card.name} fill className="object-contain" />
          </motion.div>
        </Tooltip>
      ))}</div>
      <div className="col-span-5 border-l border-gray-300 pl-2 text-left text-[10px] text-gray-500">
        {rate && <>
          <p>{rate || '0%'}</p>
          <p>per transaction</p>
        </>}

        {amexRate && (
          <>
            <p>{amexRate}</p>
            <p>per transaction for Amex</p>
          </>
        )}
      </div>
    </div>
  </motion.div>
);

const PaymentPlans: React.FC = () => (
  <div className="py-6 sm:py-16 bg-gray-50">
    <div className="text-center mb-12">
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-lg sm:text-3xl font-bold">
        Sell Domestic and Worldwide Without a Hassle
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }} className="text-gray-600 mt-2 text-xs sm:text-lg">
        Compare Plans and Choose the Best Payment Solution for You
      </motion.p>
    </div>

    <div className="max-w-6xl mx-2 sm:md-4 lg:mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-3">
      {plans.map((plan, i) => (
        <motion.div
          key={plan.name}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariant}
          className="flex flex-col justify-between border border-gray-200 rounded-md bg-white md:shadow-lg hover:shadow-2xl transition"
        >
          <h3 className={`p-2 px-3 rounded-t text-[20px] sm:text-2xl font-bold text-center ${plan.color}`}>{plan.name}</h3>

          <div className='p-4 py-2 sm:p-6 sm:py-4'>
            <PaymentSection title="Debit & Credit Cards" items={plan.debitCards} rate={plan.debitRate} amexRate={plan.debitRateAmex} />
            <PaymentSection title="Mobile Banking" items={plan.mobileBanking} rate={plan.mobileRate} amexRate={plan.debitRateAmex} />
            <PaymentSection title="Net Banking" items={plan.netBanking} rate={plan.netRate} amexRate={plan.debitRateAmex} />

            <div className="flex justify-center mb-4 sm:mb-0">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`${plan.buttonColor} text-[14px] text-white py-2 rounded-lg font-medium transition w-[150px] cursor-pointer`}>
                Contact Sales
              </motion.button>
            </div>

          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default PaymentPlans;
