import { AuthProvider } from "@/context/AuthProvider";
import "./globals.css";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <title>ReservNow</title>
      <body>
        <AuthProvider>
          <div>{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
