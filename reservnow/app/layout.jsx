import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <title>ReservNow</title>
      <body className={inter.className}>
          <div>{children}</div>
      </body>
    </html>
  );
}
