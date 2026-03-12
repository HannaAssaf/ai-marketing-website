import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const sansation = localFont({
  variable: "--font-heading",
  display: "swap",
  src: [
    { path: "../public/fonts/Sansation-Light.woff2",      weight: "300", style: "normal" },
    { path: "../public/fonts/Sansation-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "../public/fonts/Sansation-Regular.woff2",    weight: "400", style: "normal" },
    { path: "../public/fonts/Sansation-Italic.woff2",     weight: "400", style: "italic" },
    { path: "../public/fonts/Sansation-Bold.woff2",       weight: "700", style: "normal" },
    { path: "../public/fonts/Sansation-BoldItalic.woff2", weight: "700", style: "italic" },
  ],
});

export const metadata: Metadata = {
  title: "AutoAI — Automate Your Business with Next-Level AI",
  description: "Let fully automated systems handle the busywork so your team can focus on high-impact growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${sansation.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
