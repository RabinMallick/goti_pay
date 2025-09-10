'use client';

import clsx from 'clsx';
import { setActiveCodeTab } from '@/store/slice/docsSlice';
import { useDispatch, useSelector } from 'react-redux';
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
    const { activeCodeTab } = useSelector(
        (state: RootState) => state.docs
    );
    return (
        <>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Getting Started</h2>
                <p className="mb-2">
                    Welcome to Airwallex. The Airwallex API is based on REST principles, offering a predictable and flexible integration experience for developers embedding financial flows into their applications.
                </p>
                <p className="text-sm text-gray-500">
                    API endpoints:
                    <ul className="list-disc ml-5">
                        <li>Sandbox: https://api-demo.airwallex.com/api/v1/</li>
                        <li>Production: https://api.airwallex.com/api/v1/</li>
                    </ul>
                </p>
            </section>

            <section>
                <h3 className="text-lg font-semibold mb-2">Authentication</h3>
                <p className="mb-4">
                    To begin you will need to obtain an access token to allow you to reach all other API endpoints. Using your unique Client ID and API key...
                </p>

                {/* Code Tabs */}
                <div className="border border-gray-200 rounded">
                    <div className="flex border-b border-gray-200">
                        {Object.keys(codeExamples).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => dispatch(setActiveCodeTab(tab))}
                                className={clsx(
                                    'px-4 py-2 text-sm font-medium',
                                    activeCodeTab === tab
                                        ? 'border-b-2 border-[var(--primary)]  text-[var(--primary)] '
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
            </section>

        </>
    );
}
