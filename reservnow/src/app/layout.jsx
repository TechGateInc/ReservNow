"use client"
import { Providers } from "@/src/api/Provider";
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
