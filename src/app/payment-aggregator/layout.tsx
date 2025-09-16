// app/layout.tsx
import Footer from "@/components/include/Footer";
import Navbar from "@/components/include/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Gateway",
 description: "Goti Pay is a secure, fast, and user-friendly online payment system for cards, wallets, and bank transfers, ensuring smooth transactions worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar /> 
        {/* Main content */}
        <main className="flex-1">{children}</main>

        <Footer/>
      </body>
    </html>
  );
}
