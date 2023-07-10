"use client"
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>ReservNow</title>
      <body className={inter.className}>
          {/* <Header /> */}
          <div>{children}</div>
          {/* <Footer /> */}
      </body>
    </html>
  );
}
