import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zenon Dev — We Build What Matters | Web & Mobile Development Studio",
  description:
    "High-ROI websites, mobile apps, and AI automation for small businesses. Flat-fee pricing. Trusted by lawyers, doctors, dentists & more. Book a free call.",
  keywords: [
    "web development",
    "mobile app development",
    "AI automation",
    "small business website",
    "SMB digital agency",
    "flat fee web design",
    "Zenon Dev",
  ],
  openGraph: {
    title: "Zenon Dev — We Build What Matters",
    description:
      "High-ROI websites, mobile apps, and AI-powered automation — engineered to grow your business.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenon Dev — We Build What Matters",
    description:
      "High-ROI websites, mobile apps, and AI-powered automation — engineered to grow your business.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { SmoothScroll } from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
