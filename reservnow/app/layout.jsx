import "./globals.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/Context/context";
import { Providers } from "@/features/Provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Providers>
            {/* <Header /> */}
            <div>{children}</div>
            {/* <Footer /> */}
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
