import "../globals.css";
import { Providers } from "@/Provider";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <title>ReservNow</title>
      <body>
        <Providers>
          <Header />
          <div style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
