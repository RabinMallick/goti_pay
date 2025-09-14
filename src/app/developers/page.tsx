'use client';

import { useEffect } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCodeTab, setCurrentHash } from '@/store/slice/docsSlice';
import { AppDispatch, RootState } from '@/store/store';

const codeExamples = {
    Shell: `curl -X POST https://api-demo.airwallex.com/api/v1/authentication/login \\ -H "Content-Type: application/json" \\ -d '{"client_id":"YOUR_CLIENT_ID","api_key":"YOUR_API_KEY"}'`,

    JavaScript: `import axios from 'axios';

axios.request({
  url: 'https://api-demo.airwallex.com/api/v1/authentication/login',
  method: 'post',
  headers: { 'Content-Type': 'application/json' },
  data: { client_id: 'YOUR_CLIENT_ID', api_key: 'YOUR_API_KEY' },
});`,

    Python: `import requests

response = requests.post(
  'https://api-demo.airwallex.com/api/v1/authentication/login',
  json={'client_id': 'YOUR_CLIENT_ID', 'api_key': 'YOUR_API_KEY'}
)`,

    CSharp: `// C# example
using System.Net.Http;`,

    Java: `// Java example
HttpClient client = HttpClient.newHttpClient();`,
};

export default function DocsApi() {
    const dispatch = useDispatch<AppDispatch>();
    const { activeCodeTab, currentHash } = useSelector((state: RootState) => state.docs);

    useEffect(() => {
        const hash = window.location.hash; // e.g., "#/Introduction"
        if (hash) {
            const safeHash = CSS.escape(hash.slice(1)); // remove '#' and escape
            const el = document.querySelector(`#${safeHash}`);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }

    }, []);

    // Update hash on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            let found = '';
            sections.forEach((sec) => {
                const rect = sec.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    found = sec.id;
                }
            });

            if (found && found !== currentHash) {
                setCurrentHash(found);
                history.replaceState(null, '', `#${found}`);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // run on mount in case already scrolled

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [currentHash]);



    return (
        <div className="text-gray-900">



            <section className='mb-12' id="Introduction">
                {/* Intro */}
                <div className="w-full mb-6">
                    <h1 className="text-xl font-semibold mb-4">Introduction</h1>
                    <p className="mb-4 text-xs md:text-[13px]">
                        Welcome to Airwallex.
                    </p>
                </div>

                {/* API Endpoint Table */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-6">
                    <div className="md:col-span-3 rounded leading-[2rem]">
                        <p className="mb-4 text-xs md:text-[13px] leading-relaxed">
                            The Airwallex API is based on REST principles, offering a predictable and flexible integration experience for developers embedding financial flows into their applications.
                        </p>
                        <p className="mb-4 text-xs md:text-[13px] leading-relaxed">
                            The API suite offers a diverse range of products, including global business accounts, payments acceptance, spend management, and more. Sandbox accounts are available for testing integrations in a secure environment. For more details, see{' '}
                            <a href="#" className="text-blue-600 underline">Sandbox environment overview</a>.
                        </p>
                    </div>

                    <div className="md:col-span-3 rounded">
                        <div className="overflow-hidden rounded-lg border border-gray-200">
                            <table className="w-full text-sm bg-white">
                                <thead>
                                    <tr className=" bg-gray-200 text-left">
                                        <th className="p-2 px-4 font-medium">API Endpoint</th>
                                        <th className="p-2 px-4 font-medium">Environment</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-gray-50 text-xs">
                                    <tr className=" border-t border-gray-200">
                                        <td className="p-2 px-4 break-all">https://api-demo.airwallex.com/api/v1/</td>
                                        <td className="p-2 px-4">Sandbox</td>
                                    </tr>
                                    <tr className=" border-t border-gray-200">
                                        <td className="p-2 px-4 break-all">https://api.airwallex.com/api/v1/</td>
                                        <td className="p-2 px-4">Production</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </section>



            {/* Getting Started */}
            <section className='mb-12' id="Getting_Started" >
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-6">
                    <div className="md:col-span-3 leading-[2rem] ">
                        <h1 className="text-xl font-semibold mb-4">Getting Started</h1>
                        <p className="mb-4 text-xs md:text-[13px] leading-relaxed">
                            An example workflow is set out below for guidance on how the Airwallex API operates in practice.
                        </p>
                        <p className="mb-4 text-xs md:text-[13px] leading-relaxed">
                            In this example, we want to make a HKD$10,000 transfer in HKD to a beneficiary in HK, funded by an available account balance in USD.
                            <a href="#" className="text-blue-600 underline"> Sandbox environment overview</a>.
                        </p>
                    </div>
                </div>

                {/* API Endpoint Table */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-6">
                    <div className="md:col-span-3 rounded leading-[2rem]">
                        <h1 className="text-md text-gray-950 font-normal mb-4">1. Authentication</h1>
                        <p className="mb-4 text-xs md:text-[13px] leading-relaxed">
                            To begin you will need to obtain an access token. Using your unique Client ID and API key (found in the API menu in the Airwallex Web App) you can call the Authentication API endpoint. On success, an access token will be granted.
                        </p>
                    </div>

                    <div className="md:col-span-3 rounded">
                        <div className="overflow-hidden  ">
                            <div className="bg-black rounded-md mb-6">
                                <div className="flex border-b border-gray-200">
                                    {Object.keys(codeExamples).map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => dispatch(setActiveCodeTab(tab))}
                                            className={clsx(
                                                'px-4 py-2 text-sm font-medium',
                                                activeCodeTab === tab
                                                    ? 'border-b-2 border-[var(--primary)] text-[var(--primary)]'
                                                    : 'text-gray-500'
                                            )}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                                <pre className="p-4 bg-gray-900 text-white overflow-x-auto text-sm">
                                    {codeExamples[activeCodeTab as keyof typeof codeExamples]}
                                </pre>
                            </div>

                            <div className="bg-black rounded-md mb-6">
                                <div className="flex border-b border-gray-200">
                                    <button
                                        className={clsx(
                                            'px-4 py-2 text-sm font-medium',
                                            activeCodeTab === '' ? 'border-b-2 border-[var(--primary)] text-[var(--primary)]' : 'text-gray-500'
                                        )}
                                    >
                                        Example authentication response
                                    </button>
                                </div>
                                <pre className="p-4 bg-gray-900 text-white overflow-x-auto text-sm">
                                    {codeExamples[activeCodeTab as keyof typeof codeExamples]}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Data Types */}
            <section className='mb-12' id="Data_Types" >
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-6">
                    <div className="md:col-span-3 leading-[2rem] ">
                        <h1 className="text-xl font-semibold mb-4">Data Types</h1>
                        <p className="mb-4 text-xs md:text-[13px] leading-relaxed">
                            This section describes the data types and formats used consistently in the API.
                        </p>
                    </div>
                </div>

                {/* API Endpoint Table */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-6">
                    <div className="md:col-span-3 rounded ">
                        <h1 className="text-md text-gray-400 font-normal mb-4 border-b border-gray-200">
                            DATA TYPES
                        </h1>

                        <div className="space-y-6">
                            {/* Dates */}
                            <div className="flex w-full">
                                <div className="w-36 md:64">
                                    <h3 className="text-sm font-semibold text-gray-700">Dates</h3>
                                </div>
                                <div className="flex-1 text-xs md:text-[13px] leading-relaxed">
                                    Dates (without time/timezone information) in{" "}
                                    <code className="bg-gray-100 rounded px-1 text-[10px] border border-gray-300">
                                        YYYY-MM-DD
                                    </code>{" "}
                                    format. Sample use cases:{" "}
                                    <code className="bg-gray-100 rounded px-1 text-[10px] border border-gray-300">
                                        conversion_date
                                    </code>
                                    ,{" "}
                                    <code className="bg-gray-100 rounded px-1 text-[10px] border border-gray-300">
                                        payment_date
                                    </code>
                                </div>
                            </div>

                            {/* Timestamps */}
                            <div className="flex w-full">
                                <div className="w-36 md:64">
                                    <h3 className="text-sm font-semibold text-gray-700">Timestamps</h3>
                                </div>
                                <div className="flex-1 text-xs md:text-[13px] leading-relaxed">
                                    Date & time in{" "}
                                    <code className="bg-gray-100 rounded px-1 text-[10px] border border-gray-300">
                                        YYYY-MM-DDTHH:mm:ssZ
                                    </code>{" "}
                                    format (ISO 8601). Sample use cases:{" "}
                                    <code className="bg-gray-100 rounded px-1 text-[10px] border border-gray-300">
                                        settlement_cutoff_time
                                    </code>
                                    ,{" "}
                                    <code className="bg-gray-100 rounded px-1 text-[10px] border border-gray-300">
                                        created_at
                                    </code>
                                    ,{" "}
                                    <code className="bg-gray-100 rounded px-1 text-[10px] border border-gray-300">
                                        last_updated_at
                                    </code>
                                </div>
                            </div>

                            {/* Country Codes */}
                            <div className="flex w-full">
                                <div className="w-36 md:64">
                                    <h3 className="text-sm font-semibold text-gray-700">Country Codes</h3>
                                </div>
                                <div className="flex-1 text-xs md:text-[13px] leading-relaxed">
                                    Two-letter{" "}
                                    <a href="#" className="text-indigo-600 underline">
                                        ISO 3166-2
                                    </a>{" "}
                                    country code.
                                </div>
                            </div>

                            {/* Currency Codes */}
                            <div className="flex w-full">
                                <div className="w-36 md:64">
                                    <h3 className="text-sm font-semibold text-gray-700">Currency Codes</h3>
                                </div>
                                <div className="flex-1 text-xs md:text-[13px] leading-relaxed">
                                    Three-letter{" "}
                                    <a href="#" className="text-indigo-600 underline">
                                        ISO 4217
                                    </a>{" "}
                                    currency code.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-3 rounded">
                        <div className="overflow-hidden rounded-lg border border-gray-200 ">
                            <table className="w-full text-sm bg-white">
                                <thead>
                                    <tr className=" bg-gray-200 text-left">
                                        <th className="p-2 px-4 font-medium" colSpan={2}>Example values</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-gray-50 text-xs">
                                    <tr className=" border-t border-gray-200">
                                        <td className="p-2 px-4 break-all">Date</td>
                                        <td className="p-2 px-4">2017-03-26</td>
                                    </tr>
                                    <tr className=" border-t border-gray-200">
                                        <td className="p-2 px-4 break-all">Timestamp</td>
                                        <td className="p-2 px-4">2017-03-26T16:30:00+1100</td>
                                    </tr>

                                    <tr className=" border-t border-gray-200">
                                        <td className="p-2 px-4 break-all">Country Code</td>
                                        <td className="p-2 px-4">AU</td>
                                    </tr>

                                    <tr className=" border-t border-gray-200">
                                        <td className="p-2 px-4 break-all">Country Code</td>
                                        <td className="p-2 px-4">AUD</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}
