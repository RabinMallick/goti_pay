'use client';

import { setSelectedVersion, toggleSubmenu } from '@/store/slice/docsSlice';
import { AppDispatch, RootState } from '@/store/store';
import React, { FC } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
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

const DocsSidebar: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { selectedVersion, openSubmenus } = useSelector(
        (state: RootState) => state.docs
    );

    return (
        <>

            <aside className="hidden md:block min-w-64 bg-white border-r border-gray-200 p-4 sticky top-0  overflow-y-auto ">
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

                <nav className="space-y-2 text-sm ">
                    {sidebarLinks.map((link) => (
                        <div key={link.title}>
                            <button
                                className="flex justify-between w-full px-2 py-1 rounded hover:bg-gray-100 items-center"
                               onClick={() => link.submenu && dispatch(toggleSubmenu(link.title))}
                            >
                                {link.title}
                                {link.submenu &&
                                    (openSubmenus[link.title] ? <HiChevronUp /> : <HiChevronDown />)}
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
            </aside>
        </>
    )
}

export default DocsSidebar