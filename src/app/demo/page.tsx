'use client';

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const tabs = [
  { id: 'card', label: 'Card', icon: '/card.svg' },
  { id: 'mobile', label: 'Mobile Bank', icon: '/mfs.svg' },
  { id: 'net', label: 'Net Bank', icon: '/bank.svg' },
] as const;

const PaymentCardForm: React.FC = () => {
  const expiryRef = useRef<HTMLInputElement>(null);
  const cvcRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const [activeTab, setActiveTab] = useState<'card' | 'mobile' | 'net'>('card');

  const formik = useFormik({
    initialValues: {
      cardNumber: '',
      expiry: '',
      cvc: '',
      name: '',
    },
    validationSchema: Yup.object({
      cardNumber: Yup.string()
        .required('Card number required')
        .matches(/^\d{4} \d{4} \d{4} \d{4}$/, 'Invalid card number'),
      expiry: Yup.string()
        .required('Expiry required')
        .matches(/^\d{2} \/ \d{2}$/, 'Invalid expiry date'),
      cvc: Yup.string()
        .required('CVC required')
        .test('len', 'Invalid CVC', function (value) {
          const cardNumber = this.parent.cardNumber.replace(/\s/g, '');
          const firstDigit = cardNumber[0];
          const cardType = firstDigit === '0' || firstDigit === '1' ? 'amex' : 'other';
          return cardType === 'amex' ? value?.length === 4 : value?.length === 3;
        }),
      name: Yup.string().required('Name required'),
    }),
    onSubmit: (values) => {
      alert(`Payment of 1,000.00 BDT processed for ${values.name}!`);
    },
  });

  // Detect card type based on first digit
  const getCardType = (number: string) => {
    if (!number) return '';
    const firstDigit = number.replace(/\s/g, '')[0];
    switch (firstDigit) {
      case '1':
        return 'amex';
      case '3':
        return 'unionpay';
      case '4':
        return 'visa';
      case '5':
        return 'master';
      default:
        return '';
    }
  };

  const cardType = getCardType(formik.values.cardNumber);

  const handleCardInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '').slice(0, 16);
    const formatted = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    formik.setFieldValue('cardNumber', formatted);

    if (value.length === 16 && expiryRef.current) {
      expiryRef.current.focus();
    }
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (value.length > 2) value = `${value.slice(0, 2)} / ${value.slice(2)}`;
    formik.setFieldValue('expiry', value);

    if (value.length === 7 && cvcRef.current) {
      cvcRef.current.focus();
    }
  };

  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = cardType === 'amex' ? e.target.value.replace(/\D/g, '').slice(0, 4) : e.target.value.replace(/\D/g, '').slice(0, 3);
    formik.setFieldValue('cvc', value);

    if ((cardType === 'amex' ? value.length === 4 : value.length === 3) && nameRef.current) {
      nameRef.current.focus();
    }
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-100 p-0 md:p-6">
      <div className="bg-white w-full sm:max-w-sm md:rounded-lg md:shadow-md overflow-hidden">
        {/* Header */}
        <div className="text-center p-4">
          <center> <Image src="/logo.svg" alt="logo" width={100} height={20} /></center>
          <p className="text-gray-600 text-xs mt-2 leading-4">
            GotiPay Limited <br />
            <small>4th Floor, 100/A Shukrabad, Dhanmondi, Dhaka-1216</small>
          </p>
        </div>

        {/* Tabs */}
        <div className="flex text-[11px] sm:text-[12px] md:text-[11px] mb-3 mx-4 gap-1 md:gap-2">
          {tabs.map((tab) => (
            <label
              key={tab.id}
              className={`
                flex-1 flex items-center justify-between border rounded-sm ps-2 pe-1 py-1 cursor-pointer
                transition-colors duration-300 relative
                ${activeTab === tab.id ? 'text-black border-[var(--primary)]' : 'text-gray-400 border-gray-100'}
              `}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="flex items-center gap-1 w-full">
                <Image src={tab.icon} alt={tab.label} width={40} height={40} className="w-4 h-4 object-contain" />
                {tab.label}
                {activeTab === tab.id && (
                  <input
                    type="radio"
                    name="paymentTab"
                    checked
                    onChange={() => setActiveTab(tab.id)}
                    className="form-radio h-[9px] w-[9px] accent-[var(--primary)] transition-colors duration-300 absolute  top-[6.5px]  right-1"
                  />

                )}
              </div>
            </label>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={formik.handleSubmit}
          className="border mx-4 p-2 px-3 md:px-4 rounded-lg border-gray-200 bg-white"
        >
          {activeTab === 'card' && (
            <>
              <p className="text-[12px] mb-1 text-gray-600">Card Details</p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="XXXX XXXX XXXX XXXX"
                  value={formik.values.cardNumber}
                  onChange={handleCardInput}
                  className="w-full border-gray-200 border rounded-t-md px-3 p-2 bg-gray-50 text-gray-700 text-base sm:text-[13px] placeholder-gray-300 focus:outline-none"
                />
                {formik.touched.cardNumber && formik.errors.cardNumber && (
                  <p className="text-[8px] text-red-500 my-1">{formik.errors.cardNumber}</p>
                )}
                {/* Only show matched card type */}
                <div className="absolute top-3 right-2 flex gap-1">
                  {!formik.values.cardNumber && (
                    <>
                      {/* show all icons initially */}
                      <Image src="/visa.svg" alt="visa" width={25} height={12} />
                      <Image src="/master.svg" alt="master" width={25} height={12} />
                      <Image src="/unionpay.svg" alt="unionpay" width={25} height={12} />
                      <Image src="/amex.svg" alt="amex" width={25} height={12} />
                    </>
                  )}

                  {formik.values.cardNumber && cardType && (
                    <Image
                      src={
                        cardType === 'visa'
                          ? '/visa.svg'
                          : cardType === 'master'
                            ? '/master.svg'
                            : cardType === 'unionpay'
                              ? '/unionpay.svg'
                              : cardType === 'amex'
                                ? '/amex.svg'
                                : ''
                      }
                      alt={cardType}
                      width={25}
                      height={12}
                    />
                  )}
                </div>

              </div>

              <div className="grid grid-cols-2">
                <input
                  ref={expiryRef}
                  type="text"
                  placeholder="MM / YY"
                  value={formik.values.expiry}
                  onChange={handleExpiryChange}
                  className={`border border-gray-200 ${formik.touched.cardNumber && formik.errors.cardNumber ? '' : 'border-t-0'
                    } rounded-bl-md px-3 p-2 bg-gray-50 text-gray-700 text-base sm:text-[13px] placeholder-gray-300 focus:outline-none`}
                />

                <div className="relative">
                  <input
                    ref={cvcRef}
                    type="text"
                    placeholder="CVC / CVV"
                    value={formik.values.cvc}
                    onChange={handleCvcChange}
                    className={`border border-gray-200 ${formik.touched.cardNumber && formik.errors.cardNumber ? '' : 'border-t-0'
                      } border-l-0 rounded-br-md px-3 p-2 w-full bg-gray-50 text-gray-700 text-base sm:text-[13px] placeholder-gray-300 focus:outline-none`}
                  />
                  <Image
                    src={formik.touched.cvc && formik.errors.cvc ? '/cvverror.svg' : '/cvv.svg'}
                    alt="cvv"
                    width={25}
                    height={12}
                    className="absolute right-2 top-2"
                  />
                </div>

                {formik.touched.expiry && formik.errors.expiry && (
                  <p className="text-[8px] text-red-500 mt-1">{formik.errors.expiry}</p>
                )}
                {formik.touched.cvc && formik.errors.cvc && (
                  <p className="text-[8px] text-red-500 mt-1">{formik.errors.cvc}</p>
                )}
              </div>

              <div className="mt-2">
                <p className="text-[12px] mb-1 text-gray-600">Card Name</p>
                <input
                  ref={nameRef}
                  type="text"
                  placeholder="Name on Card"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  name="name"
                  className="w-full border border-gray-200 rounded-md px-3 p-2 bg-gray-50 text-gray-700 text-base sm:text-[13px] focus:outline-none"
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-[8px] text-red-500 mt-1">{formik.errors.name}</p>
                )}
              </div>

              <p className="text-[11px] mt-4 text-gray-500 p-2 rounded-md bg-gray-50 leading-4 border border-gray-200">
                By proceeding with this payment, you agree to our{' '}
                <span className="text-[var(--primary)] underline cursor-pointer">Terms and Conditions</span>, which are limited to facilitating your payment to &quot;Company Name&quot;.
              </p>

              <div className="text-[11px] mt-4 text-blue-800 rounded-md bg-gray-50 leading-4 border border-gray-200">
                <div className="grid grid-cols-2 border-b border-gray-200">
                  <div className="px-2 py-1 border-r border-gray-200">Amount</div>
                  <div className="px-2 py-1 text-right">10000.00 BDT</div>
                </div>
                <div className="grid grid-cols-2 ">
                  <div className="px-2 py-1 border-r border-gray-200">Gateway Charge</div>
                  <div className="px-2 py-1 text-right">150.00 BDT</div>
                </div>
              </div>
              <p className="text-[8px] text-red-500 mt-1">Merchant choose Gateway Charge paid by Customer</p>


            </>
          )}

          <button
            type="submit"
            className="w-full bg-[var(--primary)] text-white py-1 text-base md:text-[13px] rounded-md hover:bg-indigo-700 transition my-3 mt-6 cursor-pointer"
          >
            Pay 1,000.00 BDT
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentCardForm;
