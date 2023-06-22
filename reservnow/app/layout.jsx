import "./globals.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/Context/context";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({children}) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {/* <Header /> */}
          <div>{children}</div>
          {/* <Footer /> */}
        </AuthProvider>
      </body>
    </html>
  );
}
