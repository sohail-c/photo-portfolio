import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sohail Chutani",
  description: "A responsive photo portfolio built with Next.js, featuring a masonry gallery and lightbox.",
  openGraph: {
    title: "Sohail Chutani | Photo Portfolio",
    description:
      "A responsive photo portfolio built with Next.js, featuring a masonry gallery and lightbox.",
    url: "https://sohailchutani.com",
    siteName: "Sohail Chutani — Photo Portfolio",
    //images: ["/og-image.jpg"], // place a 1200x630 image in /public
    type: "website",
  },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
