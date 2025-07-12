import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script'; // Import the Script component
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Update your metadata to something more descriptive
export const metadata: Metadata = {
  title: "David Geddam | AI Portfolio",
  description: "The AI-enhanced portfolio of David Geddam, an aspiring AI Engineer.",
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
        {children}
        {/* Add the LinkedIn script right before the closing body tag */}
        <Script
          src="https://platform.linkedin.com/badges/js/profile.js"
          async
          defer
        />
      </body>
    </html>
  );
}