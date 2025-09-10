'use client';

import { setMobileSidebarOpen, setSelectedVersion, toggleSubmenu } from '@/store/slice/docsSlice';
import { AppDispatch, RootState } from '@/store/store';
import { motion, AnimatePresence } from 'framer-motion'
import React, { FC } from 'react'
import { HiChevronDown, HiChevronUp, HiX } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';

const sidebarLinks = [
    { title: 'Introduction', href: '#' },
    { title: 'Getting Started', href: '#' },
    {
        title: 'Data Types',
        href: '#',
        submenu: [
            { title: 'Primitive', href: '#' },
            { title: 'Objects', href: '#' },
        ],
    },
    { title: 'Errors', href: '#' },
    { title: 'Versioning', href: '#' },
    { title: 'Changelog', href: '#' },
    { title: 'Account Capability', href: '#' },
    { title: 'Authentication', href: '#' },
    { title: 'Billing', href: '#' },
];


const versions = ['2025-08-29 (latest)', '2025-07-01', '2025-06-15'];

const DocsMobileSidebar: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { selectedVersion, openSubmenus, mobileSidebarOpen } = useSelector(
        (state: RootState) => state.docs
    );
    return (
        <>

            {/* Mobile Sidebar (Slide from left) */}
            <AnimatePresence>
                {mobileSidebarOpen && (
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 flex z-50"
                    >
                        {/* Sidebar */}
                        <div className="bg-white w-64 p-6 h-full shadow-lg overflow-y-auto">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-bold">Menu</h2>
                                <button onClick={() => dispatch(setMobileSidebarOpen(false))}>
                                    <HiX className="text-2xl" />
                                </button>
                            </div>

                            <div className="mb-6">
                                <select
                                    value={selectedVersion}
                                    onChange={(e) => setSelectedVersion(e.target.value)}
                                    className="w-full border border-gray-300 rounded p-2 text-sm"
                                >
                                    {versions.map((v) => (
                                        <option key={v} value={v}>
                                            {v}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <nav className="space-y-2 text-sm">
                                {sidebarLinks.map((link) => (
                                    <div key={link.title}>
                                        <button
                                            className="flex justify-between w-full px-2 py-1 rounded hover:bg-gray-100 items-center"
                                            onClick={() => link.submenu && toggleSubmenu(link.title)}
                                        >
                                            {link.title}
                                            {link.submenu &&
                                                (openSubmenus[link.title] ? (
                                                    <HiChevronUp />
                                                ) : (
                                                    <HiChevronDown />
                                                ))}
                                        </button>
                                        {link.submenu && openSubmenus[link.title] && (
                                            <div className="pl-4 mt-1 space-y-1">
                                                {link.submenu.map((sub) => (
                                                    <a
                                                        key={sub.title}
                                                        href={sub.href}
                                                        className="block px-2 py-1 rounded hover:bg-gray-100 text-gray-600 text-sm"
                                                    >
                                                        {sub.title}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </nav>
                        </div>

                        {/* Overlay */}
                        <div
                            className="flex-1 inset-0 bg-black/20"
                            onClick={() => dispatch(setMobileSidebarOpen(false))}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default DocsMobileSidebar