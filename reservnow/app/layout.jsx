import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/Provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>ReservNow</title>
      <body className={inter.className}>
        <Providers>
          <div style={{ marginBottom: "100px" }}>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
