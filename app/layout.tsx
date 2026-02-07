import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Tahshon Holmes | Portfolio",
  description: "Portfolio of Tahshon Holmes - Web Developer & Designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
