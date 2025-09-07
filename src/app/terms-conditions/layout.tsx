import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions || Goti Pay",
  description: "Terms and conditions for using Goti Pay platform.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
          {children}
      </body>
    </html>
  );
}
