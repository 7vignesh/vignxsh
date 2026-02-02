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
  title: "Vignesh Gopikrishnan | Full Stack Developer",
  description: "Personal portfolio of Vignesh Gopikrishnan - Full Stack Developer specializing in React, Node.js, and MongoDB. View my projects, experience, and get in touch.",
  keywords: ["Full Stack Developer", "React", "Node.js", "MongoDB", "Portfolio", "Web Developer", "Bangalore"],
  authors: [{ name: "Vignesh Gopikrishnan" }],
  openGraph: {
    title: "Vignesh Gopikrishnan | Full Stack Developer",
    description: "Personal portfolio showcasing my projects and experience in web development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vignesh Gopikrishnan | Full Stack Developer",
    description: "Personal portfolio showcasing my projects and experience in web development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
