import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from '../components/Footer'
import "./globals.css";

export const metadata: Metadata = {
  title: "Google",
  description: "Google clone by Saahand youtube tutorial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'relative min-h-screen'}>{children}
        <Footer />
      </body>
    </html>
  );
}
