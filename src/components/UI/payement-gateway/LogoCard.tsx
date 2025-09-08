import Image from 'next/image';
import React, { FC } from 'react'
import { CiCircleCheck } from 'react-icons/ci';
import { AnimatePresence, motion } from 'framer-motion';


interface LogoCardProps {
    logo: string;
    selected: boolean;
    onClick: () => void;
}

const LogoCard: FC<LogoCardProps> = ({ logo, selected, onClick }) => {
    return (
        <motion.div
            onClick={onClick}
            className="flex justify-center items-center h-16 relative rounded-md cursor-pointer"
            layout
            whileTap={{ scale: 0.95 }}
            animate={{
                borderColor: selected ? 'var(--primary)' : '#e5e7eb',
                boxShadow: selected ? '0 0 0 0.5px var(--primary)' : 'none',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <div className="w-full h-full relative">
                <Image src={logo} alt="logo" fill className="object-contain p-2" />
            </div>
            <AnimatePresence>
                {selected && (
                    <motion.div
                        key="check"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-1 top-1 text-sm text-green-800"
                    >
                        <CiCircleCheck />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default LogoCard