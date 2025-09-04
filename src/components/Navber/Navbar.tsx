'use client';

import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

import CountrySelect from '../Select/CountrySelect';
import { arrowVariants } from '@/utils/VariantsFade';

interface MenuItem {
    name: string;
    options: string[];
}

const menuItems: MenuItem[] = [
    { name: 'Products', options: ['Product A', 'Product B', 'Product C'] },
    { name: 'Solutions', options: ['Solution X', 'Solution Y'] },
    { name: 'Pricing', options: ['Standard', 'Pro', 'Enterprise'] },
    { name: 'Developers', options: [] },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState<Record<string, boolean>>(
        Object.fromEntries(
            menuItems.filter((m) => m.options.length).map((m) => [m.name, false])
        )
    );

    const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>(
        Object.fromEntries(
            menuItems.filter((m) => m.options.length).map((m) => [m.name, null])
        )
    );

    // Scroll shadow
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node;
            Object.keys(dropdownRefs.current).forEach((key) => {
                const ref = dropdownRefs.current[key];
                if (ref && !ref.contains(target)) {
                    setDropdownOpen((prev) => ({ ...prev, [key]: false }));
                }
            });
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleDropdown = (item: string) =>
        setDropdownOpen((prev) => ({ ...prev, [item]: !prev[item] }));

    const renderDropdown = (item: MenuItem) => (
        <AnimatePresence>
            {item.options.length > 0 && dropdownOpen[item.name] && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-3 w-40 bg-white border border-gray-200 rounded shadow-md overflow-hidden z-20"
                >
                    {item.options.map((option, idx) => (
                        <button
                            key={idx}
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                        >
                            {option}
                        </button>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );

    const renderMobileDropdown = (item: MenuItem) => (
        <AnimatePresence>
            {item.options.length > 0 && dropdownOpen[item.name] && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pl-4 flex flex-col gap-1"
                >
                    {item.options.map((option, idx) => (
                        <button
                            key={idx}
                            className="text-left text-sm py-1 hover:text-[var(--primary)]"
                        >
                            {option}
                        </button>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );

    return (
        <nav
            className={`bg-white sticky top-0 z-50 transition-shadow duration-300 py-1 ${scrolled ? 'shadow-sm' : ''
                }`}
        >
            <div className="flex justify-between items-center py-2 px-4 md:px-0 max-w-6xl mx-auto">
                <Image
                    src="/logo.svg"
                    alt="GotiPay logo"
                    width={140}
                    height={32}
                    priority
                />

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-4 lg:gap-6">
                    {menuItems.map((item) => (
                        <div
                            key={item.name}
                            className="relative"
                            ref={(el) => { dropdownRefs.current[item.name] = el; }}
                        >
                            <motion.button
                                whileHover={{ y: -2, scale: 1.01 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                                className="flex items-center gap-1 font-normal hover:text-[var(--primary)] text-[0.85rem] cursor-pointer"
                                onClick={() => item.options.length && toggleDropdown(item.name)}
                            >
                                {item.name}
                                {item.options.length > 0 && (
                                    <motion.div
                                        animate={dropdownOpen[item.name] ? 'open' : 'closed'}
                                        variants={arrowVariants}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ChevronDown size={12} />
                                    </motion.div>
                                )}
                            </motion.button>
                            {renderDropdown(item)}
                        </div>
                    ))}

                    <CountrySelect />

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        className="px-3 py-1 border border-[var(--primary)] rounded hover:bg-gray-100 text-[0.85rem] cursor-pointer"
                    >
                        Login
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        className="w-full px-3 py-1 border border-[var(--primary)] bg-[var(--primary)] text-white rounded hover:bg-blue-800 text-sm cursor-pointer"
                    >
                        Register ↗
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setMobileOpen((prev) => !prev)}
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="md:hidden w-full px-4 pb-4 bg-white shadow"
                    >
                        {menuItems.map((item) => (
                            <div key={item.name}>
                                <button
                                    onClick={() =>
                                        item.options.length && toggleDropdown(item.name)
                                    }
                                    className="flex justify-between w-full py-2 text-left text-gray-700 hover:text-[var(--primary)] text-sm"
                                >
                                    {item.name}
                                    {item.options.length > 0 && (
                                        <motion.div
                                            animate={dropdownOpen[item.name] ? 'open' : 'closed'}
                                            variants={arrowVariants}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ChevronDown size={12} />
                                        </motion.div>
                                    )}
                                </button>
                                {renderMobileDropdown(item)}
                            </div>
                        ))}

                        <CountrySelect />

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="w-full mt-2 px-3 py-2 border border-gray-300 rounded hover:bg-gray-100 text-sm"
                        >
                            Login
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="w-full mt-2 px-3 py-2 bg-[var(--primary)] text-white rounded hover:bg-indigo-700 text-sm"
                        >
                            Register ↗
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
