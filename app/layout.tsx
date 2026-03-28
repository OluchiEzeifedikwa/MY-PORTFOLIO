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

export const metadata: Metadata = {
  title: "Oluchi Ezeifedikwa — Backend Developer",
  description:
    "Backend Developer specializing in Node.js, Express, and Prisma ORM. Building scalable, high-performance APIs and server-side systems.",
  keywords: ["Backend Developer", "Node.js", "Express", "Prisma", "PostgreSQL", "API Development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050510] text-slate-200`}
      >
        {children}
      </body>
    </html>
  );
}
