import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://toolioiq.com"),

  title: {
    default: "ToolioIQ",
    template: "%s | ToolioIQ",
  },

  description:
    "Free calculators, generators, and word tools designed to help you get quick answers fast.",

  icons: {
    icon: "/favicon.png",
  },

  keywords: [
    "calculator",
    "online calculator",
    "mortgage calculator",
    "age calculator",
    "BMI calculator",
    "password generator",
    "word counter",
    "character counter",
    "free tools",
  ],

  openGraph: {
    title: "ToolioIQ",
    description:
      "Free calculators, generators, and word tools designed to help you get quick answers fast.",
    url: "https://toolioiq.com",
    siteName: "ToolioIQ",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ToolioIQ",
    description:
      "Free calculators, generators, and word tools designed to help you get quick answers fast.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-558034Q37Z"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-558034Q37Z');
          `}
        </Script>
        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
