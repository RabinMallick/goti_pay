'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Tooltip component
interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [show, setShow] = React.useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div className="absolute z-10 -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded shadow-lg whitespace-nowrap">
          {text}
          <div className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
        </div>
      )}
    </div>
  );
};

const plans = [
  {
    name: 'Goti Growth',
    color: 'text-stone-400',
    buttonColor: 'bg-stone-400 hover:bg-stone-400',
    debitCards: [
      { name: 'Visa', img: '/visa.svg' },
      { name: 'MasterCard', img: '/master.svg' },
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
    color: 'text-indigo-500',
    buttonColor: 'bg-indigo-500 hover:bg-indigo-600',
    debitCards: [
      { name: 'Visa', img: '/visa.svg' },
      { name: 'MasterCard', img: '/master.svg' },
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
    color: 'text-orange-500',
    buttonColor: 'bg-orange-500 hover:bg-orange-600',
    debitCards: [
      { name: 'Visa', img: '/visa.svg' },
      { name: 'MasterCard', img: '/master.svg' },
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

// Framer Motion Variants
const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2 } }),
};

const sectionVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const PaymentPlans: React.FC = () => {
  const renderIcons = (cards: { name: string; img: string }[]) => (
    <div className="flex flex-wrap gap-2 ">
      {cards.map((card) => (
        <Tooltip key={card.name} text={card.name}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-10 h-6 relative cursor-pointer bg-gray-50 border border-gray-50"
          >
            <Image src={card.img} alt={card.name} fill className="object-contain" />
          </motion.div>
        </Tooltip>
      ))}
    </div>
  );

  return (
    <div className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold"
        >
          Sell Domestic and Worldwide Without a Hassle
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 mt-2 text-lg"
        >
          Compare Plans and Choose the Best Payment Solution for You
        </motion.p>
      </div>

      <div className="max-w-6xl mx-2 sm:md-4 lg:mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-2 ">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariant}
            className="flex flex-col justify-between border border-gray-200 rounded-xl bg-white shadow-lg p-6 hover:shadow-2xl transition"
          >
            <h3 className={`text-2xl font-bold mb-6 ${plan.color}`}>{plan.name}</h3>

            <motion.div
              variants={sectionVariant}
              className="mb-6 "
            >
              <div>
                <h4 className="font-normal mb-2 text-sm md:text-[0.85rem] text-gray-600">Debit & Credit Cards</h4>
              </div>

              <div className="grid grid-cols-12 items-center">
                <div className="flex col-span-7 space-x-2">
                  {renderIcons(plan.debitCards)}
                </div>
                <div className="col-span-5 border-l border-gray-300 pl-2">
                  <div className='text-left text-[10px] text-gray-500'>
                    <p> {plan.debitRate}</p>
                    <p>per transaction</p>
                  </div>
                  <div className='text-left text-[10px] text-gray-500'>
                    <p> {plan.debitRateAmex}</p>
                    <p>per transaction for Amex</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
              className="mb-6"
            >
              <div>
                <h4 className="font-normal mb-2 text-sm md:text-[0.85rem] text-gray-600">Mobile Banking</h4>

              </div>


              <div className="grid grid-cols-12 items-center">
                <div className="flex col-span-7 space-x-2">
                  {renderIcons(plan.mobileBanking)}
                </div>
                <div className="col-span-5 border-l border-gray-300 pl-2">
                  <div className='text-left text-[10px] text-gray-500'>
                    <p> {plan.mobileRate}</p>
                    <p>per transaction</p>
                  </div>
                  <div className='text-left text-[10px] text-gray-500'>
                    <p> {plan.debitRateAmex}</p>
                    <p>per transaction for Amex</p>
                  </div>
                </div>
              </div>

            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="mb-6  "
            >
              <div>
                <h4 className="font-normal mb-2 text-sm md:text-[0.85rem] text-gray-600">Net Banking</h4> 
              </div>

                <div className="grid grid-cols-12 items-center">
                <div className="flex col-span-7 space-x-2">
                  {renderIcons(plan.netBanking)}
                </div>
                <div className="col-span-5 border-l border-gray-300 pl-2">
                  <div className='text-left text-[10px] text-gray-500'>
                    <p> {plan.netRate}</p>
                    <p>per transaction</p>
                  </div>
                  <div className='text-left text-[10px] text-gray-500'>
                    <p> {plan.debitRateAmex}</p>
                    <p>per transaction for Amex</p>
                  </div>
                </div>
              </div>


               
            </motion.div>

            <div className="flex justify-center">  <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${plan.buttonColor} text-[14px] text-white py-2 rounded-lg font-medium transition w-[150px] cursor-pointer`}
            >
              Contact Sales
            </motion.button></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PaymentPlans;
