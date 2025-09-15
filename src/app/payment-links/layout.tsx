// app/layout.tsx
import Footer from "@/components/include/Footer";
import Navbar from "@/components/include/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Links",
  description:
    "Goti Pay Online Payment System is a secure, fast, and user-friendly digital payment solution designed to simplify online transactions. It enables businesses and individuals to send and receive money seamlessly through multiple payment methods, including credit/debit cards, mobile wallets, and bank transfers. With robust security features and an intuitive interface, Goti Pay ensures a smooth and reliable payment experience for users worldwide.",
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
