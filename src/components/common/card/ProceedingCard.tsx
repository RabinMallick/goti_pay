import React, { FC } from 'react'

const ProceedingCard: FC = () => {
    return (
        <>
            <p className="text-[11px] mt-4 text-gray-500 p-2 rounded-md bg-gray-50 leading-4 border border-gray-200">
                By proceeding with this payment, you agree to our{' '}
                <span className="text-[var(--primary)] underline cursor-pointer">
                    Terms and Conditions
                </span>
                , which are limited to facilitating your payment to &quot;Company
                Name&quot;.
            </p>
        </>
    )
}

export default ProceedingCard