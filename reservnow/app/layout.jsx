"use client"
import { Providers } from "@/Provider";

import localFont from 'next/font/local'

export const Circular = localFont({
  src: '../fonts/Circular/Circular-normal-400-100.ttf',
  display: 'swap',
})

import "./globals.css";


export default function RootLayout({ children }) {

  return (
    <html lang="en" className={Circular.className}>
      <title>ReservNow</title>
      <body style={{ fontFamily: Circular }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
