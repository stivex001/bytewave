import type { Metadata } from "next";

import "./globals.css";
import { HeaderProvider } from "@/contexts/HeaderContext";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { public_sans } from "@/app/fonts";
import { SearchProvider } from "@/contexts/SearchContext";

export const metadata: Metadata = {
  title: "Bytewave",
  description: "Official Bytewave website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`!scroll-smooth  `}>
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={`root overflow-x-hidden ${public_sans.className} `}>
        <HeaderProvider>
          <SearchProvider>
            <Navbar />
            {children}
            <Footer />
          </SearchProvider>
        </HeaderProvider>
      </body>
    </html>
  );
}
