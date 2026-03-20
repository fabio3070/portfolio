import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";

const geistMono = Poppins({
  variable: "--font-poppins-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistRoboto = Roboto({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Welcome to my portfolio. By Fabio Santos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${geistRoboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
