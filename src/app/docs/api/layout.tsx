import DocsMobileSidebar from '@/components/include/DocsMobileSidebar';
import DocsNavber from '@/components/include/DocsNavber';
import DocsSidebar from '@/components/include/DocsSidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Goti Pay',
    description:
        'Goti Pay Online Payment System is a secure, fast, and user-friendly digital payment solution designed to simplify online transactions. It enables businesses and individuals to send and receive money seamlessly through multiple payment methods, including credit/debit cards, mobile wallets, and bank transfers. With robust security features and an intuitive interface, Goti Pay ensures a smooth and reliable payment experience for users worldwide.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="flex flex-col min-h-screen bg-gray-50">
                    <DocsNavber />

                    <div className="flex flex-1">

                        <DocsSidebar />
                        {/* Main content */}
                        <main className="flex-1 p-8  mx-auto">{children}</main>

                        <DocsMobileSidebar />
                    </div>
                </div>
            </body>
        </html>
    );
}
