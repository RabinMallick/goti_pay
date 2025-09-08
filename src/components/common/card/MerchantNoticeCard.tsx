import React, { FC } from 'react';

const MerchantNoticeCard: FC = () => {
  return (
    <>
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
    </>
  );
};

export default MerchantNoticeCard;
