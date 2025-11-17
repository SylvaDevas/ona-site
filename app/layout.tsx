import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ONA — The Initiation",
  description: "An immersive interactive healing.",
  openGraph: {
    title: "ONA — The Initiation",
    description: "Enter an immersive art experience to remember what you are.",
    url: "https://ona.now",
    siteName: "ONA — The Initiation",
    images: [
      {
        url: "/og-image.jpg",   // You must add this file
        width: 1200,
        height: 630,
        alt: "ONA — The Initiation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ONA — The Initiation",
    description: "Enter an immersive art experience to remember what you are.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
