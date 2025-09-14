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
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <DocsNavber />

      <div className="flex flex-1 overflow-hidden relative">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 border-r border-gray-200 bg-white flex-shrink-0 fixed h-screen">
          <DocsSidebar />
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8 overflow-auto ml-0 md:ml-64">
          {children}
        </main>

        {/* Mobile Sidebar */}
        <div className="md:hidden absolute inset-0 z-50">
          <DocsMobileSidebar />
        </div>
      </div>
    </div>
  );
}
