import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/store/providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Goti Pay",
  description: "Goti Pay Online Payment System is a secure, fast, and user-friendly digital payment solution designed to simplify online transactions. It enables businesses and individuals to send and receive money seamlessly through multiple payment methods, including credit/debit cards, mobile wallets, and bank transfers. With robust security features and an intuitive interface, Goti Pay ensures a smooth and reliable payment experience for users worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
 {
  return (
    <html lang="en">

      <Providers>
        <body className={`${poppins.variable} antialiased`} >{children}
        </body>
      </Providers>
    </html>
  );
}
