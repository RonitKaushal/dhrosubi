import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dhrosubi | Non Woven Carry Bags Manufacturer",
  description:
    "Eco-Friendly, Durable, and Reusable—our Non-Woven Carry bags are designed to reduce plastic waste while providing a strong and stylish alternative. Join us in making a greener choice for a better tomorrow!",
  twitter: {
    card: "summary_large_image",
    title: "Dhrosubi | Premium Products",
    description: "Best products at the best prices!",
    images: ["/og-image.png"],
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
        <NavBar />
        {children}
      </body>
    </html>
  );
}
