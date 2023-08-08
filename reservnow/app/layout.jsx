"use client"
import { Providers } from "@/Provider";
import "./globals.css";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <title>ReservNow</title>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
