'use client';

import { setSelectedVersion, toggleSubmenu, setCurrentHash } from '@/store/slice/docsSlice';
import { AppDispatch, RootState } from '@/store/store';
import Link from 'next/link';
import React, { FC } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';

const sidebarLinks = [
    { title: 'Introduction', href: 'Introduction' },
    { title: 'Getting Started', href: 'Getting Started' },
    {
        title: 'Data Types',
        href: 'Data Types',
        submenu: [
            { title: 'Primitive', href: 'Primitive' },
            { title: 'Objects', href: 'Objects' },
        ],
    },
    { title: 'Errors', href: 'Errors' },
    { title: 'Versioning', href: 'Versioning' },
    { title: 'Changelog', href: 'Changelog' },
    { title: 'Account Capability', href: 'Account Capability' },
    { title: 'Authentication', href: 'Authentication' },
    { title: 'Billing', href: 'Billing' },
];

const versions = ['2025-08-29 (latest)', '2025-07-01', '2025-06-15'];

const DocsSidebar: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { selectedVersion, openSubmenus, currentHash } = useSelector(
        (state: RootState) => state.docs
    );


    return (
        <aside className="hidden md:block min-w-64 bg-white border-r border-gray-200 mt-4 sticky top-0 overflow-y-auto">
            {/* Version Selector */}
            <div className="mb-6 px-4">
                <p className='text-sm pb-2'>Version - {currentHash}</p>
                <select
                    value={selectedVersion}
                    onChange={(e) => dispatch(setSelectedVersion(e.target.value))}
                    className="w-full border border-gray-300 rounded p-2 text-sm"
                >
                    {versions.map((v) => (
                        <option key={v} value={v}>
                            {v}
                        </option>
                    ))}
                </select>
            </div>

            {/* Sidebar Links */}
            <nav className="space-y-2 text-sm">
                {sidebarLinks.map((link) => (
                    <div key={link.title}>
                        {/* Parent Link */}
                        {link.submenu ? (
                            <button
                                className="flex justify-between w-full  p-2 px-4 py-1 hover:bg-gray-100 items-center text-left"
                                onClick={() => dispatch(toggleSubmenu(link.title))}
                            >
                                {link.title}
                                {openSubmenus[link.title] ? <HiChevronUp /> : <HiChevronDown />}
                            </button>
                        ) : (
                            <Link href={`http://localhost:3000/docs/api#${link.href.replace(/\s+/g, '_')}`}
                                className={`block w-full  p-2 px-4  py-1 hover:bg-gray-100 text-left ${currentHash === link.href.replace(/\s+/g, '_') ? 'bg-gray-200 font-medium' : ''
                                    }`}
                                    
                            >
                                {link.title}
                            </Link>
                        )}

                        {/* Submenu */}
                        {link.submenu && openSubmenus[link.title] && (
                            <div className="pl-4 mt-1 space-y-1">
                                {link.submenu.map((sub) => (
                                    <Link href={`http://localhost:3000/docs/api#${link.title.replace(/\s+/g, '_')+'/'+sub.href}`}
                                        key={sub.title}
                                        className={`block w-full  p-2 px-4  hover:bg-gray-100 text-left text-gray-600 text-sm ${currentHash === sub.href.replace(/\s+/g, '_') ? 'bg-gray-200 font-medium' : ''
                                            }`}
                                    >
                                        {sub.title}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>
        </aside>
    );
};

export default DocsSidebar;
