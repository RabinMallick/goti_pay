'use client'


import { setMobileSidebarOpen } from '@/store/slice/docsSlice';
import { AppDispatch } from '@/store/store';
import Image from 'next/image'
import React, { FC } from 'react'
import { HiMenu } from 'react-icons/hi';
import { useDispatch } from 'react-redux';


const DocsNavber: FC = () => {
  const dispatch = useDispatch<AppDispatch>(); 
  return (
    <>
      <nav className="w-full bg-white border-b border-gray-200  px-6 py-3 flex justify-between items-center sticky top-0 z-50">
        <div className="text-xl font-bold"><div className="flex items-center text-[var(--primary)] text-2xl"><Image src='/logo.svg' alt='' width={140} height={32} /> API</div></div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4">
          <button className="text-blue-600">Docs</button>
          <button className="text-blue-600">JS</button>
          <button className="text-blue-600">Login</button>
          <button className="bg-purple-600 text-white px-4 py-1 rounded">
            Get started in sandbox
          </button>
        </div>

        {/* Mobile menu icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => dispatch(setMobileSidebarOpen(true))}
        >
          <HiMenu />
        </button>
      </nav>

    </>
  )
}

export default DocsNavber