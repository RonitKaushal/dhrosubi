import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/navbar";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dhrosubi | Non Woven Carry Bags Manufacturer in India",
  description:
    "Dhrosubi manufactures eco-friendly, durable, and reusable non-woven carry bags. Say goodbye to single-use plastics with our premium quality bags. Order wholesale and custom designs for retail, grocery, and events.",
  keywords: [
    "non woven bags",
    "eco friendly carry bags",
    "non woven bag manufacturer",
    "reusable shopping bags",
    "wholesale carry bags",
    "custom non woven bags",
    "Dhrosubi bags",
    "India bag manufacturer",
  ],
  authors: [{ name: "Dhrosubi Team" }],
  creator: "Dhrosubi",
  publisher: "Dhrosubi",
openGraph: {
    title: "Dhrosubi | Non Woven Carry Bags Manufacturer",
    description: "Eco-Friendly, Durable, and Reusable—our Non-Woven Carry bags are designed to reduce plastic waste...",
    url: "https://dhrosubi.com",
    siteName: "Dhrosubi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dhrosubi Non-Woven Carry Bags",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Dhrosubi", // replace with your handle if you have
    creator: "@Dhrosubi",
    title: "Dhrosubi | Premium Non Woven Bags",
    description:
      "Eco-friendly, reusable, and durable non woven carry bags direct from manufacturer.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.dhrosubi.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col justify-center items-center w-full h-full`}
      >
        <Analytics/>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
