'use client';

import * as Yup from 'yup';
import Image from 'next/image';
import { useFormik } from 'formik';
import React, { FC, useRef, ChangeEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MerchantNoticeCard from '@/components/common/card/MerchantNoticeCard';
import ProceedingCard from '@/components/common/card/ProceedingCard';

const DebitOrCredit: FC = () => {
    const expiryRef = useRef<HTMLInputElement>(null);
    const cvcRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);

    const formik = useFormik({
        initialValues: { cardNumber: '', expiry: '', cvc: '', name: '' },
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
                    const type = cardNumber[0] === '1' ? 'amex' : 'other';
                    return type === 'amex' ? value?.length === 4 : value?.length === 3;
                }),
            name: Yup.string().required('Name required'),
        }),
        onSubmit: (values) =>
            alert(`Payment of 1,000.00 BDT processed for ${values.name}!`),
    });

    const getCardType = (number: string) => {
        if (!number) return '';
        const firstDigit = number.replace(/\s/g, '')[0];
        return (
            { '1': 'amex', '3': 'unionpay', '4': 'visa', '5': 'master' }[firstDigit] || ''
        );
    };

    const cardType = getCardType(formik.values.cardNumber);

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement>,
        type: 'card' | 'expiry' | 'cvc'
    ) => {
        let value = e.target.value.replace(/\D/g, '');
        switch (type) {
            case 'card':
                value = value.slice(0, 16);
                formik.setFieldValue('cardNumber', value.replace(/(\d{4})(?=\d)/g, '$1 '));
                if (value.length === 16) expiryRef.current?.focus();
                break;

            case 'expiry':
                value = value.slice(0, 4);
                if (value.length > 2) value = `${value.slice(0, 2)} / ${value.slice(2)}`;
                formik.setFieldValue('expiry', value);
                if (value.length === 7) cvcRef.current?.focus();
                break;

            case 'cvc':
                const maxLen = cardType === 'amex' ? 4 : 3;
                value = value.slice(0, maxLen);
                formik.setFieldValue('cvc', value);
                if (value.length === maxLen) nameRef.current?.focus();
                break;
        }
    };

    const renderCardIcons = () => {
        const icons = ['visa', 'master', 'unionpay', 'amex'];
        return (
            <div className="absolute top-3 right-2 flex gap-1">
                <AnimatePresence>
                    {!formik.values.cardNumber && (
                        <motion.div
                            className="flex gap-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {icons.map((icon) => (
                                <Image key={icon} src={`/${icon}.svg`} alt={icon} width={25} height={12} />
                            ))}
                        </motion.div>
                    )}

                    {formik.values.cardNumber && cardType && (
                        <motion.div key={cardType} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <Image src={`/${cardType}.svg`} alt={cardType} width={25} height={12} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    };

    const renderError = (field: keyof typeof formik.values) => (
        <AnimatePresence>
            {formik.touched[field] && formik.errors[field] && (
                <motion.p className="text-[8px] text-red-500 mt-1" initial={{ opacity: 0, y: -3 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -3 }}>
                    {formik.errors[field]}
                </motion.p>
            )}
        </AnimatePresence>
    );

    return (
        <form onSubmit={formik.handleSubmit}>
            <motion.div key="cardForm" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.25 }}>
                <p className="text-[12px] mb-1 text-gray-600">Card Details</p>

                <div className="relative">
                    <input
                        type="text"
                        placeholder="XXXX XXXX XXXX XXXX"
                        value={formik.values.cardNumber}
                        onChange={(e) => handleInputChange(e, 'card')}
                        className="w-full border-gray-200 border rounded-t-md px-3 p-2 bg-gray-50 text-gray-700 text-base sm:text-[13px] placeholder-gray-300 focus:outline-none"
                    />
                    {renderCardIcons()}
                    {renderError('cardNumber')}
                </div>

                <div className="grid grid-cols-2">
                    <input
                        ref={expiryRef}
                        type="text"
                        placeholder="MM / YY"
                        value={formik.values.expiry}
                        onChange={(e) => handleInputChange(e, 'expiry')}
                        className={`border border-gray-200 ${formik.touched.cardNumber && formik.errors.cardNumber ? '' : 'border-t-0'} rounded-bl-md px-3 p-2 bg-gray-50 text-gray-700 text-base sm:text-[13px] placeholder-gray-300 focus:outline-none`}
                    />
                    <div className="relative">
                        <input
                            ref={cvcRef}
                            type="text"
                            placeholder="CVC / CVV"
                            value={formik.values.cvc}
                            onChange={(e) => handleInputChange(e, 'cvc')}
                            className={`border border-gray-200 ${formik.touched.cardNumber && formik.errors.cardNumber ? '' : 'border-t-0'} border-l-0 rounded-br-md px-3 p-2 w-full bg-gray-50 text-gray-700 text-base sm:text-[13px] placeholder-gray-300 focus:outline-none`}
                        />
                        <Image
                            src={formik.touched.cvc && formik.errors.cvc ? '/cvverror.svg' : '/cvv.svg'}
                            alt="cvv"
                            width={25}
                            height={12}
                            className="absolute right-2 top-2"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2">
                    {renderError('expiry')}
                    {renderError('cvc')}
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
                    {renderError('name')}
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

export default DebitOrCredit;
