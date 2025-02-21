import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { FlipWordsComponent } from "@/components/FlipWords";
import Footer from "@/components/Footer";
import { CartProvider } from 'use-shopping-cart'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zitech",
  description: "Phone Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-100`}
      >
        <FlipWordsComponent />
        <Navbar />
        <CartProvider
          mode="payment"
          cartMode="client-only"
          stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!}
          currency="NGN"
          successUrl="/success"
          cancelUrl="/cancel"
          shouldPersist={true}
        >
          {children}
        </CartProvider>
      
        <Footer />
      </body>
    </html>
  );
}
