import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import PageEnhancements from "@/components/PageEnhancements/PageEnhancements";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CATS Computers L.L.C — IT Solutions, Networking, Security & Cloud",
  description:
    "CATS Computers is a trusted IT company in Dubai. We handle networks, security, cloud and software — all in one place, made simple for your business.",
  icons: {
    icon: [
      { url: "/images/cats-emblem.png", type: "image/png" },
    ],
    shortcut: ["/images/cats-emblem.png"],
    apple: ["/images/cats-emblem.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        <PageEnhancements />
      </body>
    </html>
  );
}
