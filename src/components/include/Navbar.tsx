'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import CountrySelect from '../Select/CountrySelect';
import { menuItems } from '@/utils/data/menuItems';

const dropdownVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.2 } },
};

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200  sticky top-0 w-full left-0 z-50">
      <div className="max-w-6xl  flex flex-wrap items-center justify-between mx-auto p-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Logo" width={110} height={32} priority />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden inline-flex items-center p-2 text-gray-600 hover:text-black"
        >
          {mobileOpen ? '' : <Menu size={22} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:w-auto lg:order-1">
          <ul className="flex flex-row lg:space-x-1">
            {menuItems?.map((item) => (
              <li
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.submenu && setActiveDropdown(item.name)
                }
                onMouseLeave={() => item.submenu && setActiveDropdown(null)}
              >
                {item.submenu ? (
                  <motion.button className="flex items-center py-2 px-3 font-normal hover:text-[var(--primary)] text-[0.85rem] cursor-pointer">
                    {item.name}

                    <div className="ml-1">
                      <motion.div
                        animate={
                          item.submenu && activeDropdown === item.name
                            ? { rotate: 180 }
                            : { rotate: 0 }
                        }
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={12} />
                      </motion.div>
                    </div>
                  </motion.button>
                ) : (
                  <Link
                    href={item.href ?? '#'}
                    className="block py-2 px-3 font-normal hover:text-[var(--primary)] text-[0.85rem]"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {item.submenu && activeDropdown === item.name && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={dropdownVariants}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white z-50 px-4 sm:px-6 md:px-0 mt-3 border border-gray-200 rounded shadow-lg"
                      style={{ minWidth: '300px', whiteSpace: 'nowrap' }}
                    >
                      <div className="p-6 gap-6 grid grid-flow-row sm:grid-flow-col auto-cols-max">
                        {item.submenu.map((group) => (
                          <div key={group.heading}>
                            <h3 className="text-gray-500 text-[0.75rem] uppercase font-semibold mb-3">
                              {group.heading}
                            </h3>
                            <ul className="space-y-2">
                              {group.items.map((sub) => (
                                <li key={sub.title}>
                                  <Link
                                    href={sub.href}
                                    className="flex items-start gap-3 p-2 rounded hover:bg-gray-100"
                                  >
                                    <div className="text-[var(--primary)] mt-1 text-[0.7rem]">
                                      {sub.icon}
                                    </div>
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <span className="font-semibold text-gray-900 text-[0.7rem]">
                                          {sub.title}
                                        </span>
                                        {sub.badge && (
                                          <span className=" text-green-600 text-[0.6rem]">
                                            {sub.badge}
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-[10px] text-gray-500">
                                        {sub.description}
                                      </p>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}

            <li className="flex items-center px-2 text-[0.85rem]">
              <CountrySelect />
            </li>
            <li className="flex items-center px-2">
              <Link
                href="/login"
                className="px-3 py-1 border border-[var(--primary)] rounded hover:bg-gray-100 text-[0.85rem]"
              >
                Login
              </Link>
            </li>
            <li className="flex items-center px-2">
              <Link
                href="/register"
                className="px-3 py-1 border border-[var(--primary)] bg-[var(--primary)] text-white rounded hover:bg-blue-800 text-[0.85rem]"
              >
                Register →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 h-full   bg-white shadow-lg z-50  overflow-y-auto"
            >
              {' '}
              <div className="border-b px-4 py-3 border-gray-200  sticky top-0 bg-white">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={110}
                    height={32}
                    priority
                  />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="absolute top-4 right-4 text-gray-600 hover:text-black"
                >
                  <X size={22} />
                </button>
              </div>
              <ul className="my-5  px-6">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    {item.submenu ? (
                      <div className='pb-5'>
                        <p className="font-semibold mb-2 text-[12px]">
                          {item.name}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-2">
                          {item.submenu.map((group) => (
                            <div key={group.heading}>
                              <h3 className="text-gray-500 text-[11px] uppercase mb-2">
                                {group.heading}
                              </h3>
                              <ul className="space-y-2">
                                {group.items.map((sub) => (
                                  <li key={sub.title}>
                                    <Link
                                      href={sub.href}
                                      className="flex items-center gap-2 text-[11px] text-gray-700"
                                    >
                                      <span className="text-gray-500">
                                        {sub.icon}
                                      </span>
                                      {sub.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link href={item.href ?? '#'} className="block text-gray-500 text-[11px] uppercase mb-2">
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
                <li className='border border-gray-200 text-gray-500 text-[11px] px-1 rounded mt-4'>
                  <CountrySelect />
                </li>
                <ul className="flex mt-3 justify-between gap-2">
                  <li className="w-full">
                    <Link
                      href="/login"
                      className="block px-3 py-1 border border-gray-200 rounded text-gray-500 text-[11px] uppercase text-center w-full"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="/register"
                      className="block px-3 py-1 bg-[var(--primary)] rounded text-white text-[11px] uppercase text-center w-full"
                    >
                      Register →
                    </Link>
                  </li>
                </ul>

              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
