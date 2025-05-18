import type { Metadata } from "next";
import { Martel_Sans, Libre_Franklin } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CloudBackground from "@/components/layout/CloudBackground";

const sansation = localFont({
  src: [
    {
      path: "../public/fonts/Sansation-Regular.ttf",
      weight: "400",
      style: "normal"
    }
  ],
  variable: "--font-sansation"
});

const ember = localFont({
  src: [
    {
      path: "../public/fonts/Ember_Heavy.woff2",
      weight: "800",
      style: "bold",
    },
    {
      path: "../public/fonts/Ember_Medium.woff2",
      weight: "500",
      style: "normal",
    }
  ],
  variable: "--font-ember",
});

const martelSans = Martel_Sans({
  variable: "--font-martel-sans",
  weight: "700",
  subsets: ["latin"],
});

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  weight: "600",
  subsets: ["latin"],
  display: "swap"
})

export const metadata: Metadata = {
  title: "GENEVA",
  description: "Cloud Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-hidden">
      <body
        className={`${sansation.className} ${ember.className} ${martelSans.variable} ${libreFranklin.variable} libre-franklin-text antialiased`}
      >
        <CloudBackground />
        <div className="flex flex-col min-h-screen mx-auto w-full max-w-[1464px] px-4 sm:px-6 lg:px-8 xl:px-15 py-8">
          <Navbar />
          <main className="w-full max-w-[1315px] px-4 sm:px-6 lg:px-8 xl:px-15 py-8">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
